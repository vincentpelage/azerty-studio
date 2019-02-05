import React from "react";

import Layout from "../components/Layout";
import Avantages from "../components/offres-petit-budget/Avantages";
import Etapes from "../components/offres-petit-budget/Etapes";
import Prix from "../components/offres-petit-budget/Prix";
import Modeles from "../components/offres-petit-budget/Modeles";
import Services from "../components/offres-petit-budget/Services";
import Contact from "../components/contact";
import { theme } from "../components/globalStyle";

const PetitBudget = ({ location, data }) => {
  const {
    prismicPetitBudgetBody2Avantage,
    prismicPetitBudgetBody5Etape,
    prismicPetitBudgetBodyPrix,
    prismicPetitBudgetBody1ModelesUnePage,
    prismicPetitBudgetBody1ModelesMultiPages,
    prismicPetitBudgetBody1ModelesECommerce,
    prismicPetitBudgetBody6Service,
    prismicPetitBudgetBody7Input
  } = data;

  return (
    <Layout location={location}>
      <Avantages data={prismicPetitBudgetBody2Avantage} />
      <Etapes data={prismicPetitBudgetBody5Etape} />
      <Prix data={prismicPetitBudgetBodyPrix} />
      <Modeles
        data={{
          unePage: prismicPetitBudgetBody1ModelesUnePage,
          multiPages: prismicPetitBudgetBody1ModelesMultiPages,
          eCommerce: prismicPetitBudgetBody1ModelesECommerce
        }}
      />
      <Services data={prismicPetitBudgetBody6Service} />
      <Contact
        data={prismicPetitBudgetBody7Input}
        backgroundColor={theme.darkGrey}
        textMobile="Un modèle vous plaît et vous souhaitez en discuter ?"
        subtitle
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query PetitBudget {
    prismicPetitBudgetBody2Avantage {
      primary {
        titre_page {
          text
        }
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
        }
      }
    }
    prismicPetitBudgetBody5Etape {
      primary {
        titre_etapes {
          text
        }
      }
      items {
        titre_etape {
          text
        }
        contenu_etape {
          html
        }
      }
    }
    prismicPetitBudgetBodyPrix {
      primary {
        titre_prix {
          text
        }
      }
      items {
        titre_offre {
          text
        }
        prix_offre {
          text
        }
        liste_offre {
          html
          text
        }
        contenu_bouton {
          text
        }
      }
    }
    prismicPetitBudgetBody1ModelesUnePage {
      primary {
        titre_modeles {
          text
        }
      }
      items {
        image_modele {
          alt
          url
        }
        titre_modele {
          text
        }
      }
    }
    prismicPetitBudgetBody1ModelesMultiPages {
      items {
        image_modele {
          alt
          url
        }
        titre_modele {
          text
        }
      }
    }
    prismicPetitBudgetBody1ModelesECommerce {
      items {
        image_modele {
          alt
          url
        }
        titre_modele {
          text
        }
      }
    }
    prismicPetitBudgetBody6Service {
      primary {
        titre_services {
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
        prix_service {
          text
        }
      }
    }
    prismicPetitBudgetBody7Input {
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
          text
        }
      }
    }
  }
`;

export default PetitBudget;
