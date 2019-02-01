require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "Azerty, Studio de création de sites web à Nantes",
    description:
      "Nous créons de jolis sites web, rapides, sécurisés, optimisés pour booster votre activité et accessibles à tous"
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `azerty-studio`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => offres => `/${offres.uid}`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    `gatsby-plugin-transition-link`,
    // must be after other CSS plugins
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        ignore: [
          "/node_modules/slick-carousel/slick/slick.css",
          "/node_modules/slick-carousel/slick/slick-theme.css"
        ]
      }
    },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
