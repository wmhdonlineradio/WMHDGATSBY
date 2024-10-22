/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./bootstrap.css"
import "./style.css"
import "./animate.css"
import "./font-awesome.min.css"

import Footer from "./footer"
import Nav from "./nav"
import Player from "../components/player"

const Layout = (props) => {
  return (
    <>
      { props.home ? "" : <Nav /> }
      {props.children}
      <Player />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
