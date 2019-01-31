import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import Parser from "html-react-parser";

import Spacer from "../components/spacer";
import Foyt from "../img/Foyt";
import Resume from "../img/Resume";
import Process from "../img/Process";
import { ButtonLink, ButtonInvertedLink } from "../components/button";
import Title from "../components/title";
import { globalVariables, theme } from "../components/globalStyle";
import SubTitle from "../components/subTitle";
import StarPurple from "../icons/star-purple.svg";
import StarGreen from "../icons/star-green.svg";
import StarPink from "../icons/star-pink.svg";

const WrapperGlobal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex-direction: column;
  }
`;

const WrapperText = styled.div`
  flex: 0 0 40%;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
    order: 1;
    margin-bottom: 2rem;
  }
`;

const WrapperImage = styled.div`
  flex: 0 0 60%;
  text-align: center;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
    order: 2;
  }
`;

const WrapperOffreContent = styled.div`
  padding-top: 3rem;
  @media (max-width: ${globalVariables.maxTablet}) {
    padding-top: 1rem;
  }
`;

const Text = styled.div`
  margin: 2rem 0 3rem;
  p {
    text-align: justify;
    margin-bottom: 1rem;
    max-width: 80%;
    @media (max-width: ${globalVariables.medDesktop}) {
      max-width: none;
    }
  }
`;

const OffreContent = ({ offre }) => {
  return (
    <WrapperOffreContent>
      <SubTitle
        label={offre.titre_offre.text}
        color={offre.color}
        backgroundColor={offre.color}
      />
      <Text>{Parser(offre.contenu_offre.html)}</Text>

      <ButtonLink
        backgroundcolor={offre.color}
        size="small"
        margin="0 1rem 0 0"
        to={"/offres/" + offre.lien_offre.url}
      >
        {offre.bouton_offre.text}
      </ButtonLink>
      <ButtonInvertedLink
        color={offre.color}
        border={offre.color}
        size="small"
        to={offre.lien_contact.url}
      >
        {offre.bouton_contact.text}
      </ButtonInvertedLink>
    </WrapperOffreContent>
  );
};

class Offres extends React.Component {
  render() {
    const { prismicOffresBodyMain } = this.props.data;

    const { titre_page } = prismicOffresBodyMain.primary;
    const offre1 = {
      titre_offre: prismicOffresBodyMain.items[0].titre_offre,
      contenu_offre: prismicOffresBodyMain.items[0].contenu_offre,
      detail_offre: prismicOffresBodyMain.items[0].detail_offre,
      bouton_offre: prismicOffresBodyMain.items[0].bouton_offre,
      lien_offre: prismicOffresBodyMain.items[0].lien_offre,
      bouton_contact: prismicOffresBodyMain.items[0].bouton_contact,
      lien_contact: prismicOffresBodyMain.items[0].lien_contact,
      color: "purple",
      iconDesktop: StarGreen,
      iconMobile: StarPurple
    };
    const offre2 = {
      titre_offre: prismicOffresBodyMain.items[1].titre_offre,
      contenu_offre: prismicOffresBodyMain.items[1].contenu_offre,
      detail_offre: prismicOffresBodyMain.items[1].detail_offre,
      bouton_offre: prismicOffresBodyMain.items[1].bouton_offre,
      lien_offre: prismicOffresBodyMain.items[1].lien_offre,
      bouton_contact: prismicOffresBodyMain.items[1].bouton_contact,
      lien_contact: prismicOffresBodyMain.items[1].lien_contact,
      color: "darkGreen",
      iconDesktop: StarPink,
      iconMobile: StarGreen
    };
    const offre3 = {
      titre_offre: prismicOffresBodyMain.items[2].titre_offre,
      contenu_offre: prismicOffresBodyMain.items[2].contenu_offre,
      detail_offre: prismicOffresBodyMain.items[2].detail_offre,
      bouton_contact: prismicOffresBodyMain.items[2].bouton_contact,
      lien_contact: prismicOffresBodyMain.items[2].lien_contact,
      bouton_offre: prismicOffresBodyMain.items[2].bouton_offre,
      lien_offre: prismicOffresBodyMain.items[2].lien_offre,
      color: "darkPink",
      iconDesktop: StarPurple,
      iconMobile: StarPink
    };

    return (
      <Layout location={this.props.location}>
        <Spacer height="80vh">
          <WrapperGlobal>
            <WrapperText>
              <Title label={titre_page.text} />
              <OffreContent offre={offre1} />
            </WrapperText>
            <WrapperImage>
              <Foyt />
            </WrapperImage>
          </WrapperGlobal>
        </Spacer>
        <Spacer height="80vh" backgroundColor={theme.white}>
          <WrapperGlobal>
            <WrapperImage>
              <Resume />
            </WrapperImage>
            <WrapperText>
              <OffreContent offre={offre2} />
            </WrapperText>
          </WrapperGlobal>
        </Spacer>
        <Spacer height="80vh">
          <WrapperGlobal>
            <WrapperText>
              <OffreContent offre={offre3} />
            </WrapperText>
            <WrapperImage>
              <Process />
            </WrapperImage>
          </WrapperGlobal>
        </Spacer>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query Offres {
    prismicOffresBodyMain {
      primary {
        titre_page {
          text
        }
      }
      items {
        titre_offre {
          text
        }
        contenu_offre {
          text
          html
        }
        detail_offre {
          html
          text
        }
        bouton_offre {
          text
        }
        lien_offre {
          url
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

export default Offres;
