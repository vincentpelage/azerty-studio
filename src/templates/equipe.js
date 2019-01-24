import React from "react";
import styled from "styled-components";
import Parser from "html-react-parser";

import Layout from "../components/Layout";
import Spacer from "../components/spacer";
import Title from "../components/title/index";
import { theme, globalVariables } from "../components/globalStyle";
import Linkedin from "../icons/linkedin.svg";
import SubTitle from "../components/subTitle";
import HighFive from "../img/HighFive";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  padding-top: 3rem;
  text-align: justify;
  & strong {
    color: ${props => props.theme.darkPink};
    /* font-weight: 300; */
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    padding-top: 1.5rem;
  }
`;

const SubTitleParagraph = styled.h2`
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
    background-color: ${props => props.theme.darkPink};
    border-radius: 50%;
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
  p {
    text-align: justify;
    margin-top: 1rem;
    & > strong {
      /* font-weight: 300; */
      color: ${props => props.theme.darkPink};
    }
  }
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

const LinkedinStyled = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 1rem;
`;

const Equipe = ({ location, data }) => {
  console.log(data);
  return (
    <Layout location={location}>
      <Wrapper>
        <Spacer backgroundColor={theme.darkGrey} height="100vh" flex="0 0 40%">
          <Title
            label={
              data.prismicAProposBodyTitrePrincipal.primary.titre_principal.text
            }
          />
          {data.prismicAProposBodyTitrePrincipal.items.map((item, index) => (
            <Container key={index}>
              <SubTitleParagraph>{item.titre_avantage.text}</SubTitleParagraph>
              {Parser(item.contenu_avantage.html)}
            </Container>
          ))}

          <HighFive />
        </Spacer>
        <Spacer height="100vh" flex="0 0 60%">
          <WrapperTeam>
            {data.prismicAProposBody1Portrait.items.map((item, index) => (
              <Team>
                <Picture src={item.image_portrait.url} />
                <SubTitle label={item.titre_portrait.text} textAlign="center" />
                {Parser(item.contenu_portrait.html)}
                <a
                  href="https://www.linkedin.com/in/charlottecady/"
                  // eslint-disable-next-line
                  target="_blank"
                  rel="nooper noreferrer"
                >
                  <LinkedinStyled src={Linkedin} />
                </a>
              </Team>
            ))}
          </WrapperTeam>
        </Spacer>
      </Wrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Equipe {
    prismicAProposBodyTitrePrincipal {
      primary {
        titre_principal {
          html
          text
        }
      }
      items {
        titre_avantage {
          html
          text
        }
        contenu_avantage {
          html
          text
        }
      }
    }
    prismicAProposBody1Portrait {
      items {
        titre_portrait {
          html
          text
        }
        contenu_portrait {
          html
          text
        }
        image_portrait {
          url
        }
      }
    }
  }
`;

export default Equipe;
