import React from "react";
import styled from "styled-components";

import Title from "../title";
import ArrowScroll from "../ArrowScroll";
import { theme } from "../globalStyle";
import Ovni from "../../img/Ovni";
import Spacer from "../spacer/index";
import { globalVariables } from "../globalStyle";

const AvantageList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

const Item = styled.div`
  flex: 1 1 33%;
  padding: 5rem 4rem 0rem 0;
  @media (max-width: ${globalVariables.maxTablet}) {
    padding: 5rem 4rem 0 0;
    flex: 1 1 50%;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    padding: 1rem 0;
    flex: 1 1 100%;
  }
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.darkGreen};
  font-weight: 700;
  position: relative;
  display: inline;
  &::after {
    content: "";
    position: absolute;
    bottom: 5px;
    right: -10px;
    width: 5px;
    height: 5px;
    background-color: ${props => props.theme.pink};
    border-radius: 50%;
  }
`;

const Text = styled.p`
  text-align: justify;
  & strong {
    font-weight: 500;
    color: ${props => props.theme.pink};
  }
`;

const Avantages = () => {
  return (
    <Spacer height="100vh">
      <Title label="Petit Budget" />
      <AvantageList>
        <Item>
          <SubTitle>Des modèles beaux et modernes</SubTitle>
          <Text>
            Vous pouvez choisir votre design de site parmi notre sélection de{" "}
            <strong>10 modèles personnalisables.</strong>
          </Text>
        </Item>
        <Item>
          <SubTitle>Adapté à tous les écrans</SubTitle>
          <Text>
            Tous nos modèles de sites s'affichent parfaitement selon les
            différentes tailles d'écran&nbsp;:&nbsp;
            <strong>ordinateur, tablette, téléphone.</strong>
          </Text>
        </Item>
        <Item>
          <SubTitle>Facilement éditable</SubTitle>
          <Text>
            Vous pourrez modifier facilement tous les contenus (textes et
            images) de votre site grâce à{" "}
            <strong>une interface simple d'utilisation.</strong>
          </Text>
        </Item>
        <Item>
          <SubTitle>Rapide et sécurisé</SubTitle>
          <Text>
            Nos sites sont <strong>10 fois plus rapides et sécurisés</strong>{" "}
            que les sites développés sur Wordpress grâce à la technologie que
            nous utilisons.
          </Text>
        </Item>
        <Item>
          <SubTitle>Optimisé pour être visible sur Google</SubTitle>
          <Text>
            (et tous les autres moteurs de recherche). Notre code est propre et{" "}
            <strong>optimisé pour le référencement naturel.</strong> xxxx
          </Text>
        </Item>
        <Item>
          <SubTitle>Une interface de suivi simplifiée</SubTitle>
          <Text>
            Vous pourrez voir le nombre de personnes qui visite votre site et{" "}
            <strong>suivre les performances de votre site</strong> grâce à notre
            interface de suivi simplifiée.
          </Text>
        </Item>
      </AvantageList>
      <ArrowScroll fill={theme.darkGreen} ancre="" positionLeft="50%" />
      <Ovni />
    </Spacer>
  );
};

export default Avantages;
