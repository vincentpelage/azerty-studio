import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const Expertises = ({ data, location }) => {
  console.log("data", data);

  return (
    <Layout location={location}>
      <p>expertises</p>
    </Layout>
  );
};

export default Expertises;

export const homeQuery = graphql`
  query Expertises($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
