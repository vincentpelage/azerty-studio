import React from "react";

import Layout from "../components/Layout";
import Prestations from "../components/offres-agences/Prestations";
import Avantages from "../components/offres-agences/Avantages";
import Contact from "../components/contact";

const Agences = ({ location }) => {
  return (
    <Layout location={location}>
      <Prestations />
      <Avantages />
      <Contact textMobile="Vous souhaitez en savoir plus ?" />
    </Layout>
  );
};

export default Agences;
