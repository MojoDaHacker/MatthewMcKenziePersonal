const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'McKenzie\'s Keys',
    author: 'Matthew McKenzie',
    description: 'Real Estate Services offer by Matthew McKenzie',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
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
