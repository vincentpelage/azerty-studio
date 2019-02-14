import React from "react";
// import { TweenMax } from "gsap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Parser from "html-react-parser";

import Spacer from "../spacer/index";
import SubTitle from "../subTitle/index";
import styled from "styled-components";
import ButtonAncre from "../ancre";
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
  ul {
    font-size: 14px;
    li {
      margin-bottom: 1.5rem;
    }
  }
`;

const PrixText = styled.span`
  background-color: ${props => props.theme.green};
  padding: 7px 7px 5px;
  border-radius: ${globalVariables.borderRadius};
`;

const Tax = styled.span`
  font-size: 12px;
  padding-left: 7px;
`;

const Prix = ({ data }) => {
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
    <Spacer height="70vh" id="prix">
      <SubTitle label={data.primary.titre_prix.text} textAlign="center" />
      <WrapperSlider>
        <Slider {...settings}>
          {data.items.map((item, index) => (
            <Column key={index}>
              <Card>
                <CardTitle>
                  <p>{item.titre_offre.text}</p>
                  <PrixText>
                    {item.prix_offre.text}
                    <Tax>HT</Tax>
                  </PrixText>
                </CardTitle>
                <CardBody>{Parser(item.liste_offre.html)}</CardBody>
              </Card>
              <ButtonAncre
                color="purple"
                border="purple"
                size="small"
                ancreId="modeles"
              >
                {item.contenu_bouton.text}
              </ButtonAncre>
            </Column>
          ))}
        </Slider>
      </WrapperSlider>
    </Spacer>
  );
};

export default Prix;
