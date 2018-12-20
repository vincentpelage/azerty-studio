import React from "react";
import { Link } from "gatsby";
import logo from "../img/azertylogo.png";

import styled from "styled-components";

const Nav = styled.nav`
  width: 50px;
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
  li {
  }
`;

const Text = styled(Link)`
  color: white;
  font-family: Aqua;
  text-transform: uppercase;
  font-size: 10px;
  padding-left: 2px;
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
          <li>
            <Text to="/">accueil</Text>
          </li>
          <li>
            <Text to="/offres">offres</Text>
          </li>
          <li>
            <Text to="/petit-budget">petit budget</Text>
          </li>
          <li>
            <Text to="/sur-mesure">sur mesure</Text>
          </li>
          <li>
            <Text to="/prototype">prototype</Text>
          </li>
          <li>
            <Text to="/expertises">expertises</Text>
          </li>
          <li>
            <Text to="/developpement-web">développement web</Text>
          </li>
          <li>
            <Text to="/webmarketing">webmarketing</Text>
          </li>
          <li>
            <Text to="/analytics">analytics</Text>
          </li>
          <li>
            <Text to="/a-propos">a propos</Text>
          </li>
          <li>
            <Text to="/contact">contact</Text>
          </li>
        </Menu>
      </Nav>
    );
  }
};

export default Navbar;
