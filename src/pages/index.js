import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Home from "../templates/home";

export default class IndexPage extends React.Component {
  render() {
    return <Home data={this.props.data} />;
  }
}

export const homeQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      frontmatter {
        baseline
      }
    }
  }
`;
