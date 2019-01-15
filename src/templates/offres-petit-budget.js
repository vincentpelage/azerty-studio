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
  return (
    <Layout location={location}>
      <Avantages />
      <Etapes />
      <Prix />
      <Modeles />
      <Services />
      <Contact
        backgroundColor={theme.darkGrey}
        textMobile="Un modèle vous plaît et vous souhaitez en discuter ?"
      />
    </Layout>
  );
};

// export const pageQuery = graphql`
//   query PetitBudgetBySlug($uid: String!) {
//     prismicPetitBudget(uid: { eq: $uid }) {
//       data {

//       }
//     }
//   }
// `;

export default PetitBudget;
