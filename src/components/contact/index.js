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
    projet: "",
    touched: {
      prenom: {
        longueur: false,
        format: false
      },
      nom: {
        longueur: false,
        format: false
      },
      email: {
        longueur: false,
        format: false
      },
      telephone: {
        longueur: false,
        format: false
      },
      projet: {
        longueur: false,
        format: false
      }
    },
    isFocus: false
  };

  handleInput = name => e => {
    this.setState({ [name]: e.target.value });
  };

  onFocus = () => {
    this.setState({ isFocus: true });
  };

  onBlur = field => evt => {
    const someProperty = this.state.touched[field];
    someProperty.longueur = true;
    someProperty.format = true;
    this.setState({ someProperty, isFocus: false });
  };

  render() {
    const { data } = this.props;
    const { prenom, nom, email, telephone, projet, isFocus } = this.state;

    const shouldMarkErrorLength = field => {
      const hasError = errors[field].longueur;
      const shouldShow = this.state.touched[field].longueur;

      return hasError ? shouldShow : false;
    };

    const shouldMarkErrorFormat = field => {
      const hasError = errors[field].format;
      const shouldShow = this.state.touched[field].format;

      return hasError ? shouldShow : false;
    };

    function validate(prenom, nom, email, telephone, projet) {
      const regexEmail = /\S+@\S+\.\S+/;
      const hasNumber = /\d/g;
      return {
        prenom: {
          longueur: prenom.trim().length === 0,
          format: hasNumber.test(prenom)
        },
        nom: {
          longueur: nom.trim().length === 0,
          format: hasNumber.test(nom)
        },
        email: {
          longueur: email.trim().length === 0,
          format: !regexEmail.test(email)
        },
        telephone: {
          longueur: telephone.trim().length === 0,
          format: !Number(telephone)
        },
        projet: {
          longueur: projet.trim().length === 0,
          format: hasNumber.test(projet)
        }
      };
    }
    const errors = validate(prenom, nom, email, telephone, projet);
    const isEnabled = Object.keys(errors).every(
      x => errors[x].longueur === false && errors[x].format === false
    );

    const style = {
      color: "red",
      display: "block",
      marginTop: "10px"
    };

    return (
      <Wrapper id="contact">
        <Spacer
          backgroundColor={this.props.backgroundColor}
          height="100vh"
          flex="0 0 50%"
        >
          <SubTitle label={data.primary.titre_contact.text} />
          <Container>
            <WrapperText>
              <Icon src={Mobile} />
              <Text>
                <strong>{data.primary.titre_accroche_1.text}</strong>
                {data.primary.contenu_accroche_1.text}
              </Text>
            </WrapperText>
          </Container>
          <Container>
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
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                isFocus={isFocus}
              />
              <span style={style}>
                {shouldMarkErrorLength("prenom") ? "Ce champs est requis" : ""}
              </span>
              <span style={style}>
                {shouldMarkErrorFormat("prenom") &&
                this.state.prenom.length !== 0
                  ? "Veuillez s'il vous plait renseigner un prénom valide"
                  : ""}
              </span>
            </WrapperInput>

            <WrapperInput>
              <Input
                handleInput={this.handleInput}
                value={nom}
                name="nom"
                placeholder="Nom"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                isFocus={isFocus}
              />
              <span style={style}>
                {shouldMarkErrorLength("nom") ? "Ce champs est requis" : ""}
              </span>
              <span style={style}>
                {shouldMarkErrorFormat("nom") && this.state.nom.length !== 0
                  ? "Veuillez s'il vous plait renseigner un nom valide"
                  : ""}
              </span>
            </WrapperInput>
            <WrapperInput>
              <Input
                handleInput={this.handleInput}
                value={email}
                name="email"
                placeholder="Email"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                isFocus={isFocus}
              />
              <span style={style}>
                {shouldMarkErrorLength("email") ? "Ce champs est requis" : ""}
              </span>
              <span style={style}>
                {shouldMarkErrorFormat("email") && this.state.email.length !== 0
                  ? "Veuillez s'il vous plait renseigner un format d'e-mail valide"
                  : ""}
              </span>
            </WrapperInput>
            <WrapperInput>
              <Input
                handleInput={this.handleInput}
                value={telephone}
                name="telephone"
                placeholder="Telephone"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                isFocus={isFocus}
              />
              <span style={style}>
                {shouldMarkErrorLength("telephone")
                  ? "Ce champs est requis"
                  : ""}
              </span>
              <span style={style}>
                {shouldMarkErrorFormat("telephone") &&
                this.state.telephone.length !== 0
                  ? "Veuillez s'il vous plait renseigner un numéro de téléphone valide"
                  : ""}
              </span>
            </WrapperInput>
            <WrapperTextarea>
              <Input
                handleInput={this.handleInput}
                value={projet}
                name="projet"
                placeholder="Votre projet en quelques lignes"
                type="textarea"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                isFocus={isFocus}
              />
              <span style={style}>
                {shouldMarkErrorLength("projet") ? "Ce champs est requis" : ""}
              </span>
              <span style={style}>
                {shouldMarkErrorFormat("projet") &&
                this.state.projet.length !== 0
                  ? "Veuillez s'il vous plait renseigner une phrase qui ne contient pas que des chiffres"
                  : ""}
              </span>
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
        <WrapperMap>
          <GoogleMap />
        </WrapperMap>
      </Wrapper>
    );
  }
}

export default Contact;
