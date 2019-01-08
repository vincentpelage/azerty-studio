import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Spacer from "../components/spacer";
import Title from "../components/title/index";
import { theme, globalVariables } from "../components/globalStyle";
import Linkedin from "../icons/linkedin.svg";
import Charlotte from "../img/charlotte.png";
import Vincent from "../img/vincent.jpeg";
import SubTitle from "../components/subTitle";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  padding-top: 3rem;

  @media (max-width: ${globalVariables.maxMobile}) {
    padding-top: 1.5rem;
  }
`;

const SubTitleParagraph = styled.h2`
  color: ${props => props.theme.white};
  font-weight: 700;
  position: relative;
  display: inline;
  &::after {
    content: "";
    position: absolute;
    bottom: 5px;
    right: -10px;
    width: 5px;
    height: 5px;
    background-color: ${props => props.theme.lightPink};
    border-radius: 50%;
  }
`;

const Text = styled.p`
  text-align: justify;
  color: ${props => props.theme.white};
  & strong {
    font-weight: 500;
    color: ${props => props.theme.lightPink};
  }
`;

const WrapperTeam = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex-direction: column;
  }
`;

const Team = styled.div`
  flex: 0 0 50%;
  text-align: center;
  padding: 1rem;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
  }
`;

const Picture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  text-align: justify;
  margin-top: 1rem;
  & > strong {
    color: ${props => props.theme.pink};
    font-weight: 400;
  }
`;

const LinkedinStyled = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 1rem;
`;

const Equipe = ({ location }) => {
  return (
    <Layout location={location}>
      <Wrapper>
        <Spacer backgroundColor={theme.green} height="100vh" flex="0 0 40%">
          <Title label="A propos" />

          <Container>
            <SubTitleParagraph>On est tres sympas</SubTitleParagraph>
            <Text>
              Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut
              nihil posset accedere, moriendi autem .{" "}
              <strong>Quam ob rem vita quidem talis fuit vel</strong> fortuna
              vel gloria, ut nihil posset accedere, moriendi autem.
            </Text>
          </Container>
          <Container>
            <SubTitleParagraph>Et tres rigolos</SubTitleParagraph>
            <Text>
              Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut
              nihil posset accedere, moriendi autem gloria, ut nihil posset
              accedere, moriendi autem gloria, ut nihil posset accedere,
              moriendi autem gloria, ut nihil posset accedere, moriendi autem .{" "}
              <strong>Quam ob rem vita quidem talis fuit vel</strong> fortuna
              vel gloria, ut nihil posset accedere, moriendi autem.
            </Text>
          </Container>
        </Spacer>
        <Spacer height="100vh" flex="0 0 60%">
          <WrapperTeam>
            <Team>
              <Picture src={Charlotte} />
              <SubTitle label="Charlotte Cady" textAlign="center" />
              <Description>
                Quam ob rem vita quidem talis fuit vel fortuna vel gloria,{" "}
                <strong>ut nihil posset accedere</strong>, moriendi autem . ita{" "}
              </Description>
              <a
                href="https://www.linkedin.com/in/charlottecady/"
                target="_blank"
                rel="nooper noreferrer"
              >
                <LinkedinStyled src={Linkedin} />
              </a>
            </Team>
            <Team>
              <Picture src={Vincent} />
              <SubTitle label="Vincent Pelage" textAlign="center" />
              <Description>
                Quam ob rem vita quidem talis fuit vel fortuna{" "}
                <strong>ut nihil posset accedere</strong> vel gloria, ut nihil
                posset accedere, moriendi autem . ita{" "}
              </Description>
              <a
                href="https://www.linkedin.com/in/vincent-pelage/"
                target="_blank"
                rel="nooper noreferrer"
              >
                <LinkedinStyled src={Linkedin} />
              </a>
            </Team>
          </WrapperTeam>
        </Spacer>
      </Wrapper>
    </Layout>
  );
};

export default Equipe;
