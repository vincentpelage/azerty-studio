import { createGlobalStyle } from "styled-components";
import AquaTTF from "../fonts/aqua.ttf";
import AquaEOT from "../fonts/aqua.eot";
import AquaWOFF from "../fonts/aqua.woff";
import AquaWOFF2 from "../fonts/aqua.woff2";

const GlobalStyles = createGlobalStyle`
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
  }
  h1 {
    font-family: 'Aqua', sans-serif;
  }
`;

export const globalVariables = {
  borderRadius: "3px",
  borderRadiusButton: "50px",
  borderWidth: "2px",
  maxMobile: "767px",
  minTablet: "768px",
  maxTablet: "1023px",
  minDesktop: "1024px",
  medDesktop: "1240px"
};

export const theme = {
  green: "#00BEC5",
  darkGreen: "#00B6BE",
  white: "#FFF",
  whiteOpacity: "rgba(255, 255, 255, 0.65)",
  lightPink: "#FEBCBE",
  pink: "#EE8E9E",
  purple: "#6772E5",
  black: "#282B2B",
  grey: "#F2EFEF"
};

export default GlobalStyles;
