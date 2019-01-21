import React from "react";
import { TweenMax } from "gsap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Spacer from "../spacer/index";
import SubTitle from "../subTitle/index";
import styled from "styled-components";
import Button from "../button";
import { globalVariables } from "../globalStyle";

const WrapperSlider = styled.div`
  max-width: 1250px;
  margin: 2rem auto 0 auto;
  @media (max-width: ${globalVariables.medDesktop}) {
    max-width: 1050px;
  }

  .slick-dots li.slick-active button::before,
  .slick-prev::before,
  .slick-next::before {
    color: ${props => props.theme.darkGreen};
  }

  .slick-dots li button::before {
    font-size: 10px;
  }
`;

const Column = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Card = styled.div`
  margin-bottom: 2rem;
`;

const CardTitle = styled.div`
  background-color: ${props => props.theme.purple};
  color: ${props => props.theme.white};
  font-family: "Aqua";
  font-size: 18px;
  padding: 1rem 2rem;
  border-top-right-radius: ${globalVariables.borderRadius};
  border-top-left-radius: ${globalVariables.borderRadius};
  text-align: center;
  p {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  span {
    background-color: ${props => props.theme.green};
    padding: 4px 8px;
    border-radius: ${globalVariables.borderRadius};
  }
`;

const CardBody = styled.div`
  background-color: ${props => props.theme.white};
  padding: 1rem 2rem;
  border-bottom-right-radius: ${globalVariables.borderRadius};
  border-bottom-left-radius: ${globalVariables.borderRadius};
  min-height: 550px;
  @media (max-width: ${globalVariables.medDesktop}) {
    min-height: 450px;
  }
`;

const List = styled.ul`
  font-size: 14px;
`;

const Item = styled.li`
  margin-bottom: 1.5rem;
`;

class Prix extends React.Component {
  componentDidMount() {
    require("gsap/ScrollToPlugin");
  }

  handleClick = () => {
    if (typeof window !== "undefined") {
      const top = document.getElementById("modeles").offsetTop;
      TweenMax.to(window, 0.5, {
        scrollTo: { y: top },
        ease: "Power3.easeOut"
      });
    } else {
      const top = document.getElementById("modeles").offsetTop;
      TweenMax.to(window, 0.5, {
        scrollTo: { y: top },
        ease: "Power3.easeOut"
      });
    }
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };

    return (
      <Spacer height="100vh" id="prix">
        <SubTitle label="Prix" textAlign="center" />
        <WrapperSlider>
          <Slider {...settings}>
            <Column>
              <Card>
                <CardTitle>
                  <p>Une page</p>
                  <span>850 Euros</span>
                </CardTitle>
                <CardBody>
                  <List>
                    <Item>
                      <strong>Le choix parmi 5 modèles de site</strong>
                    </Item>
                    <Item>Adapté sur tous les écrans</Item>
                    <Item>Interface simple pour modifier vos contenus</Item>
                    <Item>
                      Interface simple de suivi des performances de votre site
                    </Item>
                    <Item>
                      Optimisé pour le référencement sur Google (SEO friendly)
                    </Item>
                  </List>
                </CardBody>
              </Card>
              <Button backgroundcolor="purple" onClick={this.handleClick}>
                Voir les modeles
              </Button>
            </Column>
            <Column>
              <Card>
                <CardTitle>
                  <p>Multi-pages</p>
                  <span>1 200 Euros</span>
                </CardTitle>
                <CardBody>
                  <List>
                    <Item>
                      <strong>Jusqu'à 15 pages</strong>
                    </Item>
                    <Item>
                      <strong>Le choix parmi 5 modèles de site</strong>
                    </Item>
                    <Item>Adapté sur tous les écrans</Item>
                    <Item>Interface simple pour modifier vos contenus</Item>
                    <Item>
                      Interface simple de suivi des performances de votre site
                    </Item>
                    <Item>
                      Optimisé pour le référencement sur Google (SEO friendly)
                    </Item>
                  </List>
                </CardBody>
              </Card>
              <Button backgroundcolor="purple" onClick={this.handleClick}>
                Voir les modeles
              </Button>
            </Column>
            <Column>
              <Card>
                <CardTitle>
                  <p>E-commerce</p>
                  <span>1 500 Euros</span>
                </CardTitle>
                <CardBody>
                  <List>
                    <Item>
                      <strong>Boutique en ligne</strong>
                    </Item>
                    <Item>
                      <strong>Système de paiement</strong>
                    </Item>
                    <Item>
                      <strong>Jusqu'à 30 pages</strong>
                    </Item>
                    <Item>
                      <strong>Le choix parmi 5 modèles de site</strong>
                    </Item>
                    <Item>Adapté sur tous les écrans</Item>
                    <Item>Interface simple pour modifier vos contenus</Item>
                    <Item>
                      Interface simple de suivi des performances de votre site
                    </Item>
                    <Item>
                      Optimisé pour le référencement sur Google (SEO friendly)
                    </Item>
                  </List>
                </CardBody>
              </Card>
              <Button backgroundcolor="purple" onClick={this.handleClick}>
                Voir les modeles
              </Button>
            </Column>
          </Slider>
        </WrapperSlider>
      </Spacer>
    );
  }
}

export default Prix;
