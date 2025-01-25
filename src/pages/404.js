import React from "react"

import SEO from "../components/seo"
import Rocket from "../images/rocket.png"

import {Link} from "gatsby"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <section class="container content fourzerofour">
      <img src={Rocket} className="rocket center" />
      <h1 className="center">404: NOT FOUND</h1>
      <h4 className="center">You blasted off to some place that doesn't exist. How about a trip <Link to="/">home</Link>?</h4>
    </section>
  </>
)

export default NotFoundPage
