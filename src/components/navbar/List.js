import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Icon = styled.img`
  width: 23px;
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

  toggleIsHover = () => {
    this.setState({ isHover: !this.state.isHover });
  };

  render() {
    const { to, src, label } = this.props;
    const { isHover } = this.state;

    console.log(this.state.isHover);
    return (
      <li onMouseEnter={this.toggleIsHover} onMouseLeave={this.toggleIsHover}>
        <Link to={to}>
          {isHover ? <Text>{label}</Text> : <Icon src={src} />}
        </Link>
      </li>
    );
  }
}

export default List;
