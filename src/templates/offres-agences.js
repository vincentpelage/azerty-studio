import React from "react";

import Layout from "../components/Layout";
import Prestations from "../components/offres-agences/Prestations";
import Avantages from "../components/offres-agences/Avantages";
import Contact from "../components/contact";

const Agences = ({ location, data }) => {
  const {
    prismicAgencesBodyService,
    prismicAgencesBody1Avantage,
    prismicAgencesBody2Contact
  } = data;
  return (
    <Layout location={location}>
      <Prestations data={prismicAgencesBodyService} />
      <Avantages data={prismicAgencesBody1Avantage} />
      <Contact
        data={prismicAgencesBody2Contact}
        textMobile="Vous souhaitez en savoir plus ?"
        subtitle
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query Agence {
    prismicAgencesBodyService {
      primary {
        titre_page {
          text
        }
      }
      items {
        titre_service {
          text
        }
        contenu_service {
          html
        }
      }
    }
    prismicAgencesBody1Avantage {
      primary {
        titre_avantage {
          text
        }
      }
      items {
        titre_avantage {
          text
        }
        contenu_avantage {
          html
        }
      }
    }
    prismicAgencesBody2Contact {
      primary {
        titre_contact {
          text
        }
        titre_accroche_1 {
          text
        }
        contenu_accroche_1 {
          text
        }
        titre_accroche_2 {
          text
        }
        contenu_accroche_2 {
          text
        }
        bouton_contact {
          text
        }
      }
      items {
        contenu_input {
          text
        }
      }
    }
  }
`;

export default Agences;
