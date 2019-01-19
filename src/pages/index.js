import React from "react";
import Home from "../templates/home";

export default class IndexPage extends React.Component {
  render() {
    return <Home location={this.props.location} />;
  }
}

/*

import React from "react";
import Home from "../templates/home";

export default class IndexPage extends React.Component {
  render() {
    return <Home data={this.props.data} location={this.props.location} />;
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

*/
