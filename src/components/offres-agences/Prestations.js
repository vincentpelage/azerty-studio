import React from "react";
import styled from "styled-components";
import Parser from "html-react-parser";

import Spacer from "../spacer/index";
import Title from "../title/index";
import Agence1 from "../../img/agences-1.svg";
import { globalVariables, theme } from "../globalStyle";
import ArrowScroll from "../ArrowScroll";
import ButtonAncre from "../ancre/index";

const WrapperGlobal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

const WrapperText = styled.div`
  flex: 0 0 55%;
  margin: 2rem 0 3rem;
  padding-right: 4rem;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
    order: 1;
    margin-bottom: 2rem;
    padding-right: 0;
  }
`;

const WrapperImage = styled.div`
  flex: 0 0 45%;
  text-align: center;
  padding: 4rem;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
    order: 2;
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
    background-color: ${props => props.theme.darkPink};
    border-radius: 50%;
  }
`;

const Paragraph = styled.div`
  margin-bottom: 2rem;
  p {
    text-align: justify;
    margin-bottom: 1rem;
  }
  ul {
    padding-left: 1rem;
    li {
      padding-bottom: 0.5rem;
      position: relative;
      &::before {
        content: "";
        display: inline-block;
        width: 5px;
        height: 5px;
        border: 1px solid ${props => props.theme.darkPink};
        border-radius: 50%;
        position: absolute;
        top: 10px;
        left: -1rem;
      }
    }
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Prestations = ({ data }) => {
  return (
    <Spacer height="90vh">
      <Title label={data.primary.titre_page.text} />
      <SubMenu>
        <ButtonAncre
          color="darkGreen"
          border="darkGreen"
          size="small"
          margin="0 0.5rem 0.5rem 0"
          ancreId="avantages-agences"
        >
          Avantages
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
      <WrapperGlobal>
        <WrapperText>
          {data.items.map((item, index) => (
            <Paragraph key={index}>
              <SubTitle>{item.titre_service.text}</SubTitle>
              {Parser(item.contenu_service.html)}
            </Paragraph>
          ))}
        </WrapperText>

        <WrapperImage>
          <img src={Agence1} alt="agences webmarketing" />
        </WrapperImage>
      </WrapperGlobal>
      <ArrowScroll
        fill={theme.darkGreen}
        ancreId="avantages-agences"
        positionLeft="50%"
      />
    </Spacer>
  );
};

export default Prestations;
