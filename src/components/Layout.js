import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import "./all.sass";
import GlobalStyles, {
  theme,
  globalVariables,
  Desktop,
  NotDesktop
} from "./globalStyle";
import { DesktopNavbar, MobileNavbar } from "../components/navbar";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${globalVariables.maxTablet}) {
    flex-direction: column;
  }
`;

const Children = styled.div`
  width: 100%;
  margin-left: 60px;
  min-height: 100vh;
  overflow: hidden;
  @media (max-width: ${globalVariables.maxTablet}) {
    margin-left: 0;
  }
`;

const TemplateWrapper = ({ children, location }) => {
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

            <link
              rel="mask-icon"
              href="/img/safari-pinned-tab.svg"
              color="#ff4400"
            />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
          </Helmet>

          <ThemeProvider theme={theme}>
            <React.Fragment>
              <GlobalStyles />
              <LayoutContainer>
                <Desktop>
                  <DesktopNavbar location={location} />
                </Desktop>
                <NotDesktop>
                  <MobileNavbar location={location} />
                </NotDesktop>
                <Children>{children}</Children>
              </LayoutContainer>
            </React.Fragment>
          </ThemeProvider>
        </div>
      )}
    />
  );
};

export default TemplateWrapper;
