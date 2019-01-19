import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { globalVariables } from "../globalStyle";
import { bounceHorizontal } from "../animations/index";

const Item = styled.li`
  flex: ${props => (props.isActive ? "1 0 auto" : "1 0 50px")};
  /* margin-top: ${props => (props.isActive ? "10px" : "0")}; */
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: display 0.2s ease-in-out;
  min-height: 50px;
  position: relative;
  .text-enter {
    opacity: 0;
  }
  .text-enter-active {
    opacity: 1;
  }

  .text-exit-active {
    opacity: 0;
  }
`;

const LinkStyled = styled(Link)`
  &.active img {
    opacity: 1;
  }
`;

const Icon = styled.img`
  width: 23px;
  opacity: 0.4;
  transition: all 0.8s linear;
`;

const Text = styled.p`
  /* color: white; */
  font-family: Aqua;
  text-transform: uppercase;
  font-size: 9px;
  padding: 3px 6px 2px 6px;
  transition: all 0.5s linear;
  position: absolute;
  left: 65px;
  top: 15px;
  width: max-content;
  background-color: ${props => props.theme.white};
  border-radius: ${globalVariables.borderRadius};
  animation: ${bounceHorizontal} 1s ease-in-out;
  /* position: relative; */
  &::before {
    content: "";
    position: absolute;
    left: -2px;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    background-color: ${props => props.theme.white};
  }
`;

class List extends Component {
  state = {
    isHover: false
  };

  onEnter = () => {
    this.setState({ isHover: true });
  };

  onLeave = () => {
    this.setState({ isHover: false });
  };

  render() {
    const { to, src, label, children } = this.props;
    const { isHover } = this.state;

    return (
      <Item onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>
        <LinkStyled to={to} activeClassName="active">
          <Icon src={src} />
        </LinkStyled>
        <CSSTransition
          in={isHover}
          timeout={1000}
          classNames="text"
          unmountOnExit
        >
          <Text>{label}</Text>
        </CSSTransition>

        {children}
      </Item>
    );
  }
}

export default List;
