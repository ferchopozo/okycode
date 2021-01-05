module.exports = {
  siteMetadata: {
    title: `OkyCode`,
    description: `Experts in React Js / Native, we can lead projects, do consultancies, working with AWS, Portal design with Gatsby and mobile applications for iOS and Android.`,
    author: {
      name: `Fernando Pozo`,
      summary: `live in my digital world to create things useful`,
    },
    siteUrl: `https://www.okycode.org`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `activity`,
        path: `${__dirname}/content/activity`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/content/post`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post-eng`,
        path: `${__dirname}/content/post-eng`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-QG25TLJ4JT`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyForNull: 'es',
        langKeyDefault: 'es',
        useLangKeyLayout: true,
      }
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
            
          },
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              styleAttributes: true,
              dataAttributes: true
            }
          },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                danger: {
                  classes: "danger",
                },
                info: {
                  classes: "info",
                  title: "optional",
                },
                service: {
                  classes: "service",
                  title: "optional",
                },
              },
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-grid-tables`
        ],
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OkyCode`,
        short_name: `OkyCode`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "433790298004186",
      },
    },
    {
      resolve: `gatsby-plugin-facebook-customer-chat`,
      options: {
        sdk: {
           appId: '304259087582175',
           version: `v9.0`,
           xfbml: true,        
        },
        chat: {
            pageId: '101958774823596',
            loggedInGreeting: 'Hola!¿Cómo podemos ayudarte?',
            loggedOutGreeting: 'Hola!¿Cómo podemos ayudarte?',
         }
      }
    }
    
  ],
}
