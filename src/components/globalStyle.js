import React from "react";
import { createGlobalStyle } from "styled-components";

import AquaTTF from "../fonts/aqua.ttf";
import AquaEOT from "../fonts/aqua.eot";
import AquaWOFF from "../fonts/aqua.woff";
import AquaWOFF2 from "../fonts/aqua.woff2";
import RobotoLightTTF from "../fonts/Roboto-Light.ttf";
import RobotoLightEOT from "../fonts/Roboto-Light.eot";
import RobotoLightWOFF from "../fonts/Roboto-Light.woff";
import RobotoLightWOFF2 from "../fonts/Roboto-Light.woff2";
import RobotoMediumTTF from "../fonts/Roboto-Medium.ttf";
import RobotoMediumEOT from "../fonts/Roboto-Medium.eot";
import RobotoMediumWOFF from "../fonts/Roboto-Medium.woff";
import RobotoMediumWOFF2 from "../fonts/Roboto-Medium.woff2";

export const globalVariables = {
  borderRadius: "3px",
  borderRadiusButton: "50px",
  borderWidth: "2px",
  maxMobile: "767px",
  minTablet: "768px",
  maxTablet: "991px",
  minDesktop: "992px",
  medDesktop: "1441px",
  bigDesktop: "2000px"
};

export const theme = {
  green: "#00BEC5",
  darkGreen: "#00B6BE",
  darkGreenOpacity: "rgba(0, 182, 190, .8)",
  white: "#FFF",
  whiteOpacityLetter: "rgba(255, 255, 255, 0.65)",
  whiteOpacityClients: "rgba(255, 255, 255, 0.9)",
  whiteNavOpacity: "rgba(255, 255, 255, 0.8)",
  whiteOpacity: "rgba(255, 255, 255, 0.5)",
  lightPink: "#FEBCBE",
  pink: "#EE8E9E",
  darkPink: "#F86D70",
  purple: "#6772E5",
  black: "#4a4a4a",
  grey: "#F2EFEF",
  darkGrey: "#eae8e8",
  transparent: "transparent"
};

const GlobalStyles = () => {
  const GlobalDefaults = createGlobalStyle`
  @font-face {
    font-family: Aqua;
    font-display: swap;
    src: url(${AquaTTF}) format("ttf"),
    url(${AquaEOT}) format("eot"),
    url(${AquaWOFF}) format("woff"),
    url(${AquaWOFF2}) format("woff2");     
  }

  @font-face {
    font-family: Roboto;
    font-display: swap;
    src: url(${RobotoLightTTF}) format("ttf"),
    url(${RobotoLightEOT}) format("eot"),
    url(${RobotoLightWOFF}) format("woff"),
    url(${RobotoLightWOFF2}) format("woff2");
    font-weight: normal;   
  }

  @font-face {
    font-family: Roboto;
    font-display: swap;
    src: url(${RobotoMediumTTF}) format("ttf"),
    url(${RobotoMediumEOT}) format("eot"),
    url(${RobotoMediumWOFF}) format("woff"),
    url(${RobotoMediumWOFF2}) format("woff2");
    font-weight: bold;   
  }
  
  body {
    h1 {
      font-family: 'Aqua', "Helvetica", "Arial", sans-serif;
    }
    input, textarea {
      font-family: 'Roboto', "Helvetica", "Arial", sans-serif;
    }
    p, a, span, h2, h3, h4, button, li {
      font-size: 14px;
      margin: 0;

      @media (min-width: ${globalVariables.minDesktop}) {
        font-size: 16px;
      }
      @media (min-width: ${globalVariables.medDesktop}) {
        font-size: 18px;
      }
      @media (min-width: ${globalVariables.bigDesktop}) {
        font-size: 20px;
      }
    }
    strong {
      font-weight: bold;
    }
    a {
      color: ${theme.black};
      text-decoration: underline;
      text-decoration-color: ${theme.darkGreen};
      cursor: pointer;
      transition: all 0.2s linear;
      &:hover {
        color: ${theme.darkGreen};
      }
    }
    button:focus, input:focus, textarea:focus, div:focus {
      outline: none;
    }
  }
  
`;

  return <GlobalDefaults />;
};

export default GlobalStyles;
