import React from "react";
import styled from "styled-components";

import { globalVariables } from "../globalStyle";

const WrapperInput = styled.div`
  position: relative;
  margin-right: 1rem;
  margin-top: 2.5rem;
  z-index: 2;
  height: ${props => (props.isFocus && props.isTextarea ? "100px" : "40px")};
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
`;

const InputStyled = styled.input`
  margin: 0;
  width: 100%;
  border: none;
  padding: 0 0.9375rem;
  height: 100%;
  letter-spacing: 1px;
  /* font-size: 1.25rem; */
  background: hsla(0, 0%, 96%, 1);
`;

const TextareaStyled = styled.textarea`
  margin: 0;
  width: 100%;
  height: ${props => (props.isFocus && props.isTextarea ? "100px" : "100%")};
  border: none;
  padding: 0.5rem 0.9375rem;
  letter-spacing: 1px;
  /* font-size: 1.25rem; */
  background: hsla(0, 0%, 96%, 1);
`;

const Placeholder = styled.div`
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
    const { placeholder, handleInput, name, value } = this.props;
    const isTextarea = this.props.type === "textarea";

    return (
      <WrapperInput isFocus={this.state.isFocus} isTextarea={isTextarea}>
        <Placeholder isFocus={this.state.isFocus} isValue={value.length > 0}>
          {placeholder}
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
          />
        )}
      </WrapperInput>
    );
  }
}

export default Input;
