import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
//import { theme } from "../components/globalStyle";
import Parser from "html-react-parser";
import Foyt from "../img/foyt";
import Resume from "../img/resume";
import Process from "../img/process";
import Responsive from "../icons/Responsive";
import PencilCase from "../icons/PencilCase";
import Feature from "../icons/Feature";

import offresStyles from "../components/componentsStyles/offres.module.css";
import { Link, RichText, Date } from "prismic-reactjs";

var PrismicDOM = require("prismic-dom");

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const WrapperLeft = styled.div`
  flex-basis: 50%;
  background-color: ${props => props.theme.grey};
`;

const WrapperRight = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
`;

const WrapperLeftContent = styled.div`
  margin-top: 200px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 205px 0;
`;

const CardContent = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: ${props => {
      if (props.status === "actif") {
        return props.theme.grey;
      } else {
        return null;
      }
    }};
    top: 50%;
    right: -44.5%;
    transform: translate(-50%, -50%);
    transform: rotate(45deg);
  }
  p {
    font-size: 20px;
  }
  h2,
  p > strong {
    color: ${props => {
      switch (props.color) {
        case "purple":
          return props.theme.purple;
        case "darkGreen":
          return props.theme.darkGreen;
        default:
          return props.theme.pink;
      }
    }};
  }
`;

const CardContentTitle = styled.h2`
  font-family: aqua;
  font-size: 30px;
  position: relative;
  padding-left: 50px;
  margin-bottom: 10px;
`;

const Card2first = styled.h2`
  &:nth-of-type(1) {
    color: ${props => props.theme.purple};
  }
  &:nth-of-type(2) {
    color: ${props => props.theme.pink};
  }
  font-family: aqua;
  font-size: 30px;
`;

const CardContentText = styled.p`
  font-size: 20px;
`;

const List = styled.ul`
  margin-left: 250px;
  margin-bottom: 50px;
  li {
    position: relative;
    margin: 0 0 15px 0;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -5%;
      transform: translate(0%, -50%);
      background-color: ${props => {
        switch (props.color) {
          case "purple":
            return props.theme.purple;
          case "darkGreen":
            return props.theme.darkGreen;
          default:
            return props.theme.pink;
        }
      }};
      height: 10px;
      width: 10px;
      border-radius: 50%;
    }
  }
`;

const Offre1 = () => (
  <React.Fragment>
    <Foyt />
    <List color="purple">
      <li>Choix parmi 10 modèles de site</li>
      <li>Beau et Moderne</li>
      <li>Rapide et sécurisé</li>
      <li>Une interface de suivi simplifiée</li>
      <li>Adapté sur tous les écrans</li>
      <li>Facile à éditer</li>
      <li>Optimisé pour être visible sur Google</li>
    </List>
    <button>en savoir plus</button>
  </React.Fragment>
);

const Offre2 = () => (
  <React.Fragment>
    <Resume />
    <List color="darkGreen">
      <li>Un design sur mesure</li>
      <li>Des fonctionnalités sur mesure</li>
      <li>Rapide et sécurisé</li>
      <li>Une interface de suivi simplifiée</li>
      <li>Adapté sur tous les écrans</li>
      <li>Facile à éditer</li>
      <li>Optimisé pour être visible sur Google</li>
    </List>
    <button>en savoir plus</button>
  </React.Fragment>
);

const Offre3 = () => (
  <React.Fragment>
    <Process />
    <List>
      <li>Un site optimisé pour les canaux webmarketing</li>
      <li>Beau et Moderne</li>
      <li>Rapide et sécurisé</li>
      <li>Une interface de suivi simplifiée</li>
      <li>Adapté sur tous les écrans</li>
      <li>Facile à éditer</li>
      <li>Optimisé pour être visible sur Google</li>
    </List>
    <button>en savoir plus</button>
  </React.Fragment>
);

class Offres extends React.Component {
  state = {
    offreSelected: 1,
    offre1status: "actif",
    offre2status: "inactif",
    offre3status: "inactif"
  };

  onMouseEnter = offre => () => {
    if (offre === 1) {
      this.setState({
        offreSelected: 1,
        offre1status: "actif",
        offre2status: "inactif",
        offre3status: "inactif"
      });
    } else if (offre === 2) {
      this.setState({
        offreSelected: 2,
        offre1status: "inactif",
        offre2status: "actif",
        offre3status: "inactif"
      });
    } else {
      this.setState({
        offreSelected: 3,
        offre1status: "inactif",
        offre2status: "inactif",
        offre3status: "actif"
      });
    }
  };

  render() {
    const {
      titre_offres,
      titre_offre_1,
      contenu_offre_1,
      titre_offre_2,
      contenu_offre_2,
      titre_offre_3,
      contenu_offre_3
    } = this.props.data.prismicOffres.data;

    const OffreSelected = () => {
      if (this.state.offreSelected === 1) {
        return <Offre1 />;
      } else if (this.state.offreSelected === 2) {
        return <Offre2 />;
      } else {
        return <Offre3 />;
      }
    };

    return (
      <Layout>
        <WrapperContainer>
          <WrapperLeft>
            {titre_offres.text}
            <WrapperLeftContent>
              <CardContent
                color="purple"
                onMouseEnter={this.onMouseEnter(1)}
                status={this.state.offre1status}
              >
                <CardContentTitle>
                  <Responsive color="purple" />
                  {titre_offre_1.text}
                </CardContentTitle>
                {Parser(contenu_offre_1.html)}
              </CardContent>
              <CardContent
                color="darkGreen"
                status={this.state.offre2status}
                onMouseEnter={this.onMouseEnter(2)}
              >
                <CardContentTitle>
                  <PencilCase color="darkGreen" />
                  {titre_offre_2.text}
                </CardContentTitle>
                {Parser(contenu_offre_2.html)}
              </CardContent>
              <CardContent
                color="lightPink"
                status={this.state.offre3status}
                onMouseEnter={this.onMouseEnter(3)}
              >
                <CardContentTitle>
                  <Feature color="lightPink" />
                  {titre_offre_3.text}
                </CardContentTitle>
                {Parser(contenu_offre_3.html)}
              </CardContent>
            </WrapperLeftContent>
          </WrapperLeft>
          <WrapperRight>
            <OffreSelected />
          </WrapperRight>
        </WrapperContainer>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query OffresBySlug($uid: String!) {
    prismicOffres(uid: { eq: $uid }) {
      uid
      data {
        titre_offres {
          text
        }
        titre_offre_1 {
          text
        }
        contenu_offre_1 {
          html
        }
        titre_offre_2 {
          text
        }
        contenu_offre_2 {
          html
        }
        titre_offre_3 {
          text
        }
        contenu_offre_3 {
          html
        }
      }
    }
  }
`;

export default Offres;
