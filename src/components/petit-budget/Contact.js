import React from "react";
import styled from "styled-components";

import Spacer from "../spacer/index";
import SubTitle from "../subTitle";
import { theme } from "../globalStyle";
import Mobile from "../../icons/phone-call.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const WrapperText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
  background-color: ${props => props.theme.darkGreen};
  padding: 5px;
  border: 1px solid ${props => props.theme.white};
  margin-right: 1rem;
`;

const Text = styled.p`
  color: ${props => props.theme.white};
  strong {
    color: ${props => props.theme.white};
    font-weight: 700;
    display: block;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <Spacer backgroundColor={theme.green} height="100vh" flex="0 0 50%">
        <SubTitle label="Contact" color="white" backgroundColor="purple" />
        <WrapperText>
          <Icon src={Mobile} />
          <Text>
            Un modèle vous plaît et vous souhaitez en discuter ?{" "}
            <strong>02.40.40.40.40 (ligne gratuite)</strong>
          </Text>
        </WrapperText>
      </Spacer>
      <Spacer backgroundColor={theme.darkGrey} height="100vh" flex="0 0 50%">
        <SubTitle label="Contact" color="white" backgroundColor="purple" />
      </Spacer>
    </Wrapper>
  );
};

export default Contact;
