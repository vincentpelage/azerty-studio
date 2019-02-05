import React from "react";
import styled from "styled-components";
import Parser from "html-react-parser";

import Title from "../title";
import ArrowScroll from "../ArrowScroll";
import { theme } from "../globalStyle";
import Ovni from "../../img/Ovni";
import Spacer from "../spacer/index";
import { globalVariables } from "../globalStyle";
import ButtonAncre from "../ancre/index";

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
  p {
    text-align: justify;
    & strong {
      color: ${props => props.theme.pink};
    }
  }
`;

const SubTitle = styled.h2`
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
    background-color: ${props => props.theme.pink};
    border-radius: 50%;
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Avantages = ({ data }) => {
  return (
    <Spacer height="100vh">
      <Title label={data.primary.titre_page.text} />
      <SubMenu>
        <ButtonAncre
          color="darkGreen"
          border="darkGreen"
          size="small"
          margin="0 0.5rem 0.5rem 0"
          ancreId="etapes"
        >
          Comment ca marche
        </ButtonAncre>
        <ButtonAncre
          color="darkGreen"
          border="darkGreen"
          size="small"
          margin="0 0.5rem 0.5rem 0"
          ancreId="prix"
        >
          Prix
        </ButtonAncre>
        <ButtonAncre
          color="darkGreen"
          border="darkGreen"
          size="small"
          margin="0 0.5rem 0.5rem 0"
          ancreId="modeles"
        >
          Modeles
        </ButtonAncre>
        <ButtonAncre
          color="darkGreen"
          border="darkGreen"
          size="small"
          margin="0 0.5rem 0.5rem 0"
          ancreId="services"
        >
          Services
        </ButtonAncre>
        <ButtonAncre
          color="darkGreen"
          border="darkGreen"
          size="small"
          margin="0 0.5rem 0.5rem 0"
          ancreId="contact"
        >
          Contact
        </ButtonAncre>
      </SubMenu>
      <AvantageList>
        {data.items.map((item, index) => (
          <Item key={index}>
            <SubTitle>{item.titre_avantage.text}</SubTitle>
            {Parser(item.contenu_avantage.html)}
          </Item>
        ))}
      </AvantageList>
      <ArrowScroll fill={theme.darkGreen} ancreId="etapes" positionLeft="50%" />
      <Ovni />
    </Spacer>
  );
};

export default Avantages;
