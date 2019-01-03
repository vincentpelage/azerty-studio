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
      allPrismicPetitBudget {
        edges {
          node {
            uid
          }
        }
      }
    }
  `);

  const templateOffres = path.resolve("src/templates/offres.js");
  const templatePetitBudget = path.resolve("src/templates/petit-budget.js");

  pages.data.allPrismicOffres.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templateOffres,
      context: {
        uid: edge.node.uid
      }
    });
  });

  pages.data.allPrismicPetitBudget.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templatePetitBudget,
      context: {
        uid: edge.node.uid
      }
    });
  });
};