import React from "react";

import Layout from "../components/Layout";
import Avantages from "../components/petit-budget/Avantages";
import Etapes from "../components/petit-budget/Etapes";
import Prix from "../components/petit-budget/Prix";
import Modeles from "../components/petit-budget/Modeles";
import Services from "../components/petit-budget/Services";
import Contact from "../components/contact";
import Expertises from "../components/expertises";

const PetitBudget = ({ location }) => {
  return (
    <Layout location={location}>
      <Expertises />
      <Avantages />
      <Etapes />
      <Prix />
      <Modeles />
      <Services />
      {/* <Contact textMobile="Un modèle vous plaît et vous souhaitez en discuter ?" /> */}
    </Layout>
  );
};

export default PetitBudget;
