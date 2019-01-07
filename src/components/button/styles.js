import { css } from "styled-components";
import { darken } from "polished";
import { globalVariables } from "../globalStyle";

const getSizing = (size = "medium") => {
  switch (size) {
    case "small":
      return "14";
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
  let cursor = "pointer";
  let width = "";
  let height = "2.5em";
  let margin = "0";
  
  const size = getSizing(props.size);
  const tabletSize = size - 2;
  const mobileSize = size - 2;

  if (props.backgroundcolor) {
    background = props.theme[props.backgroundcolor];
  }

  if (props.color) {
    color = props.color;
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
    padding: 13px 24px 11px 24px;
    border-radius: ${globalVariables.borderRadiusButton};
    border: none;
    background: ${background};
    color: ${color};
    font-family: Aqua;
    font-size: ${mobileSize}px;
    cursor: ${cursor};
    text-decoration: none;
    transition: all 200ms ease-in-out;
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

  if (props.backgroundcolor) {
    background = props.theme[props.backgroundcolor];
  }

  return css`
    &:active {
      background: ${darken(0.1, background)};
      color: ${color};
      /* border: ${darken(0.1, background)} solid 2px; */
    }
    &:hover {
      background: ${darken(0.1, background)};
      color: ${color};
      /* border: ${darken(0.1, background)} solid 2px; */
    }
    &:focus {
      outline: none;
      background: ${background};
      color: ${color};
      /* border: ${background} solid 2px; */
    }
  `;
};
