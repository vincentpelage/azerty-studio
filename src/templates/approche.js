import React from "react";
import styled from "styled-components";
import Parser from "html-react-parser";

import Layout from "../components/Layout";
import Spacer from "../components/spacer/index";
import Title from "../components/title/index";
import { ButtonLink, ButtonInvertedLink } from "../components/button";
import Bureau from "../img/bureau.svg";
import Work from "../img/work.svg";
import { globalVariables, theme } from "../components/globalStyle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex-direction: column;
  }
`;

const WrapperText = styled.div`
  flex: 0 0 50%;
  padding-left: ${props => (props.position === "right" ? "2rem" : "0")};
  padding-right: ${props => (props.position === "left" ? "2rem" : "0")};
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
    padding-left: 0;
    padding-right: 0;
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
  padding-bottom: 4rem;

  p {
    margin-bottom: 1rem;
    text-align: justify;
    & strong {
      /* color: ${props => props.theme.pink}; */
    }
  }
  @media (max-width: ${globalVariables.medDesktop}) {
    padding-bottom: 2rem;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    padding: 1rem 0;
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
  return (
    <Layout location={location}>
      <Spacer height="90vh">
        <Title
          label={data.prismicApprocheBodyContenu.primary.titre_page.text}
        />
        <Wrapper>
          <WrapperText position="left">
            {data.prismicApprocheBodyContenu.items.map((item, index) => (
              <Content key={index}>
                <SubSubTitle>{item.sous_titre.text}</SubSubTitle>
                {Parser(item.contenu1.html)}
                {item.contenu_bouton &&
                item.lien_bouton &&
                item.lien_bouton.text &&
                item.contenu_bouton.text ? (
                  <ButtonLink
                    to={item.lien_bouton.text}
                    backgroundcolor="darkPink"
                    size="small"
                    margin="2rem 1rem 1rem 0"
                  >
                    {item.contenu_bouton.text}
                  </ButtonLink>
                ) : null}
                {item.bouton_contact &&
                item.lien_contact &&
                item.lien_contact.url &&
                item.bouton_contact.text ? (
                  <ButtonInvertedLink
                    color="darkPink"
                    border="darkPink"
                    size="small"
                    to={item.lien_contact.url}
                  >
                    {item.bouton_contact.text}
                  </ButtonInvertedLink>
                ) : null}
              </Content>
            ))}
          </WrapperText>
          <WrapperImage>
            <Image src={Bureau} />
          </WrapperImage>
        </Wrapper>
      </Spacer>
      <Spacer height="90vh" backgroundColor={theme.darkGrey}>
        <Wrapper>
          <WrapperImage>
            <Image src={Work} />
          </WrapperImage>
          <WrapperText position="right">
            {data.prismicApprocheBody2Contenu.items.map((item, index) => (
              <Content key={index}>
                <SubSubTitle>{item.sous_titre.text}</SubSubTitle>
                {Parser(item.contenu1.html)}
                {item.contenu_bouton &&
                item.lien_bouton1 &&
                item.lien_bouton1.text &&
                item.contenu_bouton.text ? (
                  <ButtonLink
                    to={item.lien_bouton1.text}
                    backgroundcolor="darkPink"
                    size="small"
                    margin="2rem 1rem 1rem 0"
                  >
                    {item.contenu_bouton.text}
                  </ButtonLink>
                ) : null}
                {item.bouton_contact &&
                item.lien_contact &&
                item.lien_contact.url &&
                item.bouton_contact.text ? (
                  <ButtonInvertedLink
                    color="darkPink"
                    border="darkPink"
                    size="small"
                    to={item.lien_contact.url}
                  >
                    {item.bouton_contact.text}
                  </ButtonInvertedLink>
                ) : null}
              </Content>
            ))}
          </WrapperText>
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
        contenu_bouton {
          text
        }
        lien_bouton {
          text
        }
        bouton_contact {
          text
        }
        lien_contact {
          url
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
        bouton_contact {
          text
        }
        lien_contact {
          url
        }
      }
    }
  }
`;

export default Approche;
