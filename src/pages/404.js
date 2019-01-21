import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Fight from "../img/Fight";
import Title from "../components/title";
import Spacer from "../components/spacer";
import { ButtonLink } from "../components/button";

const Container = styled.div`
  text-align: center;
`;

const Text = styled.p`
  font-size: 26px;
  font-weight: 300;
`;

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Spacer>
      <Container>
        <Title label="404" position="center" />
        <Text>Oups, cette page n'existe pas...</Text>

        <ButtonLink
          to="/offres"
          backgroundcolor="purple"
          size="large"
          margin="1rem 0"
        >
          Que la force soit avec vous !
        </ButtonLink>
        <Fight />
      </Container>
    </Spacer>
  </Layout>
);

export default NotFoundPage;
