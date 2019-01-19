import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Spacer from "../components/spacer/index";
import Title from "../components/title/index";
import SubTitle from "../components/subTitle";
import { ButtonLink } from "../components/button/index";
import { globalVariables } from "../components/globalStyle";
import Circle from "../img/Circle";
import IconSpace from "../icons/startup.svg";
import IconStats from "../icons/line-chart.svg";
import IconFlask from "../icons/flask.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 11rem;
  @media (max-width: ${globalVariables.medDesktop}) {
    margin-top: 9rem;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    flex-direction: column;
    margin-top: 3rem;
  }
`;

const Item = styled.div`
  flex: 0 0 33%;
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
  padding: 2rem 0;
  min-height: 150px;
  & > strong {
    color: ${props => props.theme.purple};
    font-weight: 500;
  }
  @media (max-width: ${globalVariables.maxTablet}) and (min-width: ${globalVariables.minTablet}) {
    min-height: 250px;
  }
`;

const Expertises = ({ location, data }) => {
  return (
    <Layout location={location}>
      <Spacer height="100vh" fullHeight>
        <Circle />
        <Title label="Nos expertises" />
        <Wrapper>
          <Item>
            <WrapperIcon>
              <Icon src={IconFlask} />
            </WrapperIcon>
            <SubTitle
              label="Creer votre site"
              color="darkGreen"
              backgroundColor="darkGreen"
              textAlign="center"
              fontSize="20px"
            />
            <Paragraph>
              Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut
              nihil posset accedere,{" "}
              <strong>moriendi autem sensum celeritas abstulit</strong> ; quo de
              genere.
            </Paragraph>
            <ButtonLink
              to="/expertises/site"
              backgroundcolor="darkGreen"
              size="small"
            >
              En savoir plus
            </ButtonLink>
          </Item>
          <Item>
            <WrapperIcon>
              <Icon src={IconSpace} />
            </WrapperIcon>
            <SubTitle
              label="Augmenter vos ventes"
              color="darkGreen"
              backgroundColor="darkGreen"
              textAlign="center"
              fontSize="20px"
            />
            <Paragraph>
              Quam ob rem vita{" "}
              <strong>moriendi autem sensum celeritas abstulit</strong>quidem
              talis fuit vel fortuna vel gloria, ut nihil posset accedere,
              moriendi autem sensum celeritas abstulit; quo de genere.
            </Paragraph>
            <ButtonLink
              to="/expertises/trafic"
              backgroundcolor="darkGreen"
              size="small"
            >
              En savoir plus
            </ButtonLink>
          </Item>
          <Item>
            <WrapperIcon>
              <Icon src={IconStats} />
            </WrapperIcon>
            <SubTitle
              label="Analyser vos performances"
              color="darkGreen"
              backgroundColor="darkGreen"
              textAlign="center"
              fontSize="20px"
            />
            <Paragraph>
              Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut
              nihil posset accedere, moriendi autem sensum celeritas abstulit;{" "}
              <strong>moriendi autem sensum celeritas abstulit</strong>quo de
              genere.
            </Paragraph>
            <ButtonLink
              to="/expertises/analyse"
              backgroundcolor="darkGreen"
              size="small"
            >
              En savoir plus
            </ButtonLink>
          </Item>
        </Wrapper>
      </Spacer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Expertises {
    prismicExpertisesBodyExpertise {
      primary {
        titre_principal {
          html
          text
        }
      }
      items {
        titre_expertise {
          html
          text
        }
        contenu_expertise {
          html
          text
        }
        bouton_expertise {
          html
          text
        }
      }
    }
  }
`;

export default Expertises;
