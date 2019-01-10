import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Spacer from "../components/spacer";
import Title from "../components/title";
import Client1 from "../img/client1.jpg";
import Client2 from "../img/client2.jpg";
import Client4 from "../img/client4.jpg";
import Client7 from "../img/client7.jpg";
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
  &:hover .testimony {
    opacity: 1;
    border-width: 10px;
  }
`;

const WrapperImg = styled.div`
  height: 300px;
  overflow: hidden;
  position: relative;
  border-top-left-radius: ${globalVariables.borderRadius};
  border-top-right-radius: ${globalVariables.borderRadius};
  opacity: 0.9;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  @media (max-width: ${globalVariables.maxTablet}) {
    height: 200px;
  }
`;

const Testimony = styled.div`
  background-color: ${props => props.theme.whiteOpacityClients};
  color: ${props => props.theme.black};
  border: 0px solid ${props => props.theme.purple};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0ms,
    border 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0ms;
`;

const Wrappertext = styled.div`
  background-color: ${props => props.theme.white};
  border-bottom-left-radius: ${globalVariables.borderRadius};
  border-bottom-right-radius: ${globalVariables.borderRadius};
  padding: 1rem;
`;

const Name = styled.p`
  color: ${props => props.theme.purple};
  font-weight: 500;
  font-size: 18px;
`;

const Type = styled.p`
  color: ${props => props.theme.black};
  /* font-weight: 500; */
`;

const Clients = ({ location }) => {
  return (
    <Layout location={location}>
      <Spacer>
        <Title label="Nos clients" position="center" />
        <Wrapper>
          <Item>
            <Link
              href="https://workuper.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WrapperImg img={Client1}>
                <Testimony className="testimony">
                  " ut nihil posset accedere, moriendi autem . Quam ob rem vita
                  quidem talis fuit vel fortuna vel glori "
                </Testimony>
              </WrapperImg>
              <Wrappertext>
                <Name>WorkUp</Name>
                <Type>Application Web - Emploi</Type>
              </Wrappertext>
            </Link>
          </Item>
          <Item>
            <Link
              href="https://limitless-wave-12645.herokuapp.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WrapperImg img={Client2}>
                <Testimony className="testimony">
                  " ut nihil posset accedere, moriendi autem . Quam ob rem vita
                  quidem talis fuit vel fortuna vel glori "
                </Testimony>
              </WrapperImg>
              <Wrappertext>
                <Name>Battlerite Pro</Name>
                <Type>Application web - Jeu vidéo</Type>
              </Wrappertext>
            </Link>
          </Item>

          <Item>
            <Link
              href="http://cacdmparis.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WrapperImg img={Client4}>
                <Testimony className="testimony">
                  " ut nihil posset accedere, moriendi autem . Quam ob rem vita
                  quidem talis fuit vel fortuna vel glori "
                </Testimony>
              </WrapperImg>
              <Wrappertext>
                <Name>Cité des Métiers Paris</Name>
                <Type>Une page - Emploi</Type>
              </Wrappertext>
            </Link>
          </Item>

          <Item>
            <Link
              href="http://signore.be/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WrapperImg img={Client7}>
                <Testimony className="testimony">
                  " ut nihil posset accedere, moriendi autem . Quam ob rem vita
                  quidem talis fuit vel fortuna vel glori "
                </Testimony>
              </WrapperImg>
              <Wrappertext>
                <Name>Portfolio Bertrand</Name>
                <Type>Une page - Motion Design</Type>
              </Wrappertext>
            </Link>
          </Item>
        </Wrapper>
      </Spacer>
    </Layout>
  );
};

export default Clients;
