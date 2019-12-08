import React from "react"
import Layout from "./src/components/layout"

export const wrapPageElement = ({ element, props }) => {
  return <Layout home={props.location.pathname === "/"}>{element}</Layout>
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  window.scrollTo(0, 1);
  return;
}