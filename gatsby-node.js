/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions;

  // Create a deferred static generation (DSG) page
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });

  // Add a redirect for /discord to a Discord invite link
  createRedirect({
    fromPath: "/discord",
    toPath: "https://discord.gg/YOUR_DISCORD_INVITE_LINK",
    isPermanent: true,
    redirectInBrowser: true,
  });
};
