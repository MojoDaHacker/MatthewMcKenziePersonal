const https = require('https');
const fs = require('fs');
const zlib = require('zlib');
const { MongoClient } = require('mongodb');


var path = encodeURI("/Property?$filter=OriginatingSystemName+eq+'mfrmls'+and+StandardStatus+eq+Enums.StandardStatus'Active'+and+MlgCanView+eq+true&$top=2500");
var options = {
  'method': 'GET',
  'hostname': 'api.mlsgrid.com',
  'path': path,
  'headers': {
    'Accept-Encoding': 'gzip, deflate, br',
    'Authorization': 'Bearer 376cca3838ddd72064e3d047936b1b10058de180',
    'Cookie': 'AWSELB=6117638D0E64C471D00E6EFDC92B1C359FEFE2DE5553E8826058C488B5CB62EE8171B3EE3A0C55229494AB8E036D5C5A2522594B32BC88CEA5414DD03BBBCF6237599DCB40; AWSELBCORS=6117638D0E64C471D00E6EFDC92B1C359FEFE2DE5553E8826058C488B5CB62EE8171B3EE3A0C55229494AB8E036D5C5A2522594B32BC88CEA5414DD03BBBCF6237599DCB40'
  },
  'maxRedirects': 20,
};
const mongoUrl = 'mongodb+srv://MattAdmin:America1@cluster0.uz2u2.mongodb.net/Cluster0?retryWrites=true&w=majority';
const client = new MongoClient(mongoUrl);

const dbName = "cluster0";

client.connect(() => {
  console.log("Connected correctly to server");

  makeReq();

})


function makeReq() {
  var chunks = [];
  var req;
  
  req = https.request(options, function (res) {  
    res.on("data", function (chunk) {
      console.log("Receiving Chunks...")
      chunks.push(chunk);
    });
  
    res.on("end", function () {
      var data = Buffer.concat(chunks);
      console.log("End of Response...\n");
    
      var mlsData = JSON.parse(zlib.unzipSync(data));
      
      //transform "@odata.id" key to "_id" key for MongoDB purposes
      mlsData.value = mlsData["value"].map(obj => {
        obj["_id"] = obj["@odata.id"];
        delete obj["@odata.id"];
        return obj; 
      })

      // insert data into DB
      insertData(mlsData["value"]).catch(console.dir)

      // send request for next page of MLS Data
      if(mlsData["@odata.nextLink"] !== undefined){
        options.path = mlsData["@odata.nextLink"].slice(23)
        console.log(options.path);
        makeReq()
      } else if (mlsData["@odata.nextLink"] == undefined) {
        client.close(() => {
          console.log("Mongo Connection Closed!");
        });
      }
    });
  
    res.on("error", function (error) {
      console.error(error);
    });
  });
  
  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  req.end(() => {console.log("Request Ending!")});
}

async function insertData(documents){
  try {
    //use collection mfrmlsProperties
    const db = client.db(dbName);

    const col = db.collection("mfrmlsActiveProperties");

    var result = await col.insertMany(documents)

  } catch (err) {
    console.log(err.stack);
  }
}
