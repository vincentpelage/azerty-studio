import React from "react";
import styled from "styled-components";

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
  position: relative;
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
  li {
    margin-bottom: 5px;
    transition: display 0.2s ease-in-out;
  }
`;

const Navbar = class extends React.Component {
  /* componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  } */

  render() {
    return (
      <Nav>
        <Logo src={logo} />
        <Menu>
          <List to="/" src={IconHome} label="accueil" />
          <List to="/offres" src={IconMonitor} label="offres" />
          <List to="/petit-budget" src={IconResponsive} label="petit budget" />
          <List to="/sur-mesure" src={IconPencil} label="sur mesure" />
          <List to="/prototype" src={IconResponsive} label="proto" />
          <List to="/expertises" src={IconSettings} label="expertises" />
          <List to="/developpement-web" src={IconCoding} label="code" />
          <List to="/trafic" src={IconHome} label="trafic" />
          <List to="/analyse" src={IconFeature} label="analyse" />
          <List to="/a-propos" src={IconUser} label="a propos" />
          <List to="/clients" src={IconHeart} label="clients" />
          <List to="/contact" src={IconEnvelope} label="contact" />
        </Menu>
      </Nav>
    );
  }
};

export default Navbar;
