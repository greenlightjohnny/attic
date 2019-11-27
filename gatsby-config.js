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
    siteUrl: `https://www.highultimate.com/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          "script-src": "'self' www.facebook.com",
          "style-src": "'self' 'unsafe-inline'",
          //"img-src": "'self' data: www.google-analytics.com"
          // you can add your directives or override defaults
        }
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
    
      
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://connect.facebook.net",
          
        ]
      }
    },
    
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    `gatsby-plugin-react-helmet`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',

    
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
