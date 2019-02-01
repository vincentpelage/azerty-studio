import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import "./all.sass";
import GlobalStyles, { theme, globalVariables } from "./globalStyle";
import { DesktopNavbar, MobileNavbar } from "../components/navbar";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex-direction: column;
  }
`;

const Children = styled.div`
  width: 100%;
  margin-left: 60px;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  @media (max-width: ${globalVariables.maxTablet}) {
    margin-left: 0;
  }
`;

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0
    };
  }

  componentDidMount() {
    console.log("inside componentDidMount");
    if (typeof window !== "undefined") {
      console.log("inside componentDidMount IF");
      window.addEventListener("resize", this.handleWindowSizeChange);
      console.log("window", window);
      this.setState({ width: window.innerWidth });
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.handleWindowSizeChange);
    }
  }

  handleWindowSizeChange = () => {
    console.log("inside handleWindowSizeChange");
    if (typeof window !== "undefined") {
      console.log("inside handleWindowSizeChange IF");
      this.setState({ width: window.innerWidth });
    }
  };

  render() {
    const { children, location } = this.props;
    if (typeof window !== "undefined") {
      this.width =
        this.state.width === 0 ? window.innerWidth : this.state.width;
    }

    const isTablet = this.width <= 991;

    return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={data => (
          <div>
            <Helmet>
              <html lang="en" />
              <title>{data.site.siteMetadata.title}</title>
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />

              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/img/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                href="/img/favicon-32x32.png"
                sizes="32x32"
              />
              <link
                rel="icon"
                type="image/png"
                href="/img/favicon-16x16.png"
                sizes="16x16"
              />

              <meta name="theme-color" content="#00B6BE" />

              <meta property="og:type" content="website" />
              <meta
                property="og:title"
                content={data.site.siteMetadata.title}
              />
              <meta property="og:url" content="/" />
              <meta property="og:image" content="/img/og-image.png" />
            </Helmet>

            <ThemeProvider theme={theme}>
              <React.Fragment>
                <GlobalStyles />
                <LayoutContainer>
                  {isTablet ? (
                    <MobileNavbar location={location} />
                  ) : (
                    <DesktopNavbar location={location} />
                  )}
                  <Children>{children}</Children>
                </LayoutContainer>
              </React.Fragment>
            </ThemeProvider>
          </div>
        )}
      />
    );
  }
}

export default Layout;
