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
            uid
          }
        }
      }
      allPrismicAgences {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicExpertise {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicAccueil {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicApproche {
        edges {
          node {
            uid
          }
        }
      }
    }
  `);

  const templateOffres = path.resolve("src/templates/offres.js");
  const templatePetitBudget = path.resolve(
    "src/templates/offres-petit-budget.js"
  );
  const templateSurMesure = path.resolve("src/templates/offres-sur-mesure.js");
  const templateAgences = path.resolve("src/templates/offres-agences.js");

  const templateContact = path.resolve("src/templates/contact.js");
  const templateClients = path.resolve("src/templates/clients.js");
  const templateAPropos = path.resolve("src/templates/equipe.js");
  const templateApproche = path.resolve("src/templates/approche.js");
  const templateExpertise = path.resolve("src/templates/expertise-template.js");
  const templateHome = path.resolve("src/templates/home.js");

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
      path: `/offres/${edge.node.uid}`,
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

  pages.data.allPrismicClients.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templateClients,
      context: {
        uid: edge.node.uid
      }
    });
  });

  pages.data.allPrismicApproche.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templateApproche,
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

  pages.data.allPrismicSurMesure.edges.forEach(edge => {
    createPage({
      path: `/offres/${edge.node.uid}`,
      component: templateSurMesure,
      context: {
        uid: edge.node.uid
      }
    });
  });

  pages.data.allPrismicAgences.edges.forEach(edge => {
    createPage({
      path: `/offres/${edge.node.uid}`,
      component: templateAgences,
      context: {
        uid: edge.node.uid
      }
    });
  });

  pages.data.allPrismicExpertise.edges.forEach(edge => {
    createPage({
      path: `/notre-approche/${edge.node.uid}`,
      component: templateExpertise,
      context: {
        uid: edge.node.uid
      }
    });
  });

  pages.data.allPrismicAccueil.edges.forEach(edge => {
    createPage({
      path: `/`,
      component: templateHome,
      context: {
        uid: edge.node.uid
      }
    });
  });
};
