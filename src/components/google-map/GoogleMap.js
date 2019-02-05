import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

import { globalVariables } from "../globalStyle";
import Logo from "../../img/azertylogo.png";

const MarkerStyled = styled.div`
  background-color: ${props => props.theme.darkGreenOpacity};
  color: ${props => props.theme.white};
  width: 200px;
  text-align: center;
  padding: 1rem;
  font-size: 16px;
  border-radius: ${globalVariables.borderRadius};
`;

const Name = styled.p`
  font-weight: 700;
`;

const Adress = styled.p`
  font-weight: normal;
`;

const MarkerCircleStyled = styled.div`
  height: 30px;
  width: 30px;

  border-radius: 50%;
  background-color: ${props => props.theme.pink};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoStyled = styled.img`
  width: auto;
  height: 20px;
`;

const MarkerAdress = () => {
  return (
    <MarkerStyled>
      <Name>Azerty Studio</Name>
      <Adress>28 Boulevard Benoni Goullin, 44200 Nantes</Adress>
    </MarkerStyled>
  );
};

const MarkerCircle = () => {
  return (
    <MarkerCircleStyled>
      <LogoStyled src={Logo} />
    </MarkerCircleStyled>
  );
};

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 47.2,
      lng: -1.55
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDFVr06Q0GAzsLv8lzMpGt53AeqERvK6qo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MarkerAdress lat={47.2025} lng={-1.55} />
          <MarkerCircle lat={47.202605} lng={-1.553073} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
