import React from "react";
import styled from "styled-components";

import { globalVariables } from "../globalStyle";

const WrapperInput = styled.div`
  position: relative;
  margin-right: 1rem;
  margin-top: 3.5rem;
  z-index: 2;
  height: ${props =>
    (props.isFocus && props.isTextarea) ||
    (props.isTextarea && props.value.length > 0)
      ? "100px"
      : "40px"};
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1) 0ms,
    color 0.3s cubic-bezier(0.8, 0, 0.2, 1) 0ms;
  &::before {
    content: " ";
    display: block;
    top: ${props => (props.isFocus ? "-6px" : "-3px")};
    left: 0;
    width: 100%;
    height: 2px;
    position: absolute;
    background: ${props =>
      props.isFocus ? "hsla(0,0%,96%,1)" : "hsla(0,0%,96%,.5)"};
    transition: width 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0ms,
      top 0.35s cubic-bezier(0.19, 1, 0.22, 1),
      bottom 0.35s cubic-bezier(0.19, 1, 0.22, 1);
  }
  &::after {
    content: " ";
    display: block;
    bottom: ${props => (props.isFocus ? "-6px" : "-3px")};
    left: 0;
    width: 100%;
    height: 2px;
    position: absolute;
    background: ${props =>
      props.isFocus ? "hsla(0,0%,96%,1)" : "hsla(0,0%,96%,.5)"};
    transition: width 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0ms,
      top 0.35s cubic-bezier(0.19, 1, 0.22, 1),
      bottom 0.35s cubic-bezier(0.19, 1, 0.22, 1);
  }
  @media (max-width: ${globalVariables.medDesktop}) {
    margin-top: 2.5rem;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    margin-right: 0;
  }
`;

const InputStyled = styled.input`
  margin: 0;
  width: 100%;
  border: none;
  padding: 0 0.9375rem;
  height: 100%;
  letter-spacing: 1px;
  background: hsla(0, 0%, 96%, 1);
  font-weight: normal;
  font-size: 16px;

  @media (max-width: ${globalVariables.medDesktop}) {
    font-size: 14px;
  }
`;

const TextareaStyled = styled.textarea`
  margin: 0;
  width: 100%;
  height: ${props =>
    props.isFocus || props.value.length > 0 ? "100px" : "100%"};
  border: none;
  padding: 0.5rem 0.9375rem;
  letter-spacing: 1px;
  background: hsla(0, 0%, 96%, 1);
  font-weight: normal;
  font-size: 16px;
  @media (max-width: ${globalVariables.medDesktop}) {
    font-size: 14px;
  }
`;

const Placeholder = styled.div`
  position: relative;
  text-transform: uppercase;
  top: ${props => (props.isFocus || props.isValue ? "-25px" : "11px")};
  position: absolute;
  left: 0.9375rem;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1) 0ms,
    color 0.3s cubic-bezier(0.8, 0, 0.2, 1) 0ms;
  transform-origin: left center;
  pointer-events: none;
  font-family: "Aqua";
  font-size: ${props =>
    props.isFocus || props.isValue ? ".8rem" : ".9375rem"};
  @media (max-width: ${globalVariables.maxMobile}) {
    font-size: ${props => (props.isFocus || props.isValue ? "10px" : "12px")};
  }
`;

const Sup = styled.sup`
  position: absolute;
  top: -5px;
  right: -6px;
`;

class Input extends React.Component {
  state = {
    isFocus: false
  };

  onFocus = () => {
    this.setState({ isFocus: true });
  };

  onBlur = () => {
    this.setState({ isFocus: false });
  };

  render() {
    const { placeholder, handleInput, name, value, required } = this.props;
    const isTextarea = this.props.type === "textarea";

    return (
      <WrapperInput
        isFocus={this.state.isFocus}
        isTextarea={isTextarea}
        value={value}
      >
        <Placeholder isFocus={this.state.isFocus} isValue={value.length > 0}>
          {placeholder}
          {required ? <Sup>*</Sup> : null}
        </Placeholder>
        {isTextarea ? (
          <TextareaStyled
            onChange={handleInput(name)}
            name={name}
            value={value}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            isFocus={this.state.isFocus}
          />
        ) : (
          <InputStyled
            onChange={handleInput(name)}
            name={name}
            value={value}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            required={required}
          />
        )}
      </WrapperInput>
    );
  }
}

export default Input;
