import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Item = styled.li`
  flex: ${props => (props.isActive ? "1 0 auto" : "1 0 50px")};
  margin-top: ${props => (props.isActive ? "10px" : "0")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  transition: display 0.2s ease-in-out;
`;

const LinkStyled = styled(Link)`
  &.active img {
    opacity: 1;
  }
`;

const Icon = styled.img`
  width: 23px;
  opacity: 0.4;
`;

const Text = styled.p`
  color: white;
  font-family: Aqua;
  text-transform: uppercase;
  font-size: 9px;
  padding-left: 2px;
`;

class List extends Component {
  state = {
    isHover: false
  };

  isHover = false;

  onEnter = () => {
    this.setState({ isHover: true });
  };

  onLeave = () => {
    this.setState({ isHover: false });
  };

  render() {
    const { to, src, label, isActive, children } = this.props;
    const { isHover } = this.state;

    return (
      <Item
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        isActive={isActive}
      >
        <LinkStyled to={to} activeClassName="active">
          {isHover && !isActive ? <Text>{label}</Text> : <Icon src={src} />}
        </LinkStyled>
        {children}
      </Item>
    );
  }
}

export default List;
