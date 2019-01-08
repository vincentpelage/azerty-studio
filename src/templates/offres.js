import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import Parser from "html-react-parser";

import Foyt from "../img/Foyt";
import Resume from "../img/Resume";
import Process from "../img/Process";
import Responsive from "../icons/Responsive";
import PencilCase from "../icons/PencilCase";
import Feature from "../icons/Feature";
import { ButtonLink } from "../components/button";
import Title from "../components/title";
import {
  globalVariables,
  Desktop,
  NotDesktop
} from "../components/globalStyle";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex-direction: column;
  }
`;

const WrapperRight = styled.div`
  padding: 2rem 4rem;
  display: flex;
  flex: 0 0 50%;
  background-color: ${props => props.theme.white};
  flex-direction: column;
  align-items: center;
  height: 100vh;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex: 0 0 100%;
    padding: 1rem 2rem 3rem 2rem;
    height: auto;
  }
`;

const WrapperLeft = styled.div`
  padding: 5rem 4rem;
  flex: 0 0 50%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 40px;
    width: 40px;
    top: ${props => (props.topPosition ? props.topPosition + "px" : "50%")};
    right: -20px;
    background-color: ${props => props.theme.grey};
    transform: rotate(45deg);
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1) 0ms;
    @media (max-width: ${globalVariables.maxTablet}) {
      top: auto;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  }
  @media (max-width: ${globalVariables.maxTablet}) {
    padding: 5rem 2rem 4rem 2rem;
    flex: 0 0 100%;
  }
`;

const WrapperLeftContent = styled.div`
  padding-top: 3rem;
  @media (max-width: ${globalVariables.maxTablet}) {
    padding-top: 1rem;
  }
`;

const CardContent = styled.div`
  max-width: 400px;
  margin-top: 3rem;
  h2,
  p > strong {
    font-weight: 500;
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
  @media (max-width: ${globalVariables.maxMobile}) {
    width: 100%;
    margin-top: 2.5rem;
  }
`;

const CardContentTitle = styled.h2`
  font-family: aqua;
  font-size: 20px;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: ${globalVariables.maxTablet}) {
    font-size: 18px;
    justify-content: ${props =>
      props.justifyContent ? props.justifyContent : null};
  }
`;

const List = styled.ul`
  margin-bottom: 1rem;
  padding-left: 1rem;
  max-width: 80%;
  li {
    position: relative;
    margin: 0 0 15px 0;
    padding-left: 0.5rem;
    &::before {
      content: "";
      position: absolute;
      top: 8px;
      left: -5%;
      height: 8px;
      width: 8px;
      border-radius: 50%;
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
    }
  }
  @media (max-width: ${globalVariables.maxTablet}) {
    max-width: 100%;
  }
`;

const Trait = styled.hr`
  width: 50px;
  height: 2px;
  border-color: ${props => props.theme[props.color]};
  margin: 2rem auto 0;
  border-radius: 30px;
`;

const Offre = ({ contenu, color, component, title }) => (
  <React.Fragment>
    {title ? (
      <CardContent color={color}>
        <CardContentTitle justifyContent="center">{title}</CardContentTitle>
      </CardContent>
    ) : null}
    {component()}
    <List color={color}>
      {contenu.raw.map((elem, id) => (
        <li key={id}>{elem.text}</li>
      ))}
    </List>
    <ButtonLink backgroundcolor={color} size="small" to="/">
      En savoir plus
    </ButtonLink>
  </React.Fragment>
);

class Offres extends React.Component {
  state = {
    offreSelected: 1,
    topPosition: null
  };

  componentDidMount = () => {
    const topPosition =
      document.getElementById("offre1").getBoundingClientRect().top + 40;
    this.setState({ topPosition });
  };

  onMouseEnter = offre => () => {
    const Id = "offre" + offre.toString();
    const topPosition =
      document.getElementById(Id).getBoundingClientRect().top + 40;
    this.setState({ offreSelected: offre, topPosition });
  };

  render() {
    const {
      titre_offres,
      titre_offre_1,
      contenu_offre_1,
      liste_offre_1,
      titre_offre_2,
      contenu_offre_2,
      liste_offre_2,
      titre_offre_3,
      contenu_offre_3,
      liste_offre_3
    } = this.props.data.prismicOffres.data;

    const OffreSelected = () => {
      switch (this.state.offreSelected) {
        case 1:
          return (
            <Offre contenu={liste_offre_1} color="purple" component={Foyt} />
          );
        case 2:
          return (
            <Offre
              contenu={liste_offre_2}
              color="darkGreen"
              component={Resume}
            />
          );
        default:
          return (
            <Offre contenu={liste_offre_3} color="pink" component={Process} />
          );
      }
    };

    return (
      <Layout location={this.props.location}>
        <WrapperContainer>
          <WrapperLeft topPosition={this.state.topPosition}>
            <Title label={titre_offres.text} />
            <WrapperLeftContent>
              <CardContent
                color="purple"
                onMouseEnter={this.onMouseEnter(1)}
                status={this.state.offre1status}
                id="offre1"
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
                id="offre2"
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
                id="offre3"
              >
                <CardContentTitle>
                  <Feature color="pink" />
                  {titre_offre_3.text}
                </CardContentTitle>
                {Parser(contenu_offre_3.html)}
              </CardContent>
            </WrapperLeftContent>
          </WrapperLeft>
          <WrapperRight>
            <Desktop>
              <OffreSelected />
            </Desktop>
            <NotDesktop>
              <Offre
                contenu={liste_offre_1}
                color="purple"
                component={Foyt}
                title={titre_offre_1.text}
              />
              <Trait color="purple" />
              <Offre
                contenu={liste_offre_2}
                color="darkGreen"
                component={Resume}
                title={titre_offre_2.text}
              />
              <Trait color="darkGreen" />

              <Offre
                contenu={liste_offre_3}
                color="pink"
                component={Process}
                title={titre_offre_3.text}
              />
              <Trait color="pink" />
            </NotDesktop>
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
        liste_offre_1 {
          raw {
            text
          }
        }
        titre_offre_2 {
          text
        }
        contenu_offre_2 {
          html
        }
        liste_offre_2 {
          raw {
            text
          }
        }
        titre_offre_3 {
          text
        }
        contenu_offre_3 {
          html
        }
        liste_offre_3 {
          raw {
            text
          }
        }
      }
    }
  }
`;

export default Offres;
