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
  const prismicData = data.prismicPetitBudget.data;

  return (
    <Layout location={location}>
      <Avantages data={prismicData} />
      <Etapes data={prismicData} />
      <Prix data={prismicData} />
      <Modeles data={prismicData} />
      <Services data={prismicData} />
      <Contact
        data={prismicData}
        backgroundColor={theme.darkGrey}
        textMobile="Un modèle vous plaît et vous souhaitez en discuter ?"
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query PetitBudgetBySlug($uid: String!) {
    prismicPetitBudget(uid: { eq: $uid }) {
      data {
        titre {
          text
        }
        titre_avantage_1 {
          text
        }
        contenu_avantage_1 {
          html
        }
        titre_avantage_2 {
          text
        }
        contenu_avantage_2 {
          html
        }
        titre_avantage_3 {
          text
        }
        contenu_avantage_3 {
          html
        }
        titre_avantage_4 {
          text
        }
        contenu_avantage_4 {
          html
        }
        titre_avantage_5 {
          text
        }
        contenu_avantage_5 {
          html
        }
        titre_avantage_6 {
          text
        }
        contenu_avantage_6 {
          html
        }
        titre_section_etapes {
          text
        }
        titre_etape_1 {
          text
        }
        contenu_etape_1 {
          html
        }
        titre_etape_2 {
          text
        }
        contenu_etape_2 {
          html
        }
        titre_etape_3 {
          text
        }
        contenu_etape_3 {
          html
        }
        titre_etape_4 {
          text
        }
        contenu_etape_4 {
          html
        }
        titre_etape_5 {
          text
        }
        contenu_etape_5 {
          html
        }
        titre_section_prix {
          text
        }
        titre_offre_1 {
          text
        }
        prix_offre_1 {
          text
        }
        liste_avantages_offre_1 {
          html
        }
        titre_offre_1 {
          text
        }
        prix_offre_1 {
          text
        }
        liste_avantages_offre_1 {
          html
        }
        titre_offre_2 {
          text
        }
        prix_offre_2 {
          text
        }
        liste_avantage_offre_2 {
          html
        }
        titre_offre_3 {
          text
        }
        prix_offre_3 {
          text
        }
        liste_avantages_offre_3 {
          html
        }
        titre_section_modeles {
          text
        }
        body1 {
          ... on PrismicPetitBudgetBody1ModelesUnePage {
            primary {
              image_1 {
                url
                alt
              }
              image_2 {
                url
                alt
              }
            }
          }
          ... on PrismicPetitBudgetBody1ModelesMultiPages {
            primary {
              image_1 {
                url
              }
              image_2 {
                url
                alt
              }
            }
          }
          ... on PrismicPetitBudgetBody1ModelesECommerce {
            primary {
              image_1 {
                url
                alt
              }
              image_2 {
                url
                alt
              }
            }
          }
        }
        titre_section_services {
          text
        }
        titre_service_1 {
          text
        }
        contenu_service_1 {
          html
        }
        prix_service_1 {
          text
        }
        titre_service_2 {
          text
        }
        contenu_service_2 {
          html
        }
        prix_service_2 {
          text
        }
        titre_service_3 {
          text
        }
        contenu_service_3 {
          html
        }
        prix_service_3 {
          text
        }
        titre_service_4 {
          text
        }
        contenu_service_4 {
          html
        }
        prix_service_4 {
          text
        }
        titre_service_5 {
          text
        }
        contenu_service_5 {
          html
        }
        prix_service_5 {
          text
        }
        titre_service_6 {
          text
        }
        contenu_service_6 {
          html
        }
        prix_service_6 {
          text
        }
        titre_section_contact {
          text
        }
        titre_accroche_1 {
          text
        }
        contenu_accroche_1 {
          html
        }
        titre_accroche_2 {
          text
        }
        contenu_accroche_2 {
          html
        }
      }
    }
  }
`;

export default PetitBudget;
