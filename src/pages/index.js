import React, { useEffect } from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

import SEO from "../components/seo"
import Nav from "../components/nav"

import Banner from "../images/banner.jpg"  
import WMHDLogo from "../images/wmhd-logo.png"  // Ensure you have the logo image in the correct path
import "../components/index.css"

const IndexPage = () => {
  useEffect(() => {
    // Removed dynamic resizing of banner height because CSS will handle it
    // This should now be responsive with the background-size cover and height 100vh in CSS
  }, []);

  return (
    <>
      <SEO title="Home" />
      
      {/* First Banner (Hero Section) */}
      <section className="banner" id="banner">
        <div id="banner-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              <div className="overlay"></div>
              <div className="container">
                <div className="content-wrap">
                  <div className="content">
                    <div className="textwrap">
                      <div className="subtitle animated fadeIn wow" data-wow-delay=".5s">
                        <h2>Where Music Has Dimension</h2>
                      </div>
                      <div className="title animated fadeIn wow" data-wow-delay="1s">
                        <h1>WMHD Radio <span className="light">The Monkey</span></h1>
                      </div>
                      <div className="subtitle animated fadeIn wow" data-wow-delay="1.5s">
                        <h2>Rose-Hulman Institute of Technology</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-info">
            <a onClick={() => scrollTo('#home-nav')}>
              <div className="shape">
                <i className="fa fa-angle-down"></i>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Nav home={true} />
    </>
  );
}

export default IndexPage;
