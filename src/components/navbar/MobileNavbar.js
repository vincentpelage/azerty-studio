import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import logo from "../../img/azertylogo.png";
import IconHome from "../../icons/home.svg";
import IconPaint from "../../icons/paint-brush.svg";
import IconTarget from "../../icons/webmarketing.svg";
import IconHeart from "../../icons/heart.svg";
import IconMonitor from "../../icons/monitor.svg";
import IconEnvelope from "../../icons/envelope.svg";
import IconUser from "../../icons/user.svg";
import IconResponsive from "../../icons/responsive.svg";
import IconMagic from "../../icons/magic-wand.svg";
import IconSpace from "../../icons/startup.svg";
import IconStats from "../../icons/line-chart.svg";
import IconFlask from "../../icons/flask.svg";

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
  z-index: 2;
  display: flex;
  flex-direction: column;
  transition: top 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  top: ${props => (props.isBurgerActive ? "0" : "-100vh")};
  background-color: ${props => props.theme.darkGreen};
  justify-content: center;
  padding-left: 40px;
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
    const isHome = this.props.location === "/";

    return (
      <Nav>
        <Logo src={logo} isHome={isHome} />
        <WrapperBurger onClick={this.toggleMenu}>
          <BurgerBar isBurgerActive={isBurgerActive} isHome={isHome} />
          <BurgerBar isBurgerActive={isBurgerActive} isHome={isHome} />
          <BurgerBar isBurgerActive={isBurgerActive} isHome={isHome} />
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
                <LinkStyled to="/offres/petit-budget" activeClassName="active">
                  <Icon src={IconResponsive} />
                  <Text>Petit budget</Text>
                </LinkStyled>
              </Item>
              <Item>
                <LinkStyled to="/offres/sur-mesure" activeClassName="active">
                  <Icon src={IconPaint} />
                  <Text>Sur mesure</Text>
                </LinkStyled>
              </Item>
              <Item>
                <LinkStyled to="/offres/agences" activeClassName="active">
                  <Icon src={IconTarget} />
                  <Text>Agences</Text>
                </LinkStyled>
              </Item>
            </SubItem>
          </Item>

          <Item>
            <LinkStyled to="/expertises" activeClassName="active">
              <Icon src={IconMagic} />
              <Text>Expertises</Text>
            </LinkStyled>
            <SubItem>
              <Item>
                <LinkStyled to="/expertises/site" activeClassName="active">
                  <Icon src={IconFlask} />
                  <Text>Site internet</Text>
                </LinkStyled>
              </Item>
              <Item>
                <LinkStyled to="/expertises/trafic" activeClassName="active">
                  <Icon src={IconSpace} />
                  <Text>Trafic</Text>
                </LinkStyled>
              </Item>
              <Item>
                <LinkStyled to="/expertises/analyse" activeClassName="active">
                  <Icon src={IconStats} />
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
