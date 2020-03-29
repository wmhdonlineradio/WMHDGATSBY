import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

import SEO from "../components/seo"
import Nav from "../components/nav"

import Banner from "../images/banner.jpg"  
import "../components/index.css"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="banner" id="banner">
      <div id="banner-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item active" style={{backgroundImage: `url(${Banner})`, backgroundSize: 'cover'}}>
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
                  </div>{ /*/.textwrap */ }
                </div>{ /*/.content */ }
              </div>{ /*/.content-wrap */ }
            </div>{ /*/.container */ }
          </div>{ /*/.item */ }
        </div>{ /*/.carousel-inner */ }
        { /* Controls */ }
        <div className="scroll-info">
          <a onClick={() => scrollTo('#home-nav')}>
            <div className="shape">
              <i className="fa fa-angle-down"></i>
            </div>
          </a>
        </div>{ /*/.scroll-info */ }
      </div>{ /*/.banner-carousel */ }
    </section>{ /* /.banner */ }
    { /* Banner End */ }

    <Nav home={true}/>

    { /* Schedule Begin */ }
    {/*<section className="schedule" id="schedule">
      <div className="overlay"></div>
      <div className="container content">
        <div className="col-md-12 title wow animated fadeIn" data-wow-delay="0.3s">
          <h2>Show Schedule</h2>
          <div className="text">
            <p>All times are in EST.</p>
          </div>
        </div>
      </div>
    </section>*/}
    { /* Schedule End */ }

    { /* calendarbegin */ }
    <section className="calendar" id="calendar">
          <div className="overlay"></div>
          <div className="container content">
            <div className="col-md-12 title wow animated fadeIn" data-wow-delay="0.5s"><h2>Calendar</h2></div>
            <iframe src="https://calendar.google.com/calendar/embed?src=wmhdradio%40gmail.com&ctz=America/New_York" title="calendar" style={{border: 0}} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
          </div> { /*/.container*/ }
    </section>{ /*/.calendar*/ }
    { /* calendar end */ }
  </>
)

export default IndexPage
