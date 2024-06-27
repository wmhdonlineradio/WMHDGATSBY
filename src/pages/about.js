import React from "react"

import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const AboutPage = ({data}) => (
  <>
    <SEO title="About" />
    <section className="container content" style={{marginBottom: 20}}>
      <h2>About WMHD Radio</h2>
      <Img fluid={data.clubImage.childImageSharp.fluid} className="clubimage" />
      <p>WMHD Radio is a student run radio that offers online music, equipment rentals &amp; DJ services for Rose-Hulman Institute of Technology community. Our studio is located in the basement of BSB hall, room 032.</p>

      <h3>Club Meetings</h3>
      <p>WMHD Online Radio has general club meetings in the basement of BSB, room 032.
        The time for next quarter is still tentative.
      In these meetings we discuss/listen to music, plan events, stream live radio shows, 
      and also run workshops on things like DJing, equipment setup, and the recording process.</p>

      <h3>Current Officers</h3>
      <div><b>General Manager/President</b>: Zico Youash </div>
      <div><b>Equipment Manager</b>: Henry Morin </div>
      <div><b>Personnel Director</b>: Charlie L.</div>
      <div><b>Program Director</b>: Peter F </div>
      <div><b>Communications Director</b>: Paul Sampson</div>
      <div><b>Webmaster</b>: James Harris  </div>
      <div><b>Treasurer</b>: Ben Wilson</div>
      <div><b>Podcast Director</b>: Randyn</div>
      <div><b>Faculty Advisor</b>: Landon</div>
      
      <h3>Room Info</h3>
      <p>We have four main rooms in BSB basement: the Broadcasting Room (BSB032), Recording Studio (BSB030), Podcasting Studio (BSB028), and Music Lounge (BSB022).
      We also have a storage room for our hundreds of CDs and records and equipment. We have one of the largest spaces on campus for a club and we strive to make them available to campus.
      Come hang out in them! Every Rose-Hulman student is welcome to use the rooms. See <Link to="/services">Services</Link> for information about using the recording studio and the podcasting studio.
      The hours that the radio is open weekly are posted below.</p>
      
      <h3>Open Radio Room Hours and Weekly Events</h3>
      <div><b>Open Hours:</b> Open hours are posted in our discord and outside our door, if you ever need to get into the space ping or message an officer and we'll see if we can let you in <br /> &emsp; </div>
    </section>
  </>
)

export const query = graphql`
  query {
    clubImage: file(relativePath: { eq: "club-photo2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4028) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
