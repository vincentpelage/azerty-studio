import React from "react";
import SubTitle from "../subTitle";
import styled, { css } from "styled-components";
import Parser from "html-react-parser";

import Spacer from "../spacer/index";
import { theme } from "../globalStyle";
import ArrowScroll from "../ArrowScroll";
import Coffee from "../../img/Coffee";
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
  padding-top: 15rem;
  @media (max-width: ${globalVariables.medDesktop}) {
    padding-top: 11rem;
    padding-bottom: 3rem;
  }
  @media (max-width: ${globalVariables.maxTablet}) {
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 0;
    padding-left: 2rem;
    text-align: left;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    padding-top: 3rem;
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
    padding-top: 3px;
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
  p:not(:first-child) {
    font-size: 16px;
    @media (max-width: ${globalVariables.medDesktop}) {
      font-size: 14px;
    }
  }
`;

const Title = styled.p`
  color: ${props => props.theme.purple};
  font-weight: bold;
  min-height: 55px;
  @media (max-width: ${globalVariables.maxTablet}) {
    min-height: auto;
  }
`;

const Etapes = ({ data }) => {
  return (
    <Spacer backgroundColor={theme.darkGrey} height="70vh" id="etapes">
      <SubTitle label={data.primary.titre_etapes.text} textAlign="center" />
      <List>
        {data.items.map((item, index) => (
          <Item key={index}>
            <Title>{item.titre_etape.text}</Title>
            {Parser(item.contenu_etape.html)}
          </Item>
        ))}
      </List>
      {/* <ArrowScroll fill={theme.purple} ancreId="prix" positionLeft="50%" /> */}
      <Coffee />
    </Spacer>
  );
};

export default Etapes;
