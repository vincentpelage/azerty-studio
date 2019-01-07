import React from "react";

import Layout from "../components/Layout";
import Contact from "../components/contact";

const Contact = ({ location }) => {
  return (
    <Layout location={location}>
      <Contact />
    </Layout>
  );
};

export default Contact;
