import React from "react";
import styled from "styled-components";
import { globalVariables } from "../globalStyle";

const SpacerStyled = styled.section`
  position: relative;
  padding: 5rem 4rem 3rem 4rem;
  flex: ${props => (props.flex ? props.flex : null)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  min-height: ${props => (props.height ? props.height : "auto")};
  @media (max-width: ${globalVariables.maxTablet}) {
    padding: 6rem 2rem;
  }
  @media (min-width: ${globalVariables.medDesktop}) {
    /* max-height: 800px; */
    min-height: ${props => (props.fullHeight ? "100vh" : "auto")};
  }
  /* Only tablet Portrait */
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    min-height: ${props => (props.fullHeight ? "100vh" : "auto")};
  }
`;

const Spacer = ({ backgroundColor, height, flex, fullHeight, children }) => (
  <SpacerStyled
    backgroundColor={backgroundColor}
    height={height}
    flex={flex}
    fullHeight={fullHeight}
  >
    {children}
  </SpacerStyled>
);

export default Spacer;
