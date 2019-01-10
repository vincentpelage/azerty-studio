import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import { ButtonLink } from "../components/button";
import Deco from "../img/deco2.svg";
import SpaceShip from "../img/spaceship.svg";
import { globalVariables } from "../components/globalStyle";

const Wrapper = styled.div`
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 2rem;
    display: block;
    width: 200px;
    height: 200px;
    z-index: 2;
    background-image: url(${SpaceShip});
    background-size: cover;
    @media (max-width: ${globalVariables.maxTablet}) {
      width: 150px;
      height: 150px;
    }
  }
`;

const Decoration = styled.img`
  width: 1100px;
  position: absolute;
  z-index: 0;
  @media (max-width: ${globalVariables.maxTablet}) {
    width: 625px;
    max-width: none;
  }
`;

const Logo = styled.h1`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  z-index: 1;
`;

const Letter = styled.span`
  border: 2px solid ${props => props.theme.whiteOpacityLetter};
  text-transform: uppercase;
  font-size: 70px;
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 17px;
  border-radius: 3px;
  transition: margin-top 0.1s ease-in-out;
  z-index: 1;
  &:not(:last-child) {
    margin-right: 5px;
  }
  &:nth-child(odd) {
    margin-top: 8px;
  }
  &:hover {
    margin-top: +5px;
  }

  @media (max-width: ${globalVariables.maxTablet}) {
    font-size: 50px;
    height: 50px;
    width: 50px;
    padding-top: 13px;
  }
`;

const Baseline = styled.p`
  font-size: 24px;
  text-align: center;
  width: 40%;
  line-height: 1.2;
  font-weight: 300;
  margin-bottom: 1rem;
  z-index: 1;
  @media (max-width: ${globalVariables.maxTablet}) {
    font-size: 18px;
    width: 90%;
  }
`;

const Home = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Wrapper>
        <Decoration src={Deco} />
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
