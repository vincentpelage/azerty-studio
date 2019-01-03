import React from "react";
import styled from "styled-components";
import { globalVariables } from "../globalStyle";

const SpacerStyled = styled.div`
  position: relative;
  padding: 5rem 4rem;
  flex: ${props => (props.flex ? props.flex : null)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  min-height: ${props => (props.height ? props.height : "auto")};
  @media (max-width: ${globalVariables.maxTablet}) {
    padding: 6rem 2rem;
  }
`;

const Spacer = ({ backgroundColor, height, flex, children }) => (
  <SpacerStyled backgroundColor={backgroundColor} height={height} flex={flex}>
    {children}
  </SpacerStyled>
);

export default Spacer;
