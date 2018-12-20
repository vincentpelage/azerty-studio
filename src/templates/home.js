import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import { ButtonLink } from "../components/button";

const Wrapper = styled.div`
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Logo = styled.h1`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const Letter = styled.span`
  border: 2px solid ${props => props.theme.whiteOpacity};
  text-transform: uppercase;
  font-size: 80px;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  border-radius: 3px;
  &:not(:last-child) {
    margin-right: 5px;
  }
  &:nth-child(odd) {
    margin-top: 8px;
  }
  &:hover {
    /* margin-top: ; */
  }
`;

const Baseline = styled.p`
  font-size: 28px;
  text-align: center;
  width: 50%;
  line-height: 1.2;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const Home = ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        <Logo>
          <Letter>a</Letter>
          <Letter>z</Letter>
          <Letter>e</Letter>
          <Letter>r</Letter>
          <Letter>t</Letter>
          <Letter>y</Letter>
        </Logo>
        <Baseline>{data.markdownRemark.frontmatter.baseline}</Baseline>

        <ButtonLink to="/offres" backgroundcolor="lightPink" size="large">
          Voir nos offres
        </ButtonLink>
      </Wrapper>
    </Layout>
  );
};

export default Home;
