import React from "react";
import styled, { keyframes, css } from "styled-components";

import Layout from "../components/Layout";
import { ButtonLink } from "../components/button";
import Deco from "../img/deco2.svg";
import SpaceShip from "../img/spaceship.svg";
import { globalVariables } from "../components/globalStyle";

function createCSSAnimationDelay() {
  let styles = "";
  const delay = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];
  for (let i = 0; i < 6; i += 1) {
    styles += `
    & span:nth-of-type(${i + 1}) {
      animation-delay: ${delay[i]};
    }`;
  }

  return css`
    ${styles}
  `;
}

const wobbleVertical = keyframes`
16.65% {
  transform: translateY(8px);
}
33.33% {
  transform: translateY(-6px);
}
49.95% {
  transform: translateY(4px);
}
66.6% {
  transform: translateY(-2px);
}
83.25% {
  transform: translateY(1px);
}
83.25% {
  transform: translateY(0);
}
`;

const animationLetter = css`
  animation: ${wobbleVertical} 1s ease-in-out;
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 2rem;
    display: block;
    width: 200px;
    height: 200px;
    z-index: 2;
    background-image: url(${SpaceShip});
    background-size: cover;
    @media (max-width: ${globalVariables.maxTablet}) {
      width: 150px;
      height: 150px;
    }
  }
`;

const Decoration = styled.img`
  width: 1100px;
  position: absolute;
  z-index: 0;
  @media (max-width: ${globalVariables.maxTablet}) {
    width: 625px;
    max-width: none;
  }
`;

const Logo = styled.h1`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  z-index: 1;
  ${props => (props.isLogoHover ? createCSSAnimationDelay() : null)}

  span {
    ${props => (props.isLogoHover ? animationLetter : null)}
  }
`;

const Letter = styled.span`
  border: 2px solid ${props => props.theme.whiteOpacityLetter};
  text-transform: uppercase;
  font-size: 70px;
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 17px;
  border-radius: 3px;
  transition: margin-top 0.1s ease-in-out;
  z-index: 1;
  cursor: default;
  transform: perspective(1px) translateZ(0);

  &:not(:last-child) {
    margin-right: 5px;
  }
  &:nth-child(odd) {
    margin-top: 8px;
  }

  @media (max-width: ${globalVariables.maxTablet}) {
    font-size: 50px;
    height: 50px;
    width: 50px;
    padding-top: 13px;
  }
`;

const Baseline = styled.p`
  font-size: 24px;
  text-align: center;
  width: 40%;
  line-height: 1.2;
  font-weight: 300;
  margin-bottom: 1rem;
  z-index: 1;
  @media (max-width: ${globalVariables.maxTablet}) {
    font-size: 18px;
    width: 90%;
  }
`;

class Home extends React.Component {
  state = {
    isLogoHover: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLogoHover: false });
    }, 2000);
  }

  onEnter = () => {
    this.setState({ isLogoHover: true });
  };

  onLeave = () => {
    this.setState({ isLogoHover: false });
  };

  render() {
    const { data, location } = this.props;

    return (
      <Layout location={location}>
        <Wrapper>
          <Decoration src={Deco} />
          <Logo
            onMouseEnter={this.onEnter}
            onMouseLeave={this.onLeave}
            isLogoHover={this.state.isLogoHover}
          >
            <Letter>a</Letter>
            <Letter>z</Letter>
            <Letter>e</Letter>
            <Letter>r</Letter>
            <Letter>t</Letter>
            <Letter>y</Letter>
          </Logo>
          <Baseline>
            Nous créons de jolis sites web modernes, rapides, sécurisés et
            accessibles à tous
          </Baseline>

          <ButtonLink
            to="/offres"
            backgroundcolor="lightPink"
            size="large"
            margin="1rem 0 0 0"
          >
            Voir nos offres
          </ButtonLink>
        </Wrapper>
      </Layout>
    );
  }
}

// const Home = ({ data, location }) => {
//   return (
//     <Layout location={location}>
//       <Wrapper>
//         <Decoration src={Deco} />
//         <Logo>
//           <Letter>a</Letter>
//           <Letter>z</Letter>
//           <Letter>e</Letter>
//           <Letter>r</Letter>
//           <Letter>t</Letter>
//           <Letter>y</Letter>
//         </Logo>
//         <Baseline>{data.markdownRemark.frontmatter.baseline}</Baseline>

//         <ButtonLink
//           to="/offres"
//           backgroundcolor="lightPink"
//           size="large"
//           margin="1rem 0 0 0"
//         >
//           Voir nos offres
//         </ButtonLink>
//       </Wrapper>
//     </Layout>
//   );
// };

export const pageQuery = graphql`
  query Home {
    prismicAccueilBodyMain {
      primary {
        titre_presentation {
          text
        }
        contenu_bouton {
          text
        }
      }
    }
  }
`;

export default Home;
