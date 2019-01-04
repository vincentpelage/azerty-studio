import React from "react";
import SubTitle from "../subTitle";
import styled, { css } from "styled-components";

import Spacer from "../spacer/index";
import { theme } from "../globalStyle";
import ArrowScroll from "../ArrowScroll";
import Coffee from "../../img/Coffee";

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
  padding-top: 13rem;
`;

const Item = styled.li`
  flex: 1 1 25%;
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
`;

const Title = styled.p`
  color: ${props => props.theme.purple};
  font-weight: 700;
  min-height: 55px;
`;

const Text = styled.p``;

const Etapes = () => {
  return (
    <Spacer backgroundColor={theme.darkGrey} height="100vh">
      <SubTitle label="Comment ca marche ?" textAlign="center" />
      <List>
        <Item>
          <Title>Vous choisissez la catégorie de site</Title>
          <Text>Une page, multi-pages ou e-commerce</Text>
        </Item>
        <Item>
          <Title>Vous choisissez votre modèle de site</Title>
          <Text>Parmi notre sélection de modèles personnalisables</Text>
        </Item>
        <Item>
          <Title>On en parle ensemble par téléphone</Title>
          <Text>
            Pour comprendre vos attentes et être sur la même longueur d'onde
          </Text>
        </Item>
        <Item>
          <Title>Vous nous envoyez vos textes et images</Title>
          <Text>Nous pouvons aussi vous fournir du contenu et des images</Text>
        </Item>
        <Item>
          <Title>On s'occupe de tout </Title>
          <Text>
            On crée votre site de A à Z et on vous explique comment le modifier
            simplement (si vous le souhaitez)
          </Text>
        </Item>
      </List>
      <ArrowScroll fill={theme.purple} positionLeft="50%" />
      <Coffee />
    </Spacer>
  );
};

export default Etapes;