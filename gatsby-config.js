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
    title: 'Angels in The Attic',
    author: 'Admin',
    description:  "Information about the Angels in The Attic stores and donation center in Floyd County, VA",
    url: "https://focused-volhard-dee302.netlify.com/",
    image: "/src/images/logos.png",
    titleTemplate: "%s | Angels in The Attic",
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
   

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `markdown-pages`,
      },
    },

  

    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`, 
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Angels in The Attic`,
        short_name: `Angels`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },

    'gatsby-plugin-offline',

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    `gatsby-plugin-react-helmet`,
    `@contentful/gatsby-transformer-contentful-richtext`,

    // {
    //   resolve: `gatsby-plugin-facebook-analytics`,
    //   options: {
    //     // Required - set this to the ID of your Facebook app.
    //     appId: `2518108111807119`,
  
    //     // Which version of the SDK to load.
    //     version: `v5.0`,
  
    //     // Determines whether XFBML tags used by social plugins are parsed.
    //     xfbml: true,
  
    //     // Determines whether a cookie is created for the session or not.
    //     cookie: false,
  
    //     // Include Facebook analytics in development.
    //     // Defaults to false meaning the library will only be loaded in production.
    //     includeInDevelopment: true,
  
    //     // Include debug version of sdk
    //     // Defaults to false meaning the library will load sdk.js
    //     debug: false,
  
    //     // Select your language.
    //     language: `en_US`,
    //   },
    // },

    ////FACEBOOK
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

    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
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
