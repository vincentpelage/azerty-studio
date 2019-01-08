import React from "react";
import styled, { keyframes } from "styled-components";

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
import List from "./List";

const Nav = styled.nav`
  width: 60px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background-color: ${props => props.theme.darkGreen};
  border-right: solid 1px rgba(255, 255, 255, 0.5);
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

const heightSubList = keyframes`
  from {
    height: 0;
  }

  to {
    height: auto;
  }
`;

const SubList = styled.ul`
  display: ${props => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  background-color: ${props => props.theme.green};
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  animation: ${heightSubList} 0.2s ease-in-out;
  /* transition: height 0.2s ease-in-out; */
`;

export const DesktopNavbar = class extends React.Component {
  render() {
    const isOffresPage =
      this.props.location.pathname === "/offres" ||
      this.props.location.pathname === "/petit-budget" ||
      this.props.location.pathname === "/sur-mesure" ||
      this.props.location.pathname === "/prototype";
    const isExpertisesPage =
      this.props.location.pathname === "/expertises" ||
      this.props.location.pathname === "/site-internet" ||
      this.props.location.pathname === "/trafic" ||
      this.props.location.pathname === "/analyse";

    return (
      <Nav>
        <Logo src={logo} />
        <Menu>
          <List to="/" src={IconHome} label="accueil" />
          <List
            to="/offres"
            src={IconMonitor}
            label="offres"
            isActive={isOffresPage}
          >
            <SubList isActive={isOffresPage}>
              <List
                to="/petit-budget"
                src={IconResponsive}
                label="petit budget"
              />
              <List to="/sur-mesure" src={IconPencil} label="sur mesure" />
              <List to="/prototype" src={IconResponsive} label="proto" />
            </SubList>
          </List>
          <List
            to="/expertises"
            src={IconSettings}
            label="expertises"
            isActive={isExpertisesPage}
          />
          <SubList isActive={isExpertisesPage}>
            <List to="/site-internet" src={IconCoding} label="site" />
            <List to="/trafic" src={IconHome} label="trafic" />
            <List to="/analyse" src={IconFeature} label="analyse" />
          </SubList>
          <List to="/a-propos" src={IconUser} label="a propos" />
          <List to="/clients" src={IconHeart} label="clients" />
          <List to="/contact" src={IconEnvelope} label="contact" />
        </Menu>
      </Nav>
    );
  }
};
