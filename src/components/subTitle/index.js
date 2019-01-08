import React from "react";
import styled from "styled-components";

import { globalVariables } from "../globalStyle";

const Wrapper = styled.div`
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`;

const StyledSubTitle = styled.p`
  color: ${props =>
    props.color ? props.theme[props.color] : props.theme.darkGreen};
  font-size: ${props => (props.fontSize ? props.fontSize : "24px")};
  font-family: "Aqua";
  display: inline;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -13px;
    left: ${props => (props.textAlign === "center" ? "50%" : "1px")};
    transform: ${props =>
      props.textAlign === "center" ? "translateX(-50%)" : "none"};
    width: 50px;
    height: 6px;
    border-radius: 8px;
    background-color: ${props =>
      props.backgroundColor
        ? props.theme[props.backgroundColor]
        : props.theme.darkGreen};
  }
  @media (max-width: ${globalVariables.maxTablet}) {
    font-size: 18px;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    font-size: 18px;
  }
`;

const SubTitle = ({ label, textAlign, color, backgroundColor, fontSize }) => (
  <Wrapper textAlign={textAlign}>
    <StyledSubTitle
      textAlign={textAlign}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
    >
      {label}
    </StyledSubTitle>
  </Wrapper>
);

export default SubTitle;
