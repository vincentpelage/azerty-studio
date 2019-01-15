import React from "react";
import styled from "styled-components";

import Spacer from "../spacer";
import SubTitle from "../subTitle";
import { theme, globalVariables } from "../globalStyle";
import Modele1 from "../../img/modele1.png";
import ArrowScroll from "../ArrowScroll";

const Filter = styled.div`
  margin-top: 3rem;
`;
const Button = styled.button`
  border: none;
  background-color: ${props =>
    props.isActive ? props.theme.purple : props.theme.darkGreen};
  color: ${props => props.theme.white};
  font-family: "Aqua", sans-serif;
  padding: 0.5rem 1.5rem;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:first-child {
    border-top-left-radius: ${globalVariables.borderRadius};
    border-bottom-left-radius: ${globalVariables.borderRadius};
  }
  &:last-child {
    border-top-right-radius: ${globalVariables.borderRadius};
    border-bottom-right-radius: ${globalVariables.borderRadius};
  }
  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.white};
  }
  &:hover {
    background-color: ${props => props.theme.purple};
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    padding: 0.5rem 0.7rem;
  }
`;

const WrapperModele = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 3rem;
  justify-content: center;
`;

const Item = styled.div`
  flex: 0 0 25%;
  padding: 1rem 2rem 1rem 0;
  text-align: center;
  margin-bottom: 1rem;
  @media (max-width: ${globalVariables.medDesktop}) {
    flex: 0 0 33%;
  }
  @media (max-width: ${globalVariables.maxTablet}) {
    flex: 0 0 50%;
  }
  @media (max-width: ${globalVariables.maxMobile}) {
    flex: 0 0 100%;
  }
`;

const Link = styled.a`
  &:hover p {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.purple};
  }
  &:hover .modele-img {
    border: 10px solid ${props => props.theme.purple};
    background-position: bottom center;
  }
`;

const Img = styled.div`
  height: 400px;
  overflow: hidden;
  position: relative;
  border-radius: ${globalVariables.borderRadius};
  opacity: 0.9;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  border: 0px solid ${props => props.theme.purple};
  transition: border 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0ms,
    background-position 2s cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  @media (max-width: ${globalVariables.maxTablet}) {
    height: 200px;
  }
`;

const Name = styled.p`
  color: ${props => props.theme.purple};
  font-weight: 300;
  border: 1px solid #6772e5;
  display: inline-block;
  border-radius: 3rem;
  padding: 4px 20px;
  margin-bottom: 2rem;
  transition: all 0.2s ease-in-out;
  font-size: 14px;
`;

class Modeles extends React.Component {
  state = {
    category: 0
  };

  handleClick = number => () => {
    this.setState({ category: number });
  };

  render() {
    // const data = this.props.data.body1[this.state.category].primary;

    return (
      <Spacer backgroundColor={theme.darkGrey} height="100vh" id="modeles">
        <SubTitle label="Modeles" />
        <Filter>
          <Button
            onClick={this.handleClick(0)}
            isActive={this.state.category === 0}
          >
            Une page
          </Button>
          <Button
            onClick={this.handleClick(1)}
            isActive={this.state.category === 1}
          >
            Multi-pages
          </Button>
          <Button
            onClick={this.handleClick(2)}
            isActive={this.state.category === 2}
          >
            E-commerce
          </Button>
        </Filter>
        <WrapperModele>
          {/* {Object.keys(data).map((modele, index) => (
            <Item key={index}>
              <Link>
                <Name>{data[modele].alt}</Name>
                <Img img={data[modele].url} className="modele-img" />
              </Link>
            </Item>
          ))} */}
          <Item>
            <Link>
              <Name>Modele 1</Name>
              <Img img={Modele1} className="modele-img" />
            </Link>
          </Item>
          <Item>
            <Link>
              <Name>Modele 1</Name>
              <Img img={Modele1} className="modele-img" />
            </Link>
          </Item>
          <Item>
            <Link>
              <Name>Modele 1</Name>
              <Img img={Modele1} className="modele-img" />
            </Link>
          </Item>
          <Item>
            <Link>
              <Name>Modele 1</Name>
              <Img img={Modele1} className="modele-img" />
            </Link>
          </Item>
        </WrapperModele>
        <ArrowScroll ancreId="services" />
      </Spacer>
    );
  }
}

export default Modeles;
