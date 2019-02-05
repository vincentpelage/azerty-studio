import React, { Component } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";
import { getAncreStyles, getAncreStateBasicStyles } from "./styles";

class ButtonAncre extends Component {
  componentDidMount() {
    require("gsap/ScrollToPlugin");
  }

  handleClick = ancreId => () => {
    if (typeof window !== "undefined") {
      const top = document.getElementById(ancreId).offsetTop;
      TweenMax.to(window, 0.5, {
        scrollTo: { y: top },
        ease: "Power3.easeOut"
      });
    } else {
      const top = document.getElementById(ancreId).offsetTop;
      TweenMax.to(window, 0.5, {
        scrollTo: { y: top },
        ease: "Power3.easeOut"
      });
    }
  };

  render() {
    const { color, border, ancreId, size, margin, children } = this.props;
    const AncreStyled = styled.button`
      ${getAncreStyles};
      ${getAncreStateBasicStyles};
    `;

    return (
      <AncreStyled
        color={color}
        border={border}
        size={size}
        margin={margin}
        onClick={this.handleClick(ancreId)}
      >
        {children}
      </AncreStyled>
    );
  }
}

export default ButtonAncre;
