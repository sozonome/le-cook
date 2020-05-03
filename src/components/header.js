import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Heading, Image } from "evergreen-ui"
import { AppTheme } from "./themeColor"
import AppIcon from "../images/food-and-restaurant.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: AppTheme.primaryColor,
      marginBottom: `1.45rem`,
      position:`sticky`,
      top: 0,
      zIndex: 15
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`
      }}
    >
      <Image width={30} marginRight={15} src={AppIcon}/>
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
