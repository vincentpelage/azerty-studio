import React from "react";

import Layout from "../components/Layout";
import Contact from "../components/contact";

const Contact = ({ location }) => {
  return (
    <Layout location={location}>
      <Contact textMobile="Vous avez un projet de site et vous souhaitez en discuter ?" />
    </Layout>
  );
};

export default Contact;
