import React from "react";

import Spacer from "../spacer/index";
import SubTitle from "../subTitle/index";
import styled from "styled-components";
import Button from "../button";
import { globalVariables } from "../globalStyle";

const WrapperColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2rem;
`;

const Column = styled.div`
  flex: 0 0 350px;
  text-align: center;
  padding: 1rem;
`;

const Card = styled.div`
  margin-bottom: 2rem;
`;

const CardTitle = styled.div`
  background-color: ${props => props.theme.purple};
  color: ${props => props.theme.white};
  font-family: "Aqua";
  font-size: 18px;
  padding: 1rem 2rem;
  border-top-right-radius: ${globalVariables.borderRadius};
  border-top-left-radius: ${globalVariables.borderRadius};
  text-align: center;
  p {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  span {
    background-color: ${props => props.theme.green};
    padding: 4px 8px;
    border-radius: ${globalVariables.borderRadius};
  }
`;

const CardBody = styled.div`
  background-color: ${props => props.theme.white};
  padding: 1rem 2rem;
  border-bottom-right-radius: ${globalVariables.borderRadius};
  border-bottom-left-radius: ${globalVariables.borderRadius};
  min-height: 450px;
`;

const List = styled.ul`
  font-size: 14px;
`;

const Item = styled.li`
  margin-bottom: 1.5rem;
  strong {
    font-weight: 700;
  }
`;

const Prix = () => {
  return (
    <Spacer height="100vh">
      <SubTitle label="Prix" textAlign="center" />
      <WrapperColumns>
        <Column>
          <Card>
            <CardTitle>
              <p>Une page</p>
              <span>850 Euros</span>
            </CardTitle>
            <CardBody>
              <List>
                <Item>
                  <strong>Le choix parmi 5 modèles de site</strong>
                </Item>
                <Item>Adapté sur tous les écrans</Item>
                <Item>Interface simple pour modifier vos contenus</Item>
                <Item>
                  Interface simple de suivi des performances de votre site
                </Item>
                <Item>
                  Optimisé pour le référencement sur Google (SEO friendly)
                </Item>
              </List>
            </CardBody>
          </Card>
          <Button backgroundcolor="purple">Voir les modeles</Button>
        </Column>
        <Column>
          <Card>
            <CardTitle>
              <p>Multi-pages</p>
              <span>1 200 Euros</span>
            </CardTitle>
            <CardBody>
              <List>
                <Item>
                  <strong>Jusqu'à 15 pages</strong>
                </Item>
                <Item>
                  <strong>Le choix parmi 5 modèles de site</strong>
                </Item>
                <Item>Adapté sur tous les écrans</Item>
                <Item>Interface simple pour modifier vos contenus</Item>
                <Item>
                  Interface simple de suivi des performances de votre site
                </Item>
                <Item>
                  Optimisé pour le référencement sur Google (SEO friendly)
                </Item>
              </List>
            </CardBody>
          </Card>
          <Button backgroundcolor="purple">Voir les modeles</Button>
        </Column>
        <Column>
          <Card>
            <CardTitle>
              <p>E-commerce</p>
              <span>1 500 Euros</span>
            </CardTitle>
            <CardBody>
              <List>
                <Item>
                  <strong>Boutique en ligne</strong>
                </Item>
                <Item>
                  <strong>Système de paiement</strong>
                </Item>
                <Item>
                  <strong>Jusqu'à 30 pages</strong>
                </Item>
                <Item>
                  <strong>Le choix parmi 5 modèles de site</strong>
                </Item>
                <Item>Adapté sur tous les écrans</Item>
                <Item>Interface simple pour modifier vos contenus</Item>
                <Item>
                  Interface simple de suivi des performances de votre site
                </Item>
                <Item>
                  Optimisé pour le référencement sur Google (SEO friendly)
                </Item>
              </List>
            </CardBody>
          </Card>
          <Button backgroundcolor="purple">Voir les modeles</Button>
        </Column>
      </WrapperColumns>
    </Spacer>
  );
};

export default Prix;
