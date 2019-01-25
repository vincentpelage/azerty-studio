import React from "react";
import styled from "styled-components";
import TransitionLink from "gatsby-plugin-transition-link";

import { getButtonStyles, getButtonStateBasicStyles } from "./styles";

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

const StyledButtonLink = styled(TransitionLink)`
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
    exit={{
      length: 0.6,
      zIndex: 2
    }}
    entry={{
      length: 0.6,
      zIndex: 0
    }}
  >
    {children}
  </StyledButtonLink>
);

export default Button;
