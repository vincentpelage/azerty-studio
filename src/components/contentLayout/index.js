import React from "react";
import styled from "styled-components";

import Spacer from "../spacer/index";
import Title from "../title/index";
import { ButtonLink } from "../button";
import Bureau from "../../img/Bureau";
import { globalVariables } from "../globalStyle";

const Wrapper = styled.div`
  width: 50%;
  margin-top: 2rem;
  @media (max-width: ${globalVariables.maxMobile}) {
    width: 100%;
    padding-bottom: 6rem;
  }
`;

const Content = styled.div`
  padding: 3rem 3rem 0 0;
  @media (max-width: ${globalVariables.maxMobile}) {
    padding: 2rem 0;
  }
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.darkGreen};
  font-weight: 500;
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

const Text = styled.p`
  margin-bottom: 2rem;
  /* text-align: justify; */
  & strong {
    color: ${props => props.theme.pink};
  }
`;

const ContentLayout = () => {
  return (
    <Spacer height="100vh" fullHeight>
      <Title label="site internet" />
      <Wrapper>
        <Content>
          <SubTitle>Une technologie puissante</SubTitle>
          <Text>
            Nous utilisons une technologie de développement (la JAM stack, pour
            les initiés) qui nous permet de créer des sites performants et
            sécurisés rapidement. Nous gagnons du temps, nous pouvons donc vous
            proposer des prix plus abordables que les agences (ou les
            freelances).
          </Text>
          <ButtonLink to="/" backgroundcolor="darkPink" size="small">
            En savoir plus
          </ButtonLink>
        </Content>
        <Content>
          <SubTitle>Des fonctionnalités déjà existantes</SubTitle>
          <Text>
            La plupart des fonctionnalités que nous proposons sont déjà
            intégrées dans l'ensemble de nos sites : un code optimisé pour que
            votre site soit visible sur Google et les autres moteurs de
            recherche (plus communément appelé sous le nom barbare de "site SEO
            friendly"), une jolie interface qui vous permet de modifier
            facilement vos contenus, un suivi simplifié des performances de
            votre site, etc.
          </Text>
          <ButtonLink to="/" backgroundcolor="darkPink" size="small">
            En savoir plus
          </ButtonLink>
        </Content>
      </Wrapper>
      <Bureau />
    </Spacer>
  );
};

export default ContentLayout;
