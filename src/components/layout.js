/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Pane, Heading } from "evergreen-ui";

import Header from "./header";

import "../styles/global.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Pane>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <Heading size={400} marginY={30}>
            © {new Date().getFullYear()}, Le Cook
            {` `}by{` `}
            <a
              href="https://agustinusnathaniel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              sozonome
            </a>
            . Powered by <a href="http://www.recipepuppy.com/">RecipePuppy</a>
          </Heading>
        </footer>
      </div>
    </Pane>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
