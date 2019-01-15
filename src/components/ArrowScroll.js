import React from "react";
import styled, { keyframes } from "styled-components";
import { TweenMax } from "gsap";
import "gsap/ScrollToPlugin";

const upAndDown = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(15%);
  }

  100% {
    transform: translateY(0);
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  position: absolute;
  bottom: 5%;
  left: ${props => (props.positionLeft ? props.positionLeft : "0")};
  transform: ${props =>
    props.positionLeft === "50%" ? "translateX(-50%)" : "none"};

  &:hover {
    .arrow {
      animation: ${upAndDown} 0.8s ease-in-out infinite;
    }
  }
`;

const ArrowStyled = styled.svg`
  width: 40px;
  height: 40px;
  path {
    fill: ${props => props.fill};
  }
`;

const ArrowScroll = ({ fill, positionLeft, ancreId }) => {
  const handleClick = ancreId => () => {
    console.log(document.getElementById(ancreId));
    const top = document.getElementById(ancreId).offsetTop;
    TweenMax.to(window, 0.5, {
      scrollTo: { y: top },
      ease: "Power3.easeOut"
    });
  };

  return (
    <Button positionLeft={positionLeft} onClick={handleClick(ancreId)}>
      <ArrowStyled viewBox="0 0 490.4 490.4" fill={fill}>
        <g>
          <path
            d="M490.4,245.2C490.4,110,380.4,0,245.2,0S0,110,0,245.2s110,245.2,245.2,245.2S490.4,380.4,490.4,245.2z M24.5,245.2
      c0-121.7,99-220.7,220.7-220.7s220.7,99,220.7,220.7s-99,220.7-220.7,220.7S24.5,366.9,24.5,245.2z"
          />
          <path
            className="arrow"
            d="M253.9,360.4l68.9-68.9c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-48,48V138.7c0-6.8-5.5-12.3-12.3-12.3
      s-12.3,5.5-12.3,12.3v183.4l-48-48c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l68.9,68.9c2.4,2.4,5.5,3.6,8.7,3.6
      S251.5,362.8,253.9,360.4z"
          />
        </g>
      </ArrowStyled>
    </Button>
  );
};

export default ArrowScroll;
