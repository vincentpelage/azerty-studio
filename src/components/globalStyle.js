import React from "react";
import { createGlobalStyle } from "styled-components";
import Responsive from "react-responsive";

import AquaTTF from "../fonts/aqua.ttf";
import AquaEOT from "../fonts/aqua.eot";
import AquaWOFF from "../fonts/aqua.woff";
import AquaWOFF2 from "../fonts/aqua.woff2";

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
  darkGrey: "#eae8e8"
};

const GlobalStyles = () => {
  const GlobalDefaults = createGlobalStyle`

  @font-face {
    font-family: Aqua;
    src: url(${AquaTTF}) format("ttf"),
    url(${AquaEOT}) format("eot"),
    url(${AquaWOFF}) format("woff"),
    url(${AquaWOFF2}) format("woff2");     
  }
  
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    background-color: ${props => props.theme.grey};
    line-height: 1.5;
    color: ${props => props.theme.black};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    h1 {
      font-family: 'Aqua', sans-serif;
    }
    input, textarea {
      font-family: 'Roboto', sans-serif;
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
      font-weight: 500;
    }
    a {
      text-decoration: none;
      cursor: pointer;
    }
    button:focus, input:focus, textarea:focus, div:focus {
      outline: none;
    }
  }
  
`;

  return <GlobalDefaults />;
};

export const Desktop = props => (
  <Responsive {...props} minWidth={globalVariables.minDesktop} />
);
export const Tablet = props => (
  <Responsive
    {...props}
    minWidth={globalVariables.minTablet}
    maxWidth={globalVariables.maxTablet}
  />
);
export const Mobile = props => (
  <Responsive {...props} maxWidth={globalVariables.maxMobile} />
);
export const NotMobile = props => (
  <Responsive {...props} minWidth={globalVariables.minTablet} />
);
export const NotDesktop = props => (
  <Responsive {...props} maxWidth={globalVariables.maxTablet} />
);

export default GlobalStyles;
