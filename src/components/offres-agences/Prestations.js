import React from "react";
import styled from "styled-components";
import Parser from "html-react-parser";

import Spacer from "../spacer/index";
import Title from "../title/index";
import Agence1 from "../../img/agences-1.svg";
import { globalVariables, theme } from "../globalStyle";
import ArrowScroll from "../ArrowScroll";

const WrapperGlobal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

const WrapperText = styled.div`
  flex: 0 0 60%;
  margin: 2rem 0 2rem;
  padding-right: 4rem;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex: 0 0 100%;
    order: 1;
    padding-right: 0;
  }
`;

const WrapperImage = styled.div`
  flex: 0 0 40%;
  text-align: center;
  padding: 4rem;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex: 0 0 100%;
    order: 2;
    padding: 0;
  }
`;

const Image = styled.img`
  width: 70%;
  @media (max-width: ${globalVariables.maxTablet}) {
    width: 30%;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    width: 60%;
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

const Prestations = ({ data }) => {
  return (
    <Spacer height="70vh">
      <Title label={data.primary.titre_page.text} />
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
          <Image src={Agence1} alt="agences webmarketing" />
        </WrapperImage>
      </WrapperGlobal>
      {/* <ArrowScroll
        fill={theme.darkGreen}
        ancreId="avantages-agences"
        positionLeft="50%"
      /> */}
    </Spacer>
  );
};

export default Prestations;
