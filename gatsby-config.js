module.exports = {
  siteMetadata: {
    title: `Le Cook`,
    description: `Find fun recipes now!`,
    author: `@sozonome`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Le Cook`,
        short_name: `Le Cook`,
        start_url: `/`,
        background_color: `#0086c3`,
        theme_color: `#0086c3`,
        display: `standalone`,
        icon: `src/images/food-and-restaurant.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
