import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Spacer from "../components/spacer/index";
import Title from "../components/title/index";
import { ButtonLink } from "../components/button";
import Bureau from "../img/bureau.svg";
import Developer from "../img/developer.svg";
import Work from "../img/work.svg";
import { globalVariables, theme } from "../components/globalStyle";
import SubTitle from "../components/subTitle/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex-direction: column;
  }
`;

const WrapperText = styled.div`
  flex: 0 0 50%;
  padding-left: ${props => (props.position === "right" ? "2rem" : "0")};
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
    padding-left: 0;
    order: 1;
    margin-bottom: 2rem;
  }
`;

const WrapperImage = styled.div`
  flex: 0 0 50%;
  text-align: center;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
    order: 2;
  }
`;

const Image = styled.img`
  width: 500px;
  height: auto;
  @media (max-width: ${globalVariables.maxTablet}) {
    width: 350px;
    height: auto;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    width: 250px;
  }
`;

const Content = styled.div`
  padding: 3rem 3rem 0 0;
  @media (max-width: ${globalVariables.maxMobile}) {
    padding: 2rem 0;
  }
`;

const SubSubTitle = styled.h2`
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
  & strong {
    color: ${props => props.theme.pink};
  }
`;

const Expertise = ({ location }) => {
  return (
    <Layout location={location}>
      <Spacer height="100vh">
        <Title label="site internet" />
        <Wrapper>
          <WrapperText>
            <Content>
              <SubSubTitle>Une technologie puissante</SubSubTitle>
              <Text>
                Nous utilisons une technologie de développement (la JAM stack,
                pour les initiés) qui nous permet de créer des sites performants
                et sécurisés rapidement. Nous gagnons du temps, nous pouvons
                donc vous proposer des prix plus abordables que les agences (ou
                les freelances).
              </Text>
              <ButtonLink to="/" backgroundcolor="darkPink" size="small">
                En savoir plus
              </ButtonLink>
            </Content>
            <Content>
              <SubSubTitle>Des fonctionnalités déjà existantes</SubSubTitle>
              <Text>
                La plupart des fonctionnalités que nous proposons sont déjà
                intégrées dans l'ensemble de nos sites : un code optimisé pour
                que votre site soit visible sur Google et les autres moteurs de
                recherche (plus communément appelé sous le nom barbare de "site
                SEO friendly"), une jolie interface qui vous permet de modifier
                facilement vos contenus, un suivi simplifié des performances de
                votre site, etc.
              </Text>
              <ButtonLink to="/" backgroundcolor="darkPink" size="small">
                En savoir plus
              </ButtonLink>
            </Content>
          </WrapperText>
          <WrapperImage>
            <Image src={Bureau} />
          </WrapperImage>
        </Wrapper>
      </Spacer>
      <Spacer height="100vh" backgroundColor={theme.darkGrey}>
        <Wrapper>
          <WrapperImage>
            <Image src={Work} />
          </WrapperImage>
          <WrapperText position="right">
            <SubTitle label="Site internet" />

            <Content>
              <SubSubTitle>Une technologie puissante</SubSubTitle>
              <Text>
                Nous utilisons une technologie de développement (la JAM stack,
                pour les initiés) qui nous permet de créer des sites performants
                et sécurisés rapidement. Nous gagnons du temps, nous pouvons
                donc vous proposer des prix plus abordables que les agences (ou
                les freelances).
              </Text>
              {/* <ButtonLink to="/" backgroundcolor="darkPink" size="small">
                En savoir plus
              </ButtonLink> */}
            </Content>
            <Content>
              <SubSubTitle>Des fonctionnalités déjà existantes</SubSubTitle>
              <Text>
                La plupart des fonctionnalités que nous proposons sont déjà
                intégrées dans l'ensemble de nos sites : un code optimisé pour
                que votre site soit visible sur Google et les autres moteurs de
                recherche (plus communément appelé sous le nom barbare de "site
                SEO friendly"), une jolie interface qui vous permet de modifier
                facilement vos contenus, un suivi simplifié des performances de
                votre site, etc.
              </Text>
              {/* <ButtonLink to="/" backgroundcolor="darkPink" size="small">
                En savoir plus
              </ButtonLink> */}
            </Content>
          </WrapperText>
        </Wrapper>
      </Spacer>
      <Spacer height="100vh">
        <Wrapper>
          <WrapperText>
            <SubTitle label="site internet" />

            <Content>
              <SubSubTitle>Une technologie puissante</SubSubTitle>
              <Text>
                Nous utilisons une technologie de développement (la JAM stack,
                pour les initiés) qui nous permet de créer des sites performants
                et sécurisés rapidement. Nous gagnons du temps, nous pouvons
                donc vous proposer des prix plus abordables que les agences (ou
                les freelances).
              </Text>
              <ButtonLink to="/" backgroundcolor="darkPink" size="small">
                En savoir plus
              </ButtonLink>
            </Content>
            <Content>
              <SubSubTitle>Des fonctionnalités déjà existantes</SubSubTitle>
              <Text>
                La plupart des fonctionnalités que nous proposons sont déjà
                intégrées dans l'ensemble de nos sites : un code optimisé pour
                que votre site soit visible sur Google et les autres moteurs de
                recherche (plus communément appelé sous le nom barbare de "site
                SEO friendly"), une jolie interface qui vous permet de modifier
                facilement vos contenus, un suivi simplifié des performances de
                votre site, etc.
              </Text>
              <ButtonLink to="/" backgroundcolor="darkPink" size="small">
                En savoir plus
              </ButtonLink>
            </Content>
          </WrapperText>
          <WrapperImage>
            <Image src={Developer} />
          </WrapperImage>
        </Wrapper>
      </Spacer>
    </Layout>
  );
};

export default Expertise;
