import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Heading } from "evergreen-ui"
import { AppTheme } from "./themeColor"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: AppTheme.primaryColor,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Heading size={800} style={{ margin: 0}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
