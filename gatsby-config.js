module.exports = {
  siteMetadata: {
    title: `WMHD Radio`,
    description: `WMHD Radio is the campus radio station of Rose-Hulman Institute of Technology. 24/7 ad-free music.`,
    author: `@wmhdonlineradio`,
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
        name: `WMHD Online Radio`,
        short_name: `WMHD Radio`,
        start_url: `/`,
        background_color: `#800000`,
        theme_color: `#800000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-smoothscroll`,
  ],
}