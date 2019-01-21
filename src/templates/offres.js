import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import Parser from "html-react-parser";
import { CSSTransition } from "react-transition-group";

import Foyt from "../img/Foyt";
import Resume from "../img/Resume";
import Process from "../img/Process";
import IconResponsive from "../icons/responsive.svg";
import IconPaint from "../icons/paint-brush.svg";
import IconTarget from "../icons/webmarketing.svg";
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
  position: relative;
  flex: 0 0 50%;
  background-color: ${props => props.theme.white};
  overflow: hidden;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex: 0 0 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 2rem 3rem 2rem;
  }
`;

const WrapperTransition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 2rem 4rem;

  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  &.offre-selected-enter {
    opacity: 0;
  }

  &.offre-selected-exit {
    opacity: 0;
  }
`;

const WrapperLeft = styled.div`
  padding: 5rem 4rem;
  flex: 0 0 50%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    top: ${props => (props.topPosition ? props.topPosition + "px" : "50%")};
    right: -14px;
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
  }
`;

const WrapperLeftContent = styled.div`
  padding-top: 3rem;
  @media (max-width: ${globalVariables.maxTablet}) {
    padding-top: 1rem;
  }
`;

const CardLink = styled.a`
  color: ${props => props.theme.black};
`;

const CardContent = styled.div`
  margin-top: 4rem;
  opacity: ${props => (props.isSelected ? "1" : "0.5")};
  border-radius: ${globalVariables.borderRadius};
  padding: ${props => (props.isSelected ? "1rem 2rem" : null)};
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    img {
      transform: rotate(360deg);
    }
  }
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
          return props.theme.darkPink;
      }
    }};
  }
  p {
    max-width: 500px;
    @media (max-width: ${globalVariables.medDesktop}) {
      max-width: 400px;
    }
  }
  @media (max-width: ${globalVariables.medDesktop}) {
    margin-top: 3rem;
  }
  @media (max-width: ${globalVariables.maxTablet}) {
    opacity: 1;
    padding: 0;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    opacity: 1;
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
  align-items: center;
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
            return props.theme.darkPink;
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

const WrapperIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${props => props.theme[props.color]};
    /* border-radius: ${globalVariables.borderRadius}; */
    border-radius: 50%;
    padding: 8px;
    margin-right: 1rem;
`;

const Icon = styled.img`
  transition: transform 0.5s ease-in-out;
`;

const Offre = ({ contenu, color, component, contenuBouton }) => {
  return (
    <React.Fragment>
      {component()}
      <List color={color}>
        {contenu.map((elem, id) => (
          <li key={id}>{elem.contenu_offre.text}</li>
        ))}
      </List>
      <ButtonLink backgroundcolor={color} size="small" to="/">
        {contenuBouton.text}
      </ButtonLink>
    </React.Fragment>
  );
};

class Offres extends React.Component {
  state = {
    offreSelected: 1,
    topPosition: null
  };

  componentDidMount = () => {
    const topPosition =
      document.getElementById("offre1").getBoundingClientRect().top + 30;
    this.setState({ topPosition });
  };

  onMouseEnter = offre => () => {
    const Id = "offre" + offre.toString();
    const topPosition =
      document.getElementById(Id).getBoundingClientRect().top + 30;
    this.setState({ offreSelected: offre, topPosition });
  };

  render() {
    const { prismicOffresBodyMain } = this.props.data;

    const { titre_page } = prismicOffresBodyMain.primary;
    const offre1 = {
      titre_offre: prismicOffresBodyMain.items[0].titre_offre,
      contenu_offre: prismicOffresBodyMain.items[0].contenu_offre,
      detail_offre: prismicOffresBodyMain.items[0].detail_offre,
      bouton_offre: prismicOffresBodyMain.items[0].bouton_offre
    };
    const offre2 = {
      titre_offre: prismicOffresBodyMain.items[1].titre_offre,
      contenu_offre: prismicOffresBodyMain.items[1].contenu_offre,
      detail_offre: prismicOffresBodyMain.items[1].detail_offre,
      bouton_offre: prismicOffresBodyMain.items[1].bouton_offre
    };
    const offre3 = {
      titre_offre: prismicOffresBodyMain.items[2].titre_offre,
      contenu_offre: prismicOffresBodyMain.items[2].contenu_offre,
      detail_offre: prismicOffresBodyMain.items[2].detail_offre,
      bouton_offre: prismicOffresBodyMain.items[2].bouton_offre
    };

    return (
      <Layout location={this.props.location}>
        <WrapperContainer>
          <WrapperLeft topPosition={this.state.topPosition}>
            <Title label={titre_page.text} />
            <WrapperLeftContent>
              <CardLink href="/offres/petit-budget">
                <CardContent
                  color="purple"
                  onMouseEnter={this.onMouseEnter(1)}
                  id="offre1"
                  isSelected={this.state.offreSelected === 1}
                >
                  <CardContentTitle>
                    <WrapperIcon color="purple">
                      <Icon
                        src={IconResponsive}
                        alt={offre1.titre_offre.text}
                      />
                    </WrapperIcon>
                    {offre1.titre_offre.text}
                  </CardContentTitle>
                  {Parser(offre1.contenu_offre.html)}
                </CardContent>
              </CardLink>
              <CardLink href="/offres/sur-mesure">
                <CardContent
                  color="darkGreen"
                  onMouseEnter={this.onMouseEnter(2)}
                  id="offre2"
                  isSelected={this.state.offreSelected === 2}
                >
                  <CardContentTitle>
                    <WrapperIcon color="darkGreen">
                      <Icon src={IconPaint} alt={offre2.titre_offre.text} />
                    </WrapperIcon>
                    {offre2.titre_offre.text}
                  </CardContentTitle>
                  {Parser(offre2.contenu_offre.html)}
                </CardContent>
              </CardLink>
              <CardLink href="/offres/agences">
                <CardContent
                  color="darkPink"
                  onMouseEnter={this.onMouseEnter(3)}
                  id="offre3"
                  isSelected={this.state.offreSelected === 3}
                >
                  <CardContentTitle>
                    <WrapperIcon color="darkPink">
                      <Icon src={IconTarget} alt={offre3.titre_offre.text} />
                    </WrapperIcon>
                    {offre3.titre_offre.text}
                  </CardContentTitle>
                  {Parser(offre3.contenu_offre.html)}
                </CardContent>
              </CardLink>
            </WrapperLeftContent>
          </WrapperLeft>
          <WrapperRight>
            <Desktop>
              <CSSTransition
                in={this.state.offreSelected === 1}
                timeout={300}
                classNames="offre-selected"
                unmountOnExit
              >
                <WrapperTransition>
                  <Offre
                    contenu={prismicOffresBodyMain.items}
                    contenuBouton={offre1.bouton_offre}
                    color="purple"
                    component={Foyt}
                  />
                </WrapperTransition>
              </CSSTransition>
              <CSSTransition
                in={this.state.offreSelected === 2}
                timeout={300}
                classNames="offre-selected"
                unmountOnExit
              >
                <WrapperTransition>
                  <Offre
                    contenu={prismicOffresBodyMain.items}
                    contenuBouton={offre2.bouton_offre}
                    color="darkGreen"
                    component={Resume}
                  />
                </WrapperTransition>
              </CSSTransition>
              <CSSTransition
                in={this.state.offreSelected === 3}
                timeout={300}
                classNames="offre-selected"
                unmountOnExit
              >
                <WrapperTransition>
                  <Offre
                    contenu={prismicOffresBodyMain.items}
                    contenuBouton={offre3.bouton_offre}
                    color="darkPink"
                    component={Process}
                  />
                </WrapperTransition>
              </CSSTransition>
            </Desktop>
            <NotDesktop>
              <Offre
                contenu={prismicOffresBodyMain.items}
                color="purple"
                component={Foyt}
                contenuBouton={offre1.bouton_offre}
              />
              <Trait color="purple" />
              <Offre
                contenu={prismicOffresBodyMain.items}
                color="darkGreen"
                component={Resume}
                contenuBouton={offre2.bouton_offre}
              />
              <Trait color="darkGreen" />

              <Offre
                contenu={prismicOffresBodyMain.items}
                color="pink"
                component={Process}
                contenuBouton={offre3.bouton_offre}
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
      }
    }
  }
`;

export default Offres;
