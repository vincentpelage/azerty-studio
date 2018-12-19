import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/azertylogo.png";

import styled from "styled-components";

const Nav = styled.nav`
  width: 50px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.darkGreen};
  border-right: solid 1px rgba(255, 255, 255, 0.5);
`;

const Logo = styled.img`
  padding: 10px;
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
        <Link to="/">accueil</Link>
        <Link to="/offres">offres</Link>
        <Link to="/petit-budget">petit budget</Link>
        <Link to="/sur-mesure">sur mesure</Link>
        <Link to="/prototype">prototype</Link>
        <Link to="/expertises">expertises</Link>
        <Link to="/developpement-web">développement web</Link>
        <Link to="/webmarketing">webmarketing</Link>
        <Link to="/analytics">analytics</Link>
        <Link to="/a-propos">a propos</Link>
        <Link to="/contact">contact</Link>
      </Nav>
    );
  }
};

export default Navbar;
