import React from "react";
import styled from "styled-components";

import Spacer from "../spacer/index";
import SubTitle from "../subTitle";
import ArrowScroll from "../ArrowScroll";
import { theme, globalVariables } from "../globalStyle";
import ServicesImg from "../../img/ServicesImg";

const AvantageList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem 0;
  width: 70%;
  @media (max-width: ${globalVariables.maxTablet}) {
    width: 100%;
  }
`;

const Item = styled.div`
  flex: 1 1 50%;
  padding: 4rem 4rem 0rem 0;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 1 1 100%;
    padding: 1rem 0;
  }
`;

const SubSubTitle = styled.h2`
  color: ${props => props.theme.darkGreen};
  font-weight: 500;
  position: relative;
  display: inline;
  &::after {
    content: "";
    position: absolute;
    bottom: 5px;
    right: -10px;
    width: 5px;
    height: 5px;
    background-color: ${props => props.theme.darkPink};
    border-radius: 50%;
  }
`;

const Text = styled.p`
  text-align: justify;
  margin-bottom: 0.5rem;
  & strong {
    font-weight: 500;
    color: ${props => props.theme.pink};
  }
`;

const Etiquette = styled.span`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.darkPink};
  padding: 4px 10px;
  font-family: "Aqua";
  font-size: 14px;
  border-radius: ${globalVariables.borderRadius};
`;

const Services = () => {
  return (
    <Spacer height="100vh" id="services">
      <SubTitle label="Plus de services" />
      <AvantageList>
        <Item>
          <SubSubTitle>Rédaction de contenu</SubSubTitle>
          <Text>Nous rédigeons votre contenu</Text>
          <Etiquette>50 euros par page</Etiquette>
        </Item>
        <Item>
          <SubSubTitle>Reportage photo</SubSubTitle>
          <Text>Nous vous envoyons un photographe à domicile</Text>
          <Etiquette>500 euros les 20 photos</Etiquette>
        </Item>
        <Item>
          <SubSubTitle>Référencement naturel</SubSubTitle>
          <Text>Nous vous aidons dans votre stratégie de référencement</Text>
          <Etiquette>100 euros par page</Etiquette>
        </Item>
        <Item>
          <SubSubTitle>Achat d'images</SubSubTitle>
          <Text>
            Nous vous achetons des images dans des bibliothèques dédiées (avec
            les droits d'auteur)
          </Text>
          <Etiquette>100 euros les 20 photos</Etiquette>
        </Item>
        <Item>
          <SubSubTitle>Publicité sur Google</SubSubTitle>
          <Text>Nous gérons vos campagnes AdWords</Text>
          <Etiquette>100 euros par page</Etiquette>
        </Item>
        <Item>
          <SubSubTitle>Fonctionalités supplémentaires</SubSubTitle>
          <Text>Nous développons de nouveaux modules rien que pour vous</Text>
          <Etiquette>Sur devis</Etiquette>
        </Item>
      </AvantageList>
      <ArrowScroll fill={theme.darkGreen} ancreId="contact" positionLeft="4%" />
      <ServicesImg />
    </Spacer>
  );
};

export default Services;
