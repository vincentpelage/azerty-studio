import React from "react";
import styled from "styled-components";
import Parser from "html-react-parser";

import Spacer from "../spacer/index";
import Title from "../title/index";
import SubTitle from "../subTitle";
import Code from "../../icons/web-site.svg";
import { globalVariables, theme } from "../globalStyle";
import ArrowScroll from "../ArrowScroll";
import Circle from "../../img/Circle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10rem;
  flex-wrap: wrap;
  @media (max-width: ${globalVariables.medDesktop}) {
    margin-top: 8rem;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    flex-direction: column;
    margin-top: 3rem;
  }
`;

const Item = styled.div`
  flex: 0 0 25%;
  padding: 1rem;
  text-align: center;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex: 0 0 50%;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
  }
`;

const CardItem = styled.div`
  margin: 0 0.5rem 0.5rem 0;
  padding: 2rem 1rem;
  border-radius: ${globalVariables.borderRadius};
  & > p {
    text-align: center;
  padding: 1rem 0;
  min-height: 100px;
  & > strong {
    color: ${props => props.theme.purple};
  }
  }

  @media (max-width: ${globalVariables.maxMobile}) {
    margin: 0;
    padding: 0;
    p {
      min-height: auto;
    }
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

const Icon = styled.img``;

const Prestations = ({ data }) => {
  return (
    <Spacer height="100vh">
      <Circle />
      <Title label={data.primary.titre_page.text} />
      <Wrapper>
        {data.items.map((item, index) => (
          <Item key={index}>
            <CardItem>
              <WrapperIcon>
                <Icon src={Code} />
              </WrapperIcon>
              <SubTitle
                label={item.titre_prestation1.text}
                color="darkGreen"
                backgroundColor="darkGreen"
                textAlign="center"
                fontSize="20px"
              />
              {Parser(item.contenu_prestation.html)}
            </CardItem>
          </Item>
        ))}
      </Wrapper>
      <ArrowScroll
        fill={theme.darkGreen}
        ancreId="avantages-sur-mesure"
        positionLeft="50%"
      />
    </Spacer>
  );
};

export default Prestations;
