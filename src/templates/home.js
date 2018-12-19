import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Letter = styled.span`
  border: 1px solid black;
  padding: 10px;
  text-transform: uppercase;
  font-size: 95px;
`;

const Home = ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        <h1>
          <Letter>a</Letter>
          <Letter>z</Letter>
          <Letter>e</Letter>
          <Letter>r</Letter>
          <Letter>t</Letter>
          <Letter>y</Letter>
        </h1>
        <p>{data.markdownRemark.frontmatter.baseline}</p>
        <Link to="/offres">voir nos offres</Link>
      </Wrapper>
    </Layout>
  );
};

export default Home;
