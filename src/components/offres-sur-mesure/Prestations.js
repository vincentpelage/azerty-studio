import React from "react";
import styled from "styled-components";

import Spacer from "../spacer/index";
import Title from "../title/index";
import SubTitle from "../subTitle";
import Code from "../../icons/coding.svg";
import Pencil from "../../icons/pencil-case.svg";
import Analyse from "../../icons/analysis.svg";
import { globalVariables, theme } from "../globalStyle";
import Monitor from "../../img/Monitor";
import ArrowScroll from "../ArrowScroll";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 9rem;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex-direction: column;
    margin-top: 3rem;
  }
`;

const Item = styled.div`
  flex: 0 0 25%;
  padding: 2rem;
  text-align: center;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
  }
`;

const WrapperIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.purple};
  border-radius: 50%;
  padding: 0.75rem;
  margin: auto;
  margin-bottom: 1rem;
`;

const Icon = styled.img`
  /* width: 50px;
  height: 50px; */
`;

const Paragraph = styled.p`
  text-align: center;
  padding: 1rem 0;
  min-height: 150px;
  & > strong {
    color: ${props => props.theme.darkGreen};
  }
  @media (max-width: ${globalVariables.maxTablet}) and (min-width: ${globalVariables.minTablet}) {
    min-height: 250px;
  }
`;

const Prestations = () => {
  return (
    <Spacer height="100vh">
      <Monitor />
      <Title label="Sur mesure" />
      <Wrapper>
        <Item>
          <WrapperIcon>
            <Icon src={Code} />
          </WrapperIcon>
          <SubTitle
            label="Site Vitrine"
            color="purple"
            backgroundColor="purple"
            textAlign="center"
            fontSize="20px"
            noLine={true}
          />
          <Paragraph>
            Faire connaître votre marque, vos produits, vos services
          </Paragraph>
        </Item>
        <Item>
          <WrapperIcon>
            <Icon src={Pencil} />
          </WrapperIcon>
          <SubTitle
            label="Site E-commerce"
            color="purple"
            backgroundColor="purple"
            textAlign="center"
            fontSize="20px"
            noLine={true}
          />
          <Paragraph>Vendre vos produits directement en ligne</Paragraph>
        </Item>
        <Item>
          <WrapperIcon>
            <Icon src={Analyse} />
          </WrapperIcon>
          <SubTitle
            label="Application Web"
            color="purple"
            backgroundColor="purple"
            textAlign="center"
            fontSize="20px"
            noLine={true}
          />
          <Paragraph>
            Créer une plateforme de réservation, un tableau de bord, etc.
          </Paragraph>
        </Item>
        <Item>
          <WrapperIcon>
            <Icon src={Analyse} />
          </WrapperIcon>
          <SubTitle
            label="Prototype (MVP)"
            color="purple"
            backgroundColor="purple"
            textAlign="center"
            fontSize="20px"
            noLine={true}
          />
          <Paragraph>Tester rapidement votre idée</Paragraph>
        </Item>
      </Wrapper>
      <ArrowScroll fill={theme.darkGreen} ancre="" positionLeft="50%" />
    </Spacer>
  );
};

export default Prestations;
