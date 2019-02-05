import React from "react";
import styled from "styled-components";
import Parser from "html-react-parser";

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
  p {
    text-align: justify;
    margin-bottom: 0.5rem;
    & strong {
      color: ${props => props.theme.pink};
    }
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

const Etiquette = styled.span`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.darkPink};
  padding: 5px 10px 3px 10px;
  font-family: "Aqua";
  font-size: 14px;
  border-radius: ${globalVariables.borderRadius};
`;

const Services = ({ data }) => {
  return (
    <Spacer height="100vh" id="services">
      <SubTitle label={data.primary.titre_services.text} />
      <AvantageList>
        {data.items.map((item, index) => (
          <Item key={index}>
            <SubSubTitle>{item.titre_service.text}</SubSubTitle>
            {Parser(item.contenu_service.html)}
            <Etiquette>{item.prix_service.text}</Etiquette>
          </Item>
        ))}
      </AvantageList>
      <ArrowScroll fill={theme.darkGreen} ancreId="contact" positionLeft="4%" />
      <ServicesImg />
    </Spacer>
  );
};

export default Services;
