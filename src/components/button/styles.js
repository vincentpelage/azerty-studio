import { css } from "styled-components";
import { darken } from "polished";
import { globalVariables } from "../globalStyle";

const getSizing = (size = "medium") => {
  switch (size) {
    case "small":
      return "12";
    case "large":
      return "16";
    case "xlarge":
      return "20";
    default:
      return "14";
  }
};

export const getButtonStyles = props => {
  let background = props.theme.green;
  let color = props.theme.white;
  let border = background;
  let cursor = "pointer";
  let width = "";
  let height = "2.5em";
  let margin = "0";
  let padding = "0";

  const size = getSizing(props.size);
  const tabletSize = size - 2;
  const mobileSize = size - 2;

  if (props.backgroundcolor) {
    background = props.theme[props.backgroundcolor];
    border = background;
  }

  if (props.color) {
    color = props.color;
  }

  if (props.border) {
    border = props.border;
  }

  if (props.disabled) {
    cursor = "default";
  }

  if (props.fullwidth) {
    width = "100%";
  }

  if (props.height) {
    height = props.height;
  }

  if (props.margin) {
    margin = props.margin;
  }

  if (props.size === "small") {
    padding = "12px 24px 11px 24px";
  }

  if (props.size === "large") {
    padding = "13px 24px 11px 24px";
  }

  return css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 2.5em;
    width: ${width};
    max-width: 100%;
    padding: ${props => (props.size ? padding : "9px 24px 11px 24px")};
    border-radius: ${globalVariables.borderRadiusButton};
    border: 2px solid ${border};
    background: ${background};
    color: ${color};
    font-family: Aqua;
    font-size: ${mobileSize}px;
    cursor: ${cursor};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    outline: none;
    z-index: 1;
    margin: ${margin};
    @media (min-width: ${globalVariables.minTablet}) {
      font-size: ${tabletSize}px;
      height: ${height};
    }
    @media (min-width: ${globalVariables.minDesktop}) {
      font-size: ${size}px;
    }
  `;
};

// Hover, Active and Focus styles for standard button
export const getButtonStateBasicStyles = props => {
  let background = props.theme.green;
  let color = props.theme.white;
  let border = background;

  if (props.backgroundcolor) {
    background = props.theme[props.backgroundcolor];
    border = background;
  }

  if (props.border) {
    border = props.border;
  }

  return css`
    &:active {
      background: ${darken(0.05, background)};
      border: 2px solid ${darken(0.05, border)};
      color: ${color};
    }
    &:hover {
      border-radius: 3px;
      background: ${darken(0.05, background)};
      border: 2px solid ${darken(0.05, border)};
      color: ${color};
    }
    &:focus {
      outline: none;
      background: ${background};
      border: 2px solid ${border};
      color: ${color};
    }
  `;
};

export const getButtonInvertedStyles = props => {
  let color = props.theme.darkGreen;
  let border = props.theme.darkGreen;
  let cursor = "pointer";
  let width = "";
  let height = "2.5em";
  let margin = "0";

  const size = getSizing(props.size);
  const tabletSize = size - 2;
  const mobileSize = size - 2;

  if (props.color) {
    color = props.theme[props.color];
  }

  if (props.border) {
    border = props.theme[props.border];
  }

  if (props.disabled) {
    cursor = "default";
  }

  if (props.fullwidth) {
    width = "100%";
  }

  if (props.height) {
    height = props.height;
  }

  if (props.margin) {
    margin = props.margin;
  }

  return css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 2.5em;
    width: ${width};
    max-width: 100%;
    padding: 12px 24px 11px 24px;
    border-radius: ${globalVariables.borderRadiusButton};
    border: 2px solid ${border};
    background: "transparent";
    color: ${color};
    font-family: Aqua;
    font-size: ${mobileSize}px;
    cursor: ${cursor};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    outline: none;
    z-index: 1;
    margin: ${margin};
    @media (min-width: ${globalVariables.minTablet}) {
      font-size: ${tabletSize}px;
      height: ${height};
    }
    @media (min-width: ${globalVariables.minDesktop}) {
      font-size: ${size}px;
    }
  `;
};

export const getButtonStateInvertedStyles = props => {
  return css`
    &:active {
      border: 2px solid ${props.theme[props.border]};
      color: ${props.theme[props.color]};
    }
    &:hover {
      border-radius: 3px;
      border: 2px solid ${props.theme[props.border]};
      color: ${props.theme[props.color]};
    }
    &:focus {
      outline: none;
      border: 2px solid ${props.theme[props.border]};
      color: ${props.theme[props.color]};
    }
  `;
};
