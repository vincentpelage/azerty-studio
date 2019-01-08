import React from "react";
import styled from "styled-components";

import { globalVariables } from "../globalStyle";

const StyledTitle = styled.h1`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  z-index: 1;
`;

const Letter = styled.span`
  border: 2px solid ${props => props.theme.darkGreen};
  background-color: ${props => props.theme.darkGreen};
  color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.white};
  text-transform: uppercase;
  font-size: 30px;
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 7px;
  border-radius: 3px;
  transition: margin-top 0.1s ease-in-out;
  z-index: 1;
  &:not(:last-child) {
    margin-right: 5px;
  }

  @media (max-width: ${globalVariables.maxTablet}) {
    font-size: 23px;
    height: 30px;
    width: 30px;
    padding-top: 7px;
    &:not(:last-child) {
      margin-right: 1px;
    }
  }
`;

const Space = styled.span`
  width: 1rem;
`;

const Title = ({ label }) => (
  <StyledTitle>
    {label
      .split("")
      .map((letter, index) =>
        letter === " " ? (
          <Space key={index}>{letter}</Space>
        ) : (
          <Letter key={index}>{letter}</Letter>
        )
      )}
  </StyledTitle>
);

export default Title;
