import React from "react";
import styled from "styled-components";
import TransitionLink from "gatsby-plugin-transition-link";

import logo from "../../img/azertylogo.png";
import IconHome from "../../icons/home.svg";
import IconResponsive from "../../icons/responsive.svg";
import IconPaint from "../../icons/paint-brush.svg";
import IconTarget from "../../icons/webmarketing.svg";
import IconHeart from "../../icons/heart.svg";
import IconMonitor from "../../icons/monitor.svg";
import IconEnvelope from "../../icons/envelope.svg";
import IconUser from "../../icons/user.svg";
import IconMagic from "../../icons/magic-wand.svg";
import List from "./List";

const Nav = styled.nav`
  width: 60px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background-color: ${props => props.theme.darkGreen};
  border-right: solid 1px ${props => props.theme.white};
  z-index: 1;
`;

const Logo = styled.img`
  position: absolute;
  top: 10px;
  width: 30px;
  padding: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.green};
  padding: ${props => (props.isActive ? "5px" : "0px")};
  margin-bottom: ${props => (props.isActive ? "10px" : "0px")};
  width: 100%;
  height: ${props => (props.isActive ? "auto" : "0px")};
  opacity: ${props => (props.isActive ? "1" : "0")};
  transition: all 0.5s ease;
`;

export const DesktopNavbar = class extends React.Component {
  state = {
    isOffresHover: false
  };

  handleEnter = () => {
    this.setState({ isOffresHover: true });
  };

  handleLeave = () => {
    this.setState({ isOffresHover: false });
  };

  render() {
    const isOffresPage = this.props.location.pathname.includes("/offres");
    const isNotreApprochePage = this.props.location.pathname.includes(
      "/notre-approche"
    );

    return (
      <Nav onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <TransitionLink
          to="/"
          exit={{
            length: 0.6,
            zIndex: 2
          }}
          entry={{
            length: 0.6,
            zIndex: 0
          }}
        >
          <Logo src={logo} />
        </TransitionLink>

        <Menu>
          <List to="/" src={IconHome} label="accueil" />
          <List
            to="/notre-approche"
            src={IconMagic}
            label="notre approche"
            isActive={isNotreApprochePage}
          />

          <List
            to="/offres"
            src={IconMonitor}
            label="nos offres"
            isActive={isOffresPage}
          />
          <SubList isActive={this.state.isOffresHover || isOffresPage}>
            <List
              to="/offres/petit-budget"
              src={IconResponsive}
              label="petit budget"
            />
            <List to="/offres/sur-mesure" src={IconPaint} label="sur mesure" />
            <List to="/offres/agences" src={IconTarget} label="agences" />
          </SubList>

          <List to="/a-propos" src={IconUser} label="a propos" />
          <List to="/clients" src={IconHeart} label="nos clients" />
          <List to="/contact" src={IconEnvelope} label="contact" />
        </Menu>
      </Nav>
    );
  }
};
