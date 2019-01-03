const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicOffres {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  const template = path.resolve("src/templates/offres.js");

  pages.data.allPrismicOffres.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid
      }
    });
  });
};
