/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Quita Simples`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "YOUR_GOOGLE_ANALYTICS_TRACKING_ID" // Substitua pelo seu ID de rastreamento do Google Analytics
        ],
        // Outras opções do plugin, se necessário
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: "src/images/icon.png"
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    }
  ]
};
