import React from "react";
// import styled, { keyframes } from "styled-components";
import styled from "styled-components";
import { Link } from "gatsby";

import logo from "../../img/azertylogo.png";
import IconHome from "../../icons/home.svg";
// import IconResponsive from "../../icons/responsive.svg";
// import IconPaint from "../../icons/paint-brush.svg";
// import IconTarget from "../../icons/webmarketing.svg";
import IconHeart from "../../icons/heart.svg";
import IconMonitor from "../../icons/monitor.svg";
import IconEnvelope from "../../icons/envelope.svg";
import IconUser from "../../icons/user.svg";
import IconMagic from "../../icons/magic-wand.svg";
// import IconSpace from "../icons/startup.svg";
// import IconStats from "../icons/line-chart.svg";
// import IconFlask from "../icons/flask.svg";
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

// const heightSubList = keyframes`
//   from {
//     height: 0;
//   }

//   to {
//     height: auto;
//   }
// `;

// const SubList = styled.ul`
//   display: ${props => (props.isActive ? "flex" : "none")};
//   flex-direction: column;
//   background-color: ${props => props.theme.green};
//   padding: 5px;
//   margin-bottom: 10px;
//   width: 100%;
//   animation: ${heightSubList} 0.2s ease-in-out;
//   /* transition: height 0.2s ease-in-out; */
// `;

export const DesktopNavbar = class extends React.Component {
  render() {
    const isOffresPage = this.props.location.pathname.includes("/offres");
    const isExpertisesPage = this.props.location.pathname.includes(
      "/expertises"
    );

    return (
      <Nav>
        <Link to="/">
          <Logo src={logo} />
        </Link>

        <Menu>
          <List to="/" src={IconHome} label="accueil" />
          <List
            to="/notre-approche"
            src={IconMagic}
            label="notre approche"
            isActive={isExpertisesPage}
          >
            {/* <SubList isActive={isExpertisesPage}>
              <List to="/expertises/site" src={IconFlask} label="site" />
              <List to="/expertises/trafic" src={IconSpace} label="trafic" />
              <List
                to="/expertises/analyse"
                src={IconStats}
                label="analyse"
              />
            </SubList> */}
          </List>
          <List
            to="/offres"
            src={IconMonitor}
            label="offres"
            isActive={isOffresPage}
          >
            {/* <SubList isActive={isOffresPage}>
              <List
                to="/offres/petit-budget"
                src={IconResponsive}
                label="petit budget"
              />
              <List
                to="/offres/sur-mesure"
                src={IconPaint}
                label="sur mesure"
              />
              <List to="/offres/agences" src={IconTarget} label="agences" />
            </SubList> */}
          </List>

          <List to="/a-propos" src={IconUser} label="a propos" />
          <List to="/clients" src={IconHeart} label="clients" />
          <List to="/contact" src={IconEnvelope} label="contact" />
        </Menu>
      </Nav>
    );
  }
};
