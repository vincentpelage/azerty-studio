import React from "react";

import Layout from "../components/Layout";
import Prestations from "../components/offres-sur-mesure/Prestations";
import Avantages from "../components/offres-sur-mesure/Avantages";
import Etapes from "../components/offres-sur-mesure/Etapes";
import Contact from "../components/contact";
import {theme } from "../components/globalStyle";

const SurMesure = ({ location }) => {
  return (
    <Layout location={location}>
      <Prestations />
      <Avantages />
      <Etapes />
      <Contact backgroundColor={theme.darkGrey} textMobile="Vous avez un projet de site et vous souhaitez en discuter ?" />
    </Layout>
  );
};

export default SurMesure;
