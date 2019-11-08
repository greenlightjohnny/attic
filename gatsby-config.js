/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Angels in the Attic',
    author: 'Admin'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',

    //////FACEBOOK
    {
      resolve: `gatsby-plugin-facebook-sdk`,
      options: {
        appId: '2518108111807119',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v5.0'
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },

    // {
    //   resolve: `gatsby-source-facebook`,
    //   options: {
    //     places: [`${107689574011138}`], // Can be either a numeric ID or the URL ID
    //     params: {
    //       fields: 'hours, posts { message, created_time }', // See Facebooks API to see what you can query for
    //     },
    //     key: process.env.FACEBOOK_GRAPH_TOKEN, // You will need to create a Facebook application and go through review in order to get an API token.
    //   },
    // },
    
  ],

}
