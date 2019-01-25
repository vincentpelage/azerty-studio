import React, { Component } from "react";
import styled from "styled-components";
import TransitionLink from "gatsby-plugin-transition-link";

import logo from "../../img/azertylogo.png";
import { globalVariables } from "../globalStyle";

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  position: absolute;
  top: 10px;
  width: 30px;
  padding: 0;
  left: 10px;
  z-index: 1;
`;

const WrapperBurger = styled.a`
  cursor: pointer;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 4;
  width: 40px;
`;

const BurgerBar = styled.span`
  display: block;
  width: 100%;
  height: 4px;
  background-color: ${props =>
    props.isHome || props.isBurgerActive
      ? props.theme.whiteNavOpacity
      : props.theme.darkGreen};
  border-radius: 4px;
  margin: 8px 0;
  transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  &:nth-child(1) {
    transform: ${props =>
      props.isBurgerActive
        ? "rotate(-405deg) translate(-10px,7px)"
        : "#rotate(0deg) translate(0px,0px)"};
  }
  &:nth-child(2) {
    background-color: ${props =>
      props.isBurgerActive
        ? "transparent"
        : props.isHome
        ? props.theme.whiteNavOpacity
        : props.theme.darkGreen};
  }
  &:nth-child(3) {
    transform: ${props =>
      props.isBurgerActive
        ? "rotate(405deg) translate(-10px,-7px)"
        : "#rotate(0deg) translate(0px,0px)"};
  }
`;

const Menu = styled.ul`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 3;
  display: flex;
  flex-direction: column;
  transition: top 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  top: ${props => (props.isBurgerActive ? "0" : "-100vh")};
  background-color: ${props => props.theme.darkGreen};
  justify-content: center;
  align-items: center;
`;

const Item = styled.li``;
const SubItem = styled.ul`
  & p {
    font-family: "Roboto";
  }
`;

const LinkStyled = styled(TransitionLink)`
  height: 50px;
  display: block;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &.active,
  &:active,
  &:focus {
    color: ${props => props.theme.white};
    p {
      background-color: ${props => props.theme.purple};
      padding: 2px 8px 0px 8px;
      border-radius: ${globalVariables.borderRadius};
    }
  }
`;

const Text = styled.p`
  color: white;
  font-family: Aqua;
  font-size: 18px;
  display: inline-block;
`;

export class MobileNavbar extends Component {
  state = {
    isBurgerActive: false
  };

  toggleMenu = () => {
    this.setState({ isBurgerActive: !this.state.isBurgerActive });
  };

  render() {
    const { isBurgerActive } = this.state;
    const isHome = this.props.location.pathname === "/";
    console.log(isBurgerActive);
    return (
      <Nav>
        <WrapperBurger onClick={this.toggleMenu}>
          <BurgerBar isBurgerActive={isBurgerActive} isHome={isHome} />
          <BurgerBar isBurgerActive={isBurgerActive} isHome={isHome} />
          <BurgerBar isBurgerActive={isBurgerActive} isHome={isHome} />
        </WrapperBurger>

        <Menu isBurgerActive={isBurgerActive}>
          <TransitionLink
            to="/"
            exit={{
              length: 1,
              zIndex: 2
            }}
            entry={{
              length: 1,
              zIndex: 0
            }}
          >
            <Logo src={logo} isHome={isHome} color="darkGreen" />
          </TransitionLink>
          <Item>
            <LinkStyled
              to="/"
              exit={{
                length: 1,
                zIndex: 2
              }}
              entry={{
                length: 1,
                zIndex: 0
              }}
              activeClassName="active"
            >
              <Text>Accueil</Text>
            </LinkStyled>
          </Item>
          <Item>
            <LinkStyled
              to="/notre-approche"
              exit={{
                length: 1,
                zIndex: 2
              }}
              entry={{
                length: 1,
                zIndex: 0
              }}
              activeClassName="active"
            >
              <Text>Notre Approche</Text>
            </LinkStyled>
          </Item>
          <Item>
            <LinkStyled
              to="/offres"
              exit={{
                length: 1,
                zIndex: 2
              }}
              entry={{
                length: 1,
                zIndex: 0
              }}
              activeClassName="active"
            >
              <Text>Nos Offres</Text>
            </LinkStyled>
            <SubItem>
              <Item>
                <LinkStyled
                  to="/offres/petit-budget"
                  exit={{
                    length: 1,
                    zIndex: 2
                  }}
                  entry={{
                    length: 1,
                    zIndex: 0
                  }}
                  activeClassName="active"
                >
                  <Text>Petit budget</Text>
                </LinkStyled>
              </Item>
              <Item>
                <LinkStyled
                  to="/offres/sur-mesure"
                  exit={{
                    length: 1,
                    zIndex: 2
                  }}
                  entry={{
                    length: 1,
                    zIndex: 0
                  }}
                  activeClassName="active"
                >
                  <Text>Sur mesure</Text>
                </LinkStyled>
              </Item>
              <Item>
                <LinkStyled
                  to="/offres/agences"
                  exit={{
                    length: 1,
                    zIndex: 2
                  }}
                  entry={{
                    length: 1,
                    zIndex: 0
                  }}
                  activeClassName="active"
                >
                  <Text>Agences</Text>
                </LinkStyled>
              </Item>
            </SubItem>
          </Item>

          <Item>
            <LinkStyled
              to="/a-propos"
              exit={{
                length: 1,
                zIndex: 2
              }}
              entry={{
                length: 1,
                zIndex: 0
              }}
              activeClassName="active"
            >
              <Text>A Propos</Text>
            </LinkStyled>
          </Item>
          <Item>
            <LinkStyled
              to="/clients"
              exit={{
                length: 1,
                zIndex: 2
              }}
              entry={{
                length: 1,
                zIndex: 0
              }}
              activeClassName="active"
            >
              <Text>Nos clients</Text>
            </LinkStyled>
          </Item>
          <Item>
            <LinkStyled
              to="/contact"
              exit={{
                length: 1,
                zIndex: 2
              }}
              entry={{
                length: 1,
                zIndex: 0
              }}
              activeClassName="active"
            >
              <Text>Contact</Text>
            </LinkStyled>
          </Item>
        </Menu>
      </Nav>
    );
  }
}
