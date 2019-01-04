import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { theme } from "../components/globalStyle";
import Parser from "html-react-parser";
import Foyt from "../img/foyt";
import Resume from "../img/resume";
import Process from "../img/process";
import Responsive from "../icons/Responsive";
import PencilCase from "../icons/PencilCase";
import Feature from "../icons/Feature";
import Spacer from "../components/spacer";
import Button from "../components/button";
import Title from "../components/title";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const WrapperLeft = styled.div`
  flex-basis: 50%;
`;

const WrapperRight = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
`;

const WrapperLeftContent = styled.div`
  /*margin-top: 200px;*/
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /*padding: 0 205px 0;*/
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

const Offre = ({ contenu, color, component }) => (
  <React.Fragment>
    {component()}
    <List color={color}>
      {contenu.raw.map((elem, id) => (
        <li key={id}>{elem.text}</li>
      ))}
    </List>
    <Button>en savoir plus</Button>
  </React.Fragment>
);

class Offres extends React.Component {
  state = {
    offreSelected: 1
  };

  onMouseEnter = offre => () => {
    this.setState({ offreSelected: offre });
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
          return <Offre contenu={liste_offre_3} component={Process} />;
      }
    };

    return (
      <Layout location={this.props.location}>
        <WrapperContainer>
          <Spacer flex="0 0 50%">
            <WrapperLeft>
              <Title label={titre_offres.text} />
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
          </Spacer>
          <Spacer backgroundColor={theme.white} flex="0 0 50%">
            <WrapperRight>
              <OffreSelected />
            </WrapperRight>
          </Spacer>
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
