import React from "react";
import SubTitle from "../subTitle";
import styled, { css } from "styled-components";

import Spacer from "../spacer/index";
import { theme } from "../globalStyle";
import ArrowScroll from "../ArrowScroll";
import Finish from "../../img/Finish";
import { globalVariables } from "../globalStyle";

function createCSSContent() {
  let styles = "";

  for (let i = 1; i < 6; i += 1) {
    styles += `
    &:nth-child(${i})::after {
        content: '${i}';
    }`;
  }

  return css`
    ${styles}
  `;
}

const List = styled.ul`
  display: flex;
  flex-direction: row;
  text-align: center;
  padding-top: 18rem;
  @media (max-width: ${globalVariables.medDesktop}) {
    padding-top: 13rem;
  }
  @media (max-width: ${globalVariables.maxTablet}) {
    flex-direction: column;
    padding-top: 4rem;
    padding-left: 2rem;
    text-align: left;
  }
`;

const Item = styled.li`
  flex: 1 1 20%;
  list-style: none;
  padding: 0 1rem;
  position: relative;
  &:not(:last-child)::before {
    content: "";
    position: absolute;
    top: -3rem;
    left: 50%;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.white};
  }

  ${createCSSContent()};
  &::after {
    position: absolute;
    top: -4.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.darkGreen};
    border-radius: 50%;
    font-family: "Aqua";
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.white};
  }
  @media (max-width: ${globalVariables.maxTablet}) {
    padding-left: 2rem;
    padding-bottom: 2rem;
    &:not(:last-child)::before {
      top: 0;
      left: 0;
      width: 1px;
      height: 100%;
    }
    &::after {
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      font-size: 20px;
    }
  }
`;

const Title = styled.p`
  color: ${props => props.theme.purple};
  font-weight: 500;
  min-height: 55px;
  @media (max-width: ${globalVariables.maxTablet}) {
    min-height: auto;
  }
`;

const Text = styled.p`
  font-size: 14px;
`;

const Etapes = () => {
  return (
    <Spacer height="100vh" id="etapes-sur-mesure">
      <SubTitle label="Notre methode" textAlign="center" />
      <List>
        <Item>
          <Title>Brief de découverte</Title>
          <Text>
            On se rencontre pour bien comprendre votre besoin et vous proposer
            la solution qui vous correspond
          </Text>
        </Item>
        <Item>
          <Title>Production des maquettes</Title>
          <Text>
            Nous vous envoyons les visuels de votre futur site correspondant à
            votre charte graphique
          </Text>
        </Item>
        <Item>
          <Title>Intégration des contenus</Title>
          <Text>
            Nous implémentons les contenus de texte sur les maquettes tout en
            prenant en compte vos retours
          </Text>
        </Item>
        <Item>
          <Title>Développement du site</Title>
          <Text>
            Nous assurons la conception et la mise en ligne de votre site ou de
            votre application web
          </Text>
        </Item>
        <Item>
          <Title>Accompagnement et suivi</Title>
          <Text>
            Nous vous expliquons comment modifier les contenus et suivre les
            performances de votre site
          </Text>
        </Item>
      </List>
      <ArrowScroll fill={theme.purple} positionLeft="50%" ancreId="contact" />
      <Finish />
    </Spacer>
  );
};

export default Etapes;
