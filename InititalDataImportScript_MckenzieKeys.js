const https = require('https');
const zlib = require('zlib');
const { MongoClient } = require('mongodb');

const resource = "Media";
var options = {
  'hostname': 'api.mlsgrid.com',
  'path': buildUrl(),
  'headers': {
    'Accept-Encoding': 'gzip, deflate, br',
    'Authorization': 'Bearer 376cca3838ddd72064e3d047936b1b10058de180',
    'Cookie': 'AWSELB=6117638D0E64C471D00E6EFDC92B1C359FEFE2DE5553E8826058C488B5CB62EE8171B3EE3A0C55229494AB8E036D5C5A2522594B32BC88CEA5414DD03BBBCF6237599DCB40; AWSELBCORS=6117638D0E64C471D00E6EFDC92B1C359FEFE2DE5553E8826058C488B5CB62EE8171B3EE3A0C55229494AB8E036D5C5A2522594B32BC88CEA5414DD03BBBCF6237599DCB40'
  },
  'maxRedirects': 20,
};
const mongoUrl = "mongodb+srv://MattAdmin:America1@Cluster0.uz2u2.mongodb.net/cluster0?retryWrites=true&w=majority";
const client = new MongoClient(mongoUrl);




client.connect(() => {

  console.log("Connected correctly to server");
  loop();

})

function buildUrl (){
  var path;

  if (resource === "Property") {
    path = encodeURI("/Property?$filter=OriginatingSystemName+eq+'mfrmls'+and+StandardStatus+eq+Enums.StandardStatus'Active'+and+MlgCanView+eq+true&$top=2500");
  }
  else if (resource === "Media"){
    path = encodeURI("/Media?$filter=OriginatingSystemName+eq+'mfrmls'+and+ModificationTimestamp+gt+2019-02-02T14:42:37.723Z+and+MlgCanView+eq+true&$top=2500");
  }

  return path
}


async function makeReq() {
  return new Promise((resolve, reject) => {
    var chunks = [];
    var newLink = null;
    
    https.get(options , res => {
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
    
      res.on("end", async function () {
        var data = Buffer.concat(chunks);
        console.log("End of Response...\n");
      
        var mlsData = JSON.parse(zlib.unzipSync(data));
        console.log("UNzip DOne")

        // send request for next page of MLS Data
        if(mlsData["@odata.nextLink"] !== undefined){
          options.path = mlsData["@odata.nextLink"].slice(23);
          newLink = true;
        } else if (mlsData["@odata.nextLink"] == undefined) {
          console.log("Data has no next link!")
          newLink = false
        }
        
        //filter out Media objs that don't match Property records in DB
        if (resource == "Media") {
          const mediaIDs = [];
          for(let obj of mlsData.value){
            if(mediaIDs.includes(obj.ResourceRecordID) != true){
              mediaIDs.push(obj.ResourceRecordID) //pack all ID's in single arr
            }
          }
          console.log(mediaIDs)
          var cursor = await findData({ListingId: { $in: mediaIDs }});
          var count = await cursor.count()
          if(count == 0){
            cursor.close()
            console.log(options.path);
            console.log("No Matches!");
            resolve(newLink)
            return
          } else {
            console.log("Matches Found!");
            var foundListingIds = await cursor.toArray()
            foundListingIds = foundListingIds.map(val => val.ListingId);
            console.log(foundListingIds);
            
            mlsData.value = mlsData.value.filter(val => foundListingIds.includes(val.ResourceRecordID) == true)
            
            cursor.close()
          } 
        }
        
        // transform "@odata.id" key to "_id" key for MongoDB purposes
        mlsData.value = mlsData["value"].map(obj => {
          obj["_id"] = obj["@odata.id"];
          delete obj["@odata.id"];
          return obj; 
        })
        
        // insert data into DB
        var insertRes = await insertData(mlsData["value"]).catch(console.dir)
        
        console.log(insertRes[Object.keys(insertRes)[0]]);
        resolve(newLink)
      });
    
      res.on("error", function (error) {
        reject(0);
      });
    });

  })
}
async function insertData(documents){
  try {
    const db = client.db("cluster0");
    const col = db.collection(`mfrmlsActive${resource}`);

    //use collection mfrmlsProperties
    return await col.insertMany(documents)

  } catch (err) {
    console.log(err.stack);
  }
}
async function findData(documents, matchArr){
  console.log(documents)
  try {
    const db = client.db("cluster0");
    const col = db.collection("mfrmlsActiveProperty");

    //use collection mfrmlsProperties
    return col.find(documents).project({ListingId: 1, _id: 0})

  } catch (err) {
    console.log(err.stack);
  }
}

async function loop(){
  while(true){
    var done = await makeReq();
    if(done == false){
      client.close();
      return 1
    } else {
      console.log(done)
    }
  }
}
