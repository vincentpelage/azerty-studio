import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import logo from "../../img/azertylogo.png";
import IconHome from "../../icons/home.svg";
import IconCoding from "../../icons/coding.svg";
import IconFeature from "../../icons/feature.svg";
import IconHeart from "../../icons/heart.svg";
import IconMonitor from "../../icons/monitor.svg";
import IconEnvelope from "../../icons/envelope.svg";
import IconUser from "../../icons/user.svg";
import IconPencil from "../../icons/pencil-case.svg";
import IconResponsive from "../../icons/responsive.svg";
import IconSettings from "../../icons/settings.svg";

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
  z-index: 3;
  width: 40px;
`;

const BurgerBar = styled.span`
  display: block;
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.8);
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
      props.isBurgerActive ? "transparent" : "rgba(255, 255, 255, 0.8)"};
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
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  transition: top 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  top: ${props => (props.isBurgerActive ? "0" : "-100vh")};
  background-color: ${props => props.theme.darkGreen};
  justify-content: center;
  padding-left: 40px;
  /* & > li {
    margin-bottom: 1rem;
  } */
`;

const Item = styled.li``;
const SubItem = styled.ul`
  padding-left: 3rem;
  & p {
    font-size: 16px;
  }
`;

const LinkStyled = styled(Link)`
  height: 50px;
  display: block;
  display: flex;
  flex-direction: row;
  align-items: center;
  &.active,
  &:active,
  &:focus {
    color: ${props => props.theme.white};
    p {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 3px;
        height: 6px;
        width: 100%;
        background-color: ${props => props.theme.lightPink};
      }
    }
  }
`;

const Icon = styled.img`
  width: 23px;
  margin-right: 10px;
`;

const Text = styled.p`
  color: white;
  font-family: Aqua;
  font-size: 18px;
  padding-left: 2px;
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

    return (
      <Nav>
        <Logo src={logo} />
        <WrapperBurger onClick={this.toggleMenu}>
          <BurgerBar isBurgerActive={isBurgerActive} />
          <BurgerBar isBurgerActive={isBurgerActive} />
          <BurgerBar isBurgerActive={isBurgerActive} />
        </WrapperBurger>

        <Menu isBurgerActive={isBurgerActive}>
          <Item>
            <LinkStyled to="/" activeClassName="active">
              <Icon src={IconHome} />
              <Text>Accueil</Text>
            </LinkStyled>
          </Item>
          <Item>
            <LinkStyled to="/offres" activeClassName="active">
              <Icon src={IconMonitor} />
              <Text>Offres</Text>
            </LinkStyled>
            <SubItem>
              <Item>
                <LinkStyled to="/petit-budget" activeClassName="active">
                  <Icon src={IconResponsive} />
                  <Text>Petit budget</Text>
                </LinkStyled>
              </Item>
              <Item>
                <LinkStyled to="/sur-mesure" activeClassName="active">
                  <Icon src={IconPencil} />
                  <Text>Sur mesure</Text>
                </LinkStyled>
              </Item>
              <Item>
                <LinkStyled to="/prototype" activeClassName="active">
                  <Icon src={IconResponsive} />
                  <Text>Prototype</Text>
                </LinkStyled>
              </Item>
            </SubItem>
          </Item>

          <Item>
            <LinkStyled to="/expertises" activeClassName="active">
              <Icon src={IconSettings} />
              <Text>Expertises</Text>
            </LinkStyled>
            <SubItem>
              <Item>
                <LinkStyled to="/site-internet" activeClassName="active">
                  <Icon src={IconCoding} />
                  <Text>Site internet</Text>
                </LinkStyled>
              </Item>
              <Item>
                <LinkStyled to="/trafic" activeClassName="active">
                  <Icon src={IconFeature} />
                  <Text>Trafic</Text>
                </LinkStyled>
              </Item>
              <Item>
                <LinkStyled to="/analyse" activeClassName="active">
                  <Icon src={IconFeature} />
                  <Text>Analyse</Text>
                </LinkStyled>
              </Item>
            </SubItem>
          </Item>

          <Item>
            <LinkStyled to="/a-propos" activeClassName="active">
              <Icon src={IconUser} />
              <Text>A Propos</Text>
            </LinkStyled>
          </Item>
          <Item>
            <LinkStyled to="/clients" activeClassName="active">
              <Icon src={IconHeart} />
              <Text>Clients</Text>
            </LinkStyled>
          </Item>
          <Item>
            <LinkStyled to="/contact" activeClassName="active">
              <Icon src={IconEnvelope} />
              <Text>Contact</Text>
            </LinkStyled>
          </Item>
        </Menu>
      </Nav>
    );
  }
}