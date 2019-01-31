import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Spacer from "../components/spacer";
import Title from "../components/title";
import { globalVariables } from "../components/globalStyle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5rem;
  justify-content: center;
`;

const Item = styled.div`
  flex: 0 0 25%;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: ${globalVariables.minDesktop}) {
    flex: 0 0 33.33%;
  }
  @media (max-width: ${globalVariables.maxTablet}) {
    flex: 0 0 50%;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
  }
`;

const Link = styled.a`
  overflow: hidden;
  text-decoration: none;
  &:hover {
    & > div:nth-child(1) > div {
      transform: scale(1.1);
    }
    & > div:nth-child(2)::before {
      width: 100%;
    }
    p {
      color: ${props => props.theme.white};
    }
  }
`;

const WrapperCrop = styled.div`
  height: 360px;
  border-top-left-radius: ${globalVariables.borderRadius};
  border-top-right-radius: ${globalVariables.borderRadius};
  overflow: hidden;
`;

const WrapperImg = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-top-left-radius: ${globalVariables.borderRadius};
  border-top-right-radius: ${globalVariables.borderRadius};
  opacity: 0.9;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  @media (max-width: ${globalVariables.maxTablet}) {
    height: 200px;
  }
`;

const Wrappertext = styled.div`
  background-color: ${props => props.theme.white};
  border-bottom-left-radius: ${globalVariables.borderRadius};
  border-bottom-right-radius: ${globalVariables.borderRadius};
  padding: 1rem;
  position: relative;
  z-index: -1;
  transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${props => props.theme.purple};
    border-bottom-left-radius: ${globalVariables.borderRadius};
    border-bottom-right-radius: ${globalVariables.borderRadius};
    transition: all 0.2s linear 0ms;
    z-index: -1;
  }
`;

const Name = styled.p`
  color: ${props => props.theme.purple};
  font-weight: 500;
  font-size: 18px;
  z-index: 2;
`;

const Type = styled.p`
  color: ${props => props.theme.black};
  z-index: 2;
`;

const Clients = ({ location, data }) => {
  return (
    <Layout location={location}>
      <Spacer>
        <Title
          label={
            data.prismicClientsBodyTitrePrincipal.primary.titre_principal.text
          }
          position="center"
        />
        <Wrapper>
          {data.prismicClientsBodyTitrePrincipal.items.map((item, index) => (
            <Item key={index}>
              <Link
                href={item.lien_client.url}
                rel="noopener noreferrer"
                target={item.lien_client.target}
              >
                <WrapperCrop>
                  <WrapperImg img={item.photo_client.url} />
                </WrapperCrop>

                <Wrappertext>
                  <Name>{item.nom_client.text}</Name>
                  <Type>{item.description_client.text}</Type>
                </Wrappertext>
              </Link>
            </Item>
          ))}
        </Wrapper>
      </Spacer>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    prismicClientsBodyTitrePrincipal {
      primary {
        titre_principal {
          text
        }
      }
      items {
        photo_client {
          alt
          copyright
          url
        }
        nom_client {
          text
        }
        description_client {
          text
        }
        lien_client {
          url
          target
        }
      }
    }
  }
`;

export default Clients;
