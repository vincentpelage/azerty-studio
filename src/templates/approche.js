import React from "react";
import styled from "styled-components";
import Parser from "html-react-parser";

import Layout from "../components/Layout";
import Spacer from "../components/spacer/index";
import Title from "../components/title/index";
import { ButtonLink } from "../components/button";
import Bureau from "../img/bureau.svg";
import Developer from "../img/developer.svg";
import Work from "../img/work.svg";
import { globalVariables, theme } from "../components/globalStyle";

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
  padding: 4rem 3rem 0 0;

  p {
    margin-bottom: 1rem;
    text-align: justify;
    & strong {
      color: ${props => props.theme.darkPink};
    }
  }
  @media (max-width: ${globalVariables.medDesktop}) {
    &:first-child {
      padding: 3rem 3rem 0 0;
    }
    &:not(:first-child) {
      padding: 2rem 3rem 0 0;
    }
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    &:first-child {
      padding: 1rem 0;
    }
    &:not(:first-child) {
      padding: 1rem 0;
    }
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
    background-color: ${props => props.theme.darkPink};
    border-radius: 50%;
  }
`;

const Approche = ({ location, data }) => {
  console.log(data);
  return (
    <Layout location={location}>
      <Spacer height="100vh">
        <Title
          label={data.prismicApprocheBodyContenu.primary.titre_page.text}
        />
        <Wrapper>
          <WrapperText>
            {data.prismicApprocheBodyContenu.items.map((item, index) => (
              <Content key={index}>
                <SubSubTitle>{item.sous_titre.text}</SubSubTitle>
                {Parser(item.contenu1.html)}
                {item.contenu_bouton &&
                item.lien_bouton &&
                item.lien_bouton.text !== "" &&
                item.contenu_bouton.text !== "" ? (
                  <ButtonLink
                    to={item.lien_bouton.text}
                    backgroundcolor="darkPink"
                    size="small"
                    margin="1rem 0"
                  >
                    {item.contenu_bouton.text}
                  </ButtonLink>
                ) : null}
              </Content>
            ))}
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
            {/* <SubTitle
              label={data.prismicApprocheBody1Contenu.primary.titre_site.text}
            /> */}

            {data.prismicApprocheBody1Contenu.items.map((item, index) => (
              <Content key={index}>
                <SubSubTitle>{item.sous_titre.text}</SubSubTitle>
                {Parser(item.contenu1.html)}
                {item.contenu_bouton &&
                item.lien_bouton &&
                item.lien_bouton.text !== "" &&
                item.contenu_bouton.text !== "" ? (
                  <ButtonLink
                    to={item.lien_bouton.text}
                    backgroundcolor="darkPink"
                    size="small"
                    margin="1rem 0"
                  >
                    {item.contenu_bouton.text}
                  </ButtonLink>
                ) : null}
              </Content>
            ))}
          </WrapperText>
        </Wrapper>
      </Spacer>
      <Spacer height="100vh">
        <Wrapper>
          <WrapperText>
            {/* <SubTitle
              label={data.prismicApprocheBody2Contenu.primary.titre_trafic.text}
            /> */}

            {data.prismicApprocheBody2Contenu.items.map((item, index) => (
              <Content key={index}>
                <SubSubTitle>{item.sous_titre.text}</SubSubTitle>
                {Parser(item.contenu1.html)}
                {item.contenu_bouton &&
                item.lien_bouton1 &&
                item.lien_bouton1.text !== "" &&
                item.contenu_bouton.text !== "" ? (
                  <ButtonLink
                    to={item.lien_bouton1.text}
                    backgroundcolor="darkPink"
                    size="small"
                    margin="1rem 0"
                  >
                    {item.contenu_bouton.text}
                  </ButtonLink>
                ) : null}
              </Content>
            ))}
          </WrapperText>
          <WrapperImage>
            <Image src={Developer} />
          </WrapperImage>
        </Wrapper>
      </Spacer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Approche {
    prismicApprocheBodyContenu {
      primary {
        titre_page {
          text
        }
        titre_constat {
          text
        }
      }
      items {
        sous_titre {
          text
        }
        contenu1 {
          html
        }
      }
    }
    prismicApprocheBody1Contenu {
      primary {
        titre_site {
          text
        }
      }
      items {
        sous_titre {
          text
        }
        contenu1 {
          html
        }
        contenu_bouton {
          text
        }
        lien_bouton {
          text
        }
      }
    }
    prismicApprocheBody2Contenu {
      primary {
        titre_trafic {
          text
        }
      }
      items {
        sous_titre {
          text
        }
        contenu1 {
          html
        }
        contenu_bouton {
          text
        }
        lien_bouton1 {
          text
        }
      }
    }
  }
`;

export default Approche;
