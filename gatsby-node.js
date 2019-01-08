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
      allPrismicContact {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicClients {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicExpertises {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicAPropos {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicSurMesure {
        edges {
          node {
            id
          }
        }
      }
      allPrismicAgences {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  const templateOffres = path.resolve("src/templates/offres.js");
  const templatePetitBudget = path.resolve("src/templates/petit-budget.js");
  const templateContact = path.resolve("src/templates/contact.js");
  //const templateClients = path.resolve("src/templates/clients.js");
  const templateAPropos = path.resolve("src/templates/equipe.js");
  const templateExpertises = path.resolve("src/templates/expertises.js");
  //const templateSurMesure = path.resolve("src/templates/sur-mesure.js");
  //const templateAgences = path.resolve("src/templates/agences.js");

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

  pages.data.allPrismicContact.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templateContact,
      context: {
        uid: edge.node.uid
      }
    });
  });
  /*
  pages.data.allPrismicClients.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templateClients,
      context: {
        uid: edge.node.uid
      }
    });
  });
  */
  pages.data.allPrismicExpertises.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templateExpertises,
      context: {
        uid: edge.node.uid
      }
    });
  });

  pages.data.allPrismicAPropos.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templateAPropos,
      context: {
        uid: edge.node.uid
      }
    });
  });

  /*
  pages.data.allPrismicSurMesure.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templateAPropos,
      context: {
        uid: edge.node.uid
      }
    });
  });
  */

  /*
  pages.data.allPrismicAgences.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templateAPropos,
      context: {
        uid: edge.node.uid
      }
    });
  });
  */
};
