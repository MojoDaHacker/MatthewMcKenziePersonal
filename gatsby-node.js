// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it


exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, actions }) => {
  if (stage === "develop-html"|| stage === "build-html") {
    actions.setWebpackConfig({
      node: {
        fs: "empty",
      },
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}