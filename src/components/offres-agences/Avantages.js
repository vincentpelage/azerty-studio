import React from "react";
import styled from "styled-components";
import Parser from "html-react-parser";

import SubTitle from "../subTitle";
import ArrowScroll from "../ArrowScroll";
import { theme } from "../globalStyle";
import Game from "../../img/Game";
import Spacer from "../spacer/index";
import { globalVariables } from "../globalStyle";

const AvantageList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 4rem 0 0 0;
  @media (max-width: ${globalVariables.medDesktop}) {
    padding: 2rem 0;
  }
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

const SubSubTitle = styled.h2`
  color: ${props => props.theme.darkGreen};
  font-weight: bold;
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

const Text = styled.div`
  p {
    text-align: justify;
    & strong {
      font-weight: bold;
      color: ${props => props.theme.darkPink};
    }
  }
`;

const Avantages = ({ data }) => {
  return (
    <Spacer
      height="100vh"
      backgroundColor={theme.darkGrey}
      id="avantages-agences"
    >
      <SubTitle label={data.primary.titre_avantage.text} />
      <AvantageList>
        {data.items.map((item, index) => (
          <Item key={index}>
            <SubSubTitle>{item.titre_avantage.text}</SubSubTitle>
            <Text>{Parser(item.contenu_avantage.html)}</Text>
          </Item>
        ))}
      </AvantageList>
      <ArrowScroll
        fill={theme.darkGreen}
        ancreId="contact"
        positionLeft="50%"
      />
      <Game />
    </Spacer>
  );
};

export default Avantages;
