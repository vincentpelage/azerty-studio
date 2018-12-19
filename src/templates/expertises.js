import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const Expertises = ({ data }) => {
  console.log("data", data);

  return (
    <Layout>
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
