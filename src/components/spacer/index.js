import React from "react";
import styled from "styled-components";
import { globalVariables } from "../globalStyle";

const SpacerStyled = styled.section`
  position: relative;
  padding: 7rem;
  flex: ${props => (props.flex ? props.flex : null)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  min-height: ${props => (props.height ? props.height : "100vh")};
  z-index: 0;
  @media (max-width: ${globalVariables.medDesktop}) {
    padding: 5rem 4rem 3rem 4rem;
  }
  @media (max-width: ${globalVariables.maxTablet}) {
    padding: 6rem 2rem;
    min-height: auto;
  }
  /* Only tablet Portrait */
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    min-height: ${props => (props.fullHeight ? "100vh" : "auto")};
  }
`;

const Spacer = ({
  backgroundColor,
  height,
  flex,
  fullHeight,
  id,
  children
}) => (
  <SpacerStyled
    backgroundColor={backgroundColor}
    height={height}
    flex={flex}
    fullHeight={fullHeight}
    id={id}
  >
    {children}
  </SpacerStyled>
);

export default Spacer;
