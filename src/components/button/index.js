import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import {
  getButtonStyles,
  getButtonStateBasicStyles,
  getButtonInvertedStyles,
  getButtonStateInvertedStyles
} from "./styles";
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

const StyledButtonInvertedLink = styled(AniLink)`
  ${getButtonInvertedStyles};
  ${getButtonStateInvertedStyles};
`;

export const ButtonInvertedLink = ({
  to,
  type,
  disabled,
  size,
  border,
  color,
  fullwidth,
  height,
  margin,
  children
}) => (
  <StyledButtonInvertedLink
    to={to}
    type={type}
    disabled={disabled}
    size={size}
    border={border}
    color={color}
    fullwidth={fullwidth}
    height={height}
    margin={margin}
    cover
    bg={theme.green}
    duration={0.8}
  >
    {children}
  </StyledButtonInvertedLink>
);

export default Button;
