import React from "react";

import Layout from "../components/Layout";
import Avantages from "../components/petit-budget/Avantages";
import Etapes from "../components/petit-budget/Etapes";
import Prix from "../components/petit-budget/Prix";
import Modeles from "../components/petit-budget/Modeles";
import Services from "../components/petit-budget/Services";
import Contact from "../components/contact";

const PetitBudget = ({ location }) => {
  return (
    <Layout location={location}>
      <Avantages />
      <Etapes />
      <Prix />
      <Modeles />
      <Services />
      <Contact />
    </Layout>
  );
};

export default PetitBudget;
