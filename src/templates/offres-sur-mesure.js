import React from "react";

import Layout from "../components/Layout";
import Prestations from "../components/offres-sur-mesure/Prestations";
import Avantages from "../components/offres-sur-mesure/Avantages";
import Etapes from "../components/offres-sur-mesure/Etapes";
import Contact from "../components/contact";
import { theme } from "../components/globalStyle";

const SurMesure = ({ location, data }) => {
  const {
    prismicSurMesureBodyTypeDeSite,
    prismicSurMesureBody1Avantage,
    prismicSurMesureBody2Methode,
    prismicSurMesureBody3Contact
  } = data;
  return (
    <Layout location={location}>
      <Prestations data={prismicSurMesureBodyTypeDeSite} />
      <Avantages data={prismicSurMesureBody1Avantage} />
      <Etapes data={prismicSurMesureBody2Methode} />
      <Contact
        data={prismicSurMesureBody3Contact}
        backgroundColor={theme.darkGrey}
        textMobile="Vous avez un projet de site et vous souhaitez en discuter ?"
        subtitle
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query SurMesure {
    prismicSurMesureBody1Avantage {
      primary {
        titre_section {
          text
        }
      }
      items {
        titre_avantage {
          text
        }
        contenu_avantage {
          html
          text
        }
      }
    }
    prismicSurMesureBodyTypeDeSite {
      primary {
        titre_page {
          text
        }
      }
      items {
        titre_prestation1 {
          text
        }
        contenu_prestation {
          html
        }
      }
    }
    prismicSurMesureBody2Methode {
      primary {
        titre_methode {
          html
          text
        }
      }
      items {
        titre_methode {
          html
          text
        }
        contenu_methode {
          html
          text
        }
      }
    }
    prismicSurMesureBody3Contact {
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
        adresse {
          html
        }
      }
      items {
        contenu_input {
          html
          text
        }
      }
    }
  }
`;

export default SurMesure;
