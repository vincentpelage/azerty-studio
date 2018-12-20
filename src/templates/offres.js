import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { theme } from "../components/globalStyle";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const WrapperLeft = styled.div`
  flex-basis: 50%;
  background-color: ${theme.grey};
`;

const WrapperRight = styled.div`
  flex-basis: 50%;
`;

const WrapperLeftContent = styled.div`
  margin-top: 30%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 90px 0;
`;

const CardContent = styled.div``;

const CardContentTitle = styled.h2`
  color: ${props => {
    switch (props.type) {
      case "bloc1":
        return theme.purple;
        break;
      case "bloc2":
        return theme.darkGreen;
        break;
      default:
        return theme.lightPink;
    }
  }};
  font-size: 30px;
`;

const CardContentText = styled.p`
  font-size: 20px;
`;

const Offres = ({ data }) => {
  data = data.markdownRemark.frontmatter.WrapperLeft;
  return (
    <Layout>
      <WrapperContainer>
        <WrapperLeft>
          <h1>offres</h1>
          <WrapperLeftContent>
            {Object.keys(data).map(elem => {
              return (
                <CardContent key={elem}>
                  <CardContentTitle type={elem}>
                    {data[elem].title}
                  </CardContentTitle>
                  <CardContentText>{data[elem].content}</CardContentText>
                </CardContent>
              );
            })}
          </WrapperLeftContent>
        </WrapperLeft>
        <WrapperRight>
          <p>IMAGE</p>
          <ul>
            <li>Choix parmi 10 modèles de site</li>
            <li>Beau et Moderne</li>
            <li>Rapide et sécurisé</li>
            <li>Une interface de suivi simplifiée</li>
            <li>Adapté sur tous les écrans</li>
            <li>Facile à éditer</li>
            <li>Optimisé pour être visible sur Google</li>
          </ul>
          <button>en savoir plus</button>
        </WrapperRight>
      </WrapperContainer>
    </Layout>
  );
};

export const OffresQuery = graphql`
  query Offres($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        WrapperLeft {
          bloc1 {
            title
            content
          }
          bloc2 {
            title
            content
          }
          bloc3 {
            title
            content
          }
        }
      }
    }
  }
`;

export default Offres;
