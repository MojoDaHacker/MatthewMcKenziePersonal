require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`);

const gitHubToken = process.env.GITHUB_API_ACCESS_TOKEN
const gitHubQuery = `
query GitHubPinnedRepositories{ 
  viewer { 
    login
    isViewer
    pinnedItems (first: 5) {
      totalCount
      nodes {
        ... on Repository {
          name
          url
        }
      }
    }
  }
}
`


module.exports = {
  siteMetadata: {
    title: 'McKenzie\'s Keys',
    author: 'Matthew McKenzie',
    description: 'Matthew McKenzie\'s Portfolio Site',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
    ]
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // token: required by the GitHub API
        token: gitHubToken,
        // GraphQLquery: defaults to a search query
        graphQLQuery: gitHubQuery,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `wngrvjnbgulo`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: path.join(__dirname, `src`, `assets`, `images`, `logos`),
          options: {
            rule: {
              include: /\.inline\.svg$/
            },
            props: {
              className: "keySVG"
            },
          }
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, `src`, `assets`, `images`, `portfolioImg`, "OpenHouseKit"),
        name: 'OpenHouseKit',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, `src`, `assets`, `json`),
        name: 'JSON',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, `src`, `assets`),
        name: 'assets',
      },
    },
    'gatsby-background-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
  ],
};
