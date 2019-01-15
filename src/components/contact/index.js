import React from "react";
import styled from "styled-components";

import Spacer from "../spacer/index";
import SubTitle from "../subTitle";
import Mobile from "../../icons/phone-call.svg";
import Mail from "../../icons/email.svg";
import { globalVariables } from "../globalStyle";
import GoogleMap from "../google-map/GoogleMap";
import Input from "../input";
import Button from "../button";
import TypeWriter from "../../img/TypeWriter";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex-direction: column;
  }
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 2rem;
  @media (max-width: ${globalVariables.maxTablet}) {
    padding-top: 1rem;
    align-items: flex-start;
  }
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
  height: 100vh;
  @media (max-width: ${globalVariables.maxTablet}) {
    height: 70vh;
  }
`;

const Container = styled.div`
  margin-top: 2rem;
`;

const Form = styled.form`
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 2;
`;

const WrapperInput = styled.div`
  flex: 0 0 50%;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
  }
`;

const WrapperTextarea = styled.div`
  flex: 0 0 100%;
  margin-bottom: 1rem;
  @media (max-width: ${globalVariables.maxMobile}) {
    margin-bottom: 0;
  }
`;

class Contact extends React.Component {
  state = {
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    projet: ""
  };

  handleInput = name => e => {
    this.setState({ [name]: e.target.value });
  };

  render() {
    const { prenom, nom, email, telephone, projet } = this.state;
    return (
      <Wrapper id="contact">
        <Spacer
          backgroundColor={this.props.backgroundColor}
          height="100vh"
          flex="0 0 50%"
        >
          <SubTitle label="Contact" />
          <Container>
            <WrapperText>
              <Icon src={Mobile} />
              <Text>
                <strong>{this.props.textMobile}</strong>
                02.40.40.40.40 (ligne gratuite)
              </Text>
            </WrapperText>
          </Container>
          <Container>
            <WrapperText>
              <Icon src={Mail} />
              <Text>
                <strong>Vous préférez nous envoyer un message&nbsp;?</strong>
                Nous vous rappellerons
              </Text>
            </WrapperText>
          </Container>
          <Form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <WrapperInput>
              <Input
                handleInput={this.handleInput}
                value={prenom}
                name="prenom"
                placeholder="Prenom"
              />
            </WrapperInput>
            <WrapperInput>
              <Input
                handleInput={this.handleInput}
                value={nom}
                name="nom"
                placeholder="Nom"
              />
            </WrapperInput>
            <WrapperInput>
              <Input
                handleInput={this.handleInput}
                value={email}
                name="email"
                placeholder="Email"
              />
            </WrapperInput>
            <WrapperInput>
              <Input
                handleInput={this.handleInput}
                value={telephone}
                name="telephone"
                placeholder="Telephone"
              />
            </WrapperInput>
            <WrapperTextarea>
              <Input
                handleInput={this.handleInput}
                value={projet}
                name="projet"
                placeholder="Votre projet en quelques lignes"
                type="textarea"
              />
            </WrapperTextarea>

            <Button type="submit" margin="2rem 0 0 0" backgroundcolor="pink">
              Envoyer
            </Button>
          </Form>
          <TypeWriter />
        </Spacer>
        <WrapperMap>
          <GoogleMap />
        </WrapperMap>
      </Wrapper>
    );
  }
}

export default Contact;
