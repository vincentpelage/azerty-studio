import React from "react";
import styled from "styled-components";

import Spacer from "../spacer/index";
import Title from "../title/index";
import SubTitle from "../subTitle";
import Startup from "../../icons/startup.svg";
import { globalVariables, theme } from "../globalStyle";
import ArrowScroll from "../ArrowScroll";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5rem;
  margin-bottom: 3rem;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex-direction: column;
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
`;

const Item = styled.div`
  flex: 0 0 25%;
  padding: 1rem;
  text-align: center;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex: 0 0 33%;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
  }
`;

const CardItem = styled.div`
  background-color: ${props => props.theme.white};
  margin: 0 0.5rem 0.5rem 0;
  padding: 2rem 1rem 1rem 1rem;
  border-radius: ${globalVariables.borderRadius};
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

const Paragraph = styled.p`
  text-align: center;
  min-height: 100px;
  & > strong {
    color: ${props => props.theme.darkGreen};
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    min-height: auto;
  }
`;

const Prestations = ({ data }) => {
  return (
    <Spacer height="100vh">
      <Title label="Agences" />
      <Wrapper>
        <Item>
          <CardItem>
            <WrapperIcon>
              <Icon src={Startup} />
            </WrapperIcon>
            <SubTitle
              label="Service"
              color="purple"
              backgroundColor="purple"
              textAlign="center"
              fontSize="20px"
              noLine={true}
            />
            <Paragraph>
              Faire connaître votre marque, vos produits, vos services
            </Paragraph>
          </CardItem>
        </Item>
        <Item>
          <CardItem>
            <WrapperIcon>
              <Icon src={Startup} />
            </WrapperIcon>
            <SubTitle
              label="Service"
              color="purple"
              backgroundColor="purple"
              textAlign="center"
              fontSize="20px"
              noLine={true}
            />
            <Paragraph>Vendre vos produits directement en ligne</Paragraph>
          </CardItem>
        </Item>
        <Item>
          <CardItem>
            <WrapperIcon>
              <Icon src={Startup} />
            </WrapperIcon>
            <SubTitle
              label="Service"
              color="purple"
              backgroundColor="purple"
              textAlign="center"
              fontSize="20px"
              noLine={true}
            />
            <Paragraph>
              Créer une plateforme de réservation, un tableau de bord, etc.
            </Paragraph>
          </CardItem>
        </Item>
        <Item>
          <CardItem>
            <WrapperIcon>
              <Icon src={Startup} />
            </WrapperIcon>
            <SubTitle
              label="Service"
              color="purple"
              backgroundColor="purple"
              textAlign="center"
              fontSize="20px"
              noLine={true}
            />
            <Paragraph>Tester rapidement votre idée</Paragraph>
          </CardItem>
        </Item>
        <Item>
          <CardItem>
            <WrapperIcon>
              <Icon src={Startup} />
            </WrapperIcon>
            <SubTitle
              label="Service"
              color="purple"
              backgroundColor="purple"
              textAlign="center"
              fontSize="20px"
              noLine={true}
            />
            <Paragraph>Tester rapidement votre idée</Paragraph>
          </CardItem>
        </Item>
        <Item>
          <CardItem>
            <WrapperIcon>
              <Icon src={Startup} />
            </WrapperIcon>
            <SubTitle
              label="Service"
              color="purple"
              backgroundColor="purple"
              textAlign="center"
              fontSize="20px"
              noLine={true}
            />
            <Paragraph>Tester rapidement votre idée</Paragraph>
          </CardItem>
        </Item>
        <Item>
          <CardItem>
            <WrapperIcon>
              <Icon src={Startup} />
            </WrapperIcon>
            <SubTitle
              label="Service"
              color="purple"
              backgroundColor="purple"
              textAlign="center"
              fontSize="20px"
              noLine={true}
            />
            <Paragraph>Tester rapidement votre idée</Paragraph>
          </CardItem>
        </Item>
      </Wrapper>
      <ArrowScroll
        fill={theme.darkGreen}
        ancreId="avantages-agences"
        positionLeft="50%"
      />
    </Spacer>
  );
};

export default Prestations;
