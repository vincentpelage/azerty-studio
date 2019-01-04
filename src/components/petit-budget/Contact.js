import React from "react";
import styled from "styled-components";

import Spacer from "../spacer/index";
import SubTitle from "../subTitle";
import { theme } from "../globalStyle";
import Mobile from "../../icons/phone-call.svg";
import Mail from "../../icons/email.svg";
import { globalVariables} from "../globalStyle";
import GoogleMap from "../google-map/GoogleMap";
import Input from "../input";
import Button from "../button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const WrapperText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 2rem;
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
  background-color: ${props => props.theme.green};
  padding: 5px;
  border: 1px solid ${props => props.theme.white};
  margin-right: 1rem;
  border-radius: ${globalVariables.borderRadius};
`;

const Text = styled.p`
  strong {
    color: ${props => props.theme.darkGreen};
    font-weight: 500;
    display: block;
  }
`;

const WrapperMap = styled.div`
   flex: 0 0 50%;
   min-height: 100vh;
`;

const Container = styled.div`
  margin-top: 2rem;
`;

const Form = styled.form`
  padding: 4rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Spacer backgroundColor={theme.darkGrey} height="100vh" flex="0 0 50%">
        <SubTitle label="Contact"  />
        <Container>
          <WrapperText>
          <Icon src={Mobile} />
          <Text>
            <strong>Un modèle vous plaît et vous souhaitez en discuter ?</strong>
            02.40.40.40.40 (ligne gratuite)
          </Text>
        </WrapperText>
        <WrapperText>
          <Icon src={Mail} />
          <Text>
            <strong>Vous préférez nous envoyer un message ?</strong>
            Nous vous rappellerons
          </Text>
        </WrapperText>
        </Container>
        <Form>
          <Input placeholder='Prenom' flex="0 0 45%" />
          <Input placeholder='Nom' flex="0 0 45%" />
          <Input placeholder='Email' flex="0 0 45%" />
          <Input placeholder='Telephone' flex="0 0 45%" />
          <Input placeholder='Votre projet en quelques lignes' flex="0 0 100%" type="textarea" />
          <Button>Envoyer</Button>
        </Form>
      </Spacer>
      <WrapperMap>
        <GoogleMap />
      </WrapperMap>
    </Wrapper>
  );
};

export default Contact;
