import { css } from "styled-components";
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

export const getAncreStyles = props => {
  let color = props.theme.darkGreen;
  let border = props.theme.darkGreen;
  let cursor = "pointer";
  let width = "";
  let height = "2.5em";
  let margin = "0";
  let padding = "0";

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

  if (props.size === "small") {
    padding = "13px 24px 11px 24px";
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
    border-radius: ${globalVariables.borderRadius};
    border: 2px solid ${border};
    background: transparent;
    color: ${color};
    font-family: Aqua;
    font-size: ${mobileSize}px;
    cursor: ${cursor};
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    outline: none;
    z-index: 1;
    margin: ${margin};
    line-height: 0;
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
export const getAncreStateBasicStyles = props => {
  return css`
    &:active {
      border: 2px solid ${props.theme[props.border]};
      color: ${props.theme[props.color]};
    }
    &:hover {
      border-radius: 50px;
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
