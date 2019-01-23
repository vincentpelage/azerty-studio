import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import Parser from "html-react-parser";

import Foyt from "../img/Foyt";
import Resume from "../img/Resume";
import Process from "../img/Process";
import { ButtonLink } from "../components/button";
import Title from "../components/title";
import { globalVariables } from "../components/globalStyle";
import SubTitle from "../components/subTitle";
import ArrowRightPurple from "../icons/arrow-right-purple.svg";
import ArrowRightGreen from "../icons/arrow-right-green.svg";
import ArrowRightPink from "../icons/arrow-right-pink.svg";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex-direction: column;
  }
`;

const WrapperList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 2rem 4rem;
  flex: 0 0 50%;
  background-color: ${props => props.theme.white};
  overflow: hidden;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex: 0 0 100%;
    padding: 3rem 2rem 1rem 2rem;
    order: 2;
  }
`;

const WrapperContent = styled.div`
  padding: 5rem 4rem;
  flex: 0 0 50%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    top: 50%;
    right: ${props => (props.arrowPosition === "right" ? "-14px" : "auto")};
    left: ${props => (props.arrowPosition === "left" ? "-14px" : "auto")};
    background-color: ${props => props.theme.grey};
    transform: rotate(45deg);
    border-radius: ${globalVariables.borderRadius};
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) 0ms;
    z-index: 1;
    @media (max-width: ${globalVariables.maxTablet}) {
      top: auto;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  }
  @media (max-width: ${globalVariables.maxTablet}) {
    padding: 5rem 2rem 4rem 2rem;
    flex: 0 0 100%;
    order: 1;
    min-height: 80vh;
  }
`;

const WrapperContentContent = styled.div`
  padding-top: 3rem;
  @media (max-width: ${globalVariables.maxTablet}) {
    padding-top: 1rem;
  }
`;

const CardContent = styled.div`
  p {
    /* text-align: justify; */
    margin: 3rem 0;
    max-width: 80%;
    @media (max-width: ${globalVariables.medDesktop}) {
      max-width: none;
    }
  }
`;

const List = styled.div`
  margin-bottom: 1rem;
  padding-left: 1rem;
  max-width: 80%;
  li {
    position: relative;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
    &::before {
      content: "";
      background-image: url(${props => props.icon});
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: 0px;
      left: -3rem;
      height: 1.5rem;
      width: 1.5rem;
    }
  }
  @media (max-width: ${globalVariables.maxTablet}) {
    max-width: 100%;
  }
`;

const OffreContent = ({ offre, component }) => {
  return (
    <WrapperContentContent>
      <CardContent color={offre.color}>
        <SubTitle
          label={offre.titre_offre.text}
          // fontSize="20px"
          color={offre.color}
          backgroundColor={offre.color}
        />

        {Parser(offre.contenu_offre.html)}
        <ButtonLink
          backgroundcolor={offre.color}
          size="small"
          to={offre.lien_offre.text}
        >
          {offre.bouton_offre.text}
        </ButtonLink>
        {component()}
      </CardContent>
    </WrapperContentContent>
  );
};

const OffreList = ({ contenu, color, icon }) => {
  return (
    <React.Fragment>
      <List color={color} icon={icon}>
        {Parser(contenu.html)}
      </List>
    </React.Fragment>
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
      color: "purple",
      icon: ArrowRightPurple
    };
    const offre2 = {
      titre_offre: prismicOffresBodyMain.items[1].titre_offre,
      contenu_offre: prismicOffresBodyMain.items[1].contenu_offre,
      detail_offre: prismicOffresBodyMain.items[1].detail_offre,
      bouton_offre: prismicOffresBodyMain.items[1].bouton_offre,
      lien_offre: prismicOffresBodyMain.items[1].lien_offre,
      color: "darkGreen",
      icon: ArrowRightGreen
    };
    const offre3 = {
      titre_offre: prismicOffresBodyMain.items[2].titre_offre,
      contenu_offre: prismicOffresBodyMain.items[2].contenu_offre,
      detail_offre: prismicOffresBodyMain.items[2].detail_offre,
      bouton_offre: prismicOffresBodyMain.items[2].bouton_offre,
      lien_offre: prismicOffresBodyMain.items[2].lien_offre,
      color: "darkPink",
      icon: ArrowRightPink
    };

    return (
      <Layout location={this.props.location}>
        <WrapperContainer>
          <WrapperContent arrowPosition="right">
            <Title label={titre_page.text} />
            <OffreContent offre={offre1} component={Foyt} />
          </WrapperContent>
          <WrapperList>
            <OffreList
              contenu={offre1.detail_offre}
              contenuBouton={offre1.bouton_offre}
              color={offre1.color}
              icon={offre1.icon}
            />
          </WrapperList>
        </WrapperContainer>
        <WrapperContainer>
          <WrapperList>
            <OffreList
              contenu={offre2.detail_offre}
              contenuBouton={offre2.bouton_offre}
              color={offre2.color}
              icon={offre2.icon}
            />
          </WrapperList>
          <WrapperContent arrowPosition="left">
            <OffreContent offre={offre2} component={Resume} />
          </WrapperContent>
        </WrapperContainer>
        <WrapperContainer>
          <WrapperContent arrowPosition="right">
            <OffreContent offre={offre3} component={Process} />
          </WrapperContent>
          <WrapperList>
            <OffreList
              contenu={offre3.detail_offre}
              contenuBouton={offre3.bouton_offre}
              color={offre3.color}
              icon={offre3.icon}
            />
          </WrapperList>
        </WrapperContainer>
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
          text
        }
      }
    }
  }
`;

export default Offres;
