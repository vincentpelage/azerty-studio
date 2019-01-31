import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { getButtonStyles, getButtonStateBasicStyles } from "./styles";
// import PagesTransitionImg from "../../img/PagesTransition.jpeg";
import { theme } from "../globalStyle";

const StyledButton = styled.button`
  ${getButtonStyles};
  ${getButtonStateBasicStyles};
`;

const Button = ({
  onClick,
  type,
  disabled,
  size,
  height,
  fullwidth,
  backgroundcolor,
  color,
  margin,
  children
}) => (
  <StyledButton
    type={type}
    disabled={disabled}
    onClick={onClick}
    size={size}
    backgroundcolor={backgroundcolor}
    color={color}
    fullwidth={fullwidth}
    height={height}
    margin={margin}
  >
    {children}
  </StyledButton>
);

const StyledButtonLink = styled(AniLink)`
  ${getButtonStyles};
  ${getButtonStateBasicStyles};
`;
// const image = `${theme.green} url(${PagesTransitionImg}) no-repeat center`;

export const ButtonLink = ({
  to,
  type,
  disabled,
  size,
  backgroundcolor,
  color,
  fullwidth,
  height,
  margin,
  children
}) => (
  <StyledButtonLink
    to={to}
    type={type}
    disabled={disabled}
    size={size}
    backgroundcolor={backgroundcolor}
    color={color}
    fullwidth={fullwidth}
    height={height}
    margin={margin}
    cover
    bg={theme.green}
    duration={0.8}
  >
    {children}
  </StyledButtonLink>
);

export default Button;
