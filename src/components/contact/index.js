import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import Parser from "html-react-parser";

import Spacer from "../spacer/index";
import SubTitle from "../subTitle";
import Title from "../title";
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
  position: relative;
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
  }
`;

const WrapperTextarea = styled.div`
  flex: 0 0 100%;
  margin-bottom: 1rem;
  position: relative;
  @media (max-width: ${globalVariables.maxMobile}) {
    margin-bottom: 0;
  }
`;

const ErrorText = styled.span`
  background-color: ${props => props.theme.darkPink};
  color: ${props => props.theme.white};
  border-radius: ${globalVariables.borderRadius};
  padding: 5px 6px 2px 6px;
  width: -webkit-max-content; /* Chrome */
  width: -moz-max-content; /* Firefox/Gecko */
  width: intrinsic; /* Safari/WebKit utilisent un nom non-standard */
  position: absolute;
  bottom: -15px;
  font-size: 12px;
  left: 5px;
  transition: all 0.4s ease-in-out;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    left: 10%;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    top: -2px;
    transform: rotate(45deg);
    background-color: ${props => props.theme.darkPink};
  }
  &.text-enter {
    opacity: 0;
  }

  &.text-enter-active {
    opacity: 1;
  }

  &.text-exit-active {
    opacity: 0;
  }
`;

const AdressContainer = styled.div`
  background-color: ${props => props.theme.darkGreen};
  color: ${props => props.theme.white};
  text-align: center;
  padding: 2rem 0;
`;

const ErrorMessage = ({ condition, children }) => {
  return (
    <CSSTransition in={condition} timeout={200} classNames="text" unmountOnExit>
      <ErrorText>{children}</ErrorText>
    </CSSTransition>
  );
};

class Contact extends React.Component {
  state = {
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    projet: "",
    prenomHasBeenFocused: false,
    nomHasBeenFocused: false,
    emailHasBeenFocused: false,
    telephoneHasBeenFocused: false,
    pprojetHasBeenFocused: false
  };

  handleInput = name => e => {
    const property = [name] + "HasBeenFocused";
    this.setState({ [name]: e.target.value, [property]: true });
  };

  render() {
    const { data, subtitle, isTablet } = this.props;
    const {
      prenom,
      nom,
      email,
      telephone,
      projet,
      prenomHasBeenFocused,
      nomHasBeenFocused,
      emailHasBeenFocused,
      telephoneHasBeenFocused,
      projetHasBeenFocused
    } = this.state;

    const validateEmailFormat = value => {
      const regexEmail = /\S+@\S+\.\S+/;
      return !regexEmail.test(value);
    };
    const validateTextFormat = value => {
      const hasNumber = /\d/g;
      return hasNumber.test(value);
    };
    const validateNumberFormat = value => {
      return !Number(value);
    };

    const isEnabled = ["prenom", "nom", "email", "telephone", "projet"].every(
      key => {
        return this.state[key].length > 0;
      }
    );

    return (
      <Wrapper id="contact">
        <Spacer
          backgroundColor={this.props.backgroundColor}
          height="100vh"
          flex="0 0 50%"
        >
          {subtitle ? (
            <SubTitle label={data.primary.titre_contact.text} />
          ) : (
            <Title label={data.primary.titre_contact.text} />
          )}

          <Container>
            <WrapperText>
              <Icon src={Mobile} />
              <Text>
                <strong>{data.primary.titre_accroche_1.text}</strong>
                {data.primary.contenu_accroche_1.text}
              </Text>
            </WrapperText>

            <WrapperText>
              <Icon src={Mail} />
              <Text>
                <strong>{data.primary.titre_accroche_2.text}</strong>
                {data.primary.contenu_accroche_2.text}
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
                required
              />

              <ErrorMessage
                condition={prenomHasBeenFocused && prenom.length === 0}
              >
                Ce champ est requis
              </ErrorMessage>
              <ErrorMessage
                condition={validateTextFormat(prenom) && prenom.length !== 0}
              >
                Veuillez renseigner un prénom valide
              </ErrorMessage>
            </WrapperInput>

            <WrapperInput>
              <Input
                handleInput={this.handleInput}
                value={nom}
                name="nom"
                placeholder="Nom"
                required
              />
              <ErrorMessage condition={nomHasBeenFocused && nom.length === 0}>
                Ce champ est requis
              </ErrorMessage>
              <ErrorMessage
                condition={validateTextFormat(nom) && nom.length !== 0}
              >
                Veuillez renseigner un nom valide
              </ErrorMessage>
            </WrapperInput>
            <WrapperInput>
              <Input
                handleInput={this.handleInput}
                value={email}
                name="email"
                placeholder="Email"
                required
              />
              <ErrorMessage
                condition={emailHasBeenFocused && email.length === 0}
              >
                Ce champ est requis
              </ErrorMessage>
              <ErrorMessage
                condition={validateEmailFormat(email) && email.length !== 0}
              >
                Veuillez renseigner un format d'email valide
              </ErrorMessage>
            </WrapperInput>
            <WrapperInput>
              <Input
                handleInput={this.handleInput}
                value={telephone}
                name="telephone"
                placeholder="Telephone"
                required
              />
              <ErrorMessage
                condition={telephoneHasBeenFocused && telephone.length === 0}
              >
                Ce champ est requis
              </ErrorMessage>
              <ErrorMessage
                condition={
                  validateNumberFormat(telephone) && telephone.length !== 0
                }
              >
                Veuillez renseigner un numéro de téléphone valide
              </ErrorMessage>
            </WrapperInput>
            <WrapperTextarea>
              <Input
                handleInput={this.handleInput}
                value={projet}
                name="projet"
                placeholder="Votre projet en quelques lignes"
                type="textarea"
                required
              />
              <ErrorMessage
                condition={projetHasBeenFocused && projet.length === 0}
              >
                Ce champ est requis
              </ErrorMessage>
            </WrapperTextarea>

            <Button
              type="submit"
              margin="2rem 0 0 0"
              backgroundcolor="darkPink"
              disabled={!isEnabled}
            >
              {data.primary.bouton_contact.text}
            </Button>
          </Form>
          <TypeWriter />
        </Spacer>
        {!isTablet ? (
          <WrapperMap>
            <GoogleMap />
          </WrapperMap>
        ) : (
          <AdressContainer>{Parser(data.primary.adresse.html)}</AdressContainer>
        )}
      </Wrapper>
    );
  }
}

export default Contact;
