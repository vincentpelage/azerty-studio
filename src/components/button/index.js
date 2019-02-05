import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import {
  getButtonStyles,
  getButtonStateBasicStyles,
  getButtonInvertedStyles,
  getButtonStateInvertedStyles
} from "./styles";

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
  border,
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
    border={border}
    fullwidth={fullwidth}
    height={height}
    margin={margin}
  >
    {children}
  </StyledButton>
);

const StyledButtonInverted = styled.button`
  ${getButtonInvertedStyles};
  ${getButtonStateInvertedStyles};
`;

export const ButtonInverted = ({
  onClick,
  type,
  disabled,
  size,
  height,
  fullwidth,
  color,
  border,
  margin,
  children
}) => (
  <StyledButtonInverted
    type={type}
    disabled={disabled}
    onClick={onClick}
    size={size}
    color={color}
    border={border}
    fullwidth={fullwidth}
    height={height}
    margin={margin}
  >
    {children}
  </StyledButtonInverted>
);

const StyledButtonLink = styled(Link)`
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
    duration={0.8}
  >
    {children}
  </StyledButtonLink>
);

const StyledButtonInvertedLink = styled(Link)`
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
    duration={0.8}
  >
    {children}
  </StyledButtonInvertedLink>
);

export default Button;
