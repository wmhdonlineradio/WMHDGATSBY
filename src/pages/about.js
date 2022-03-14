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
      <p>WMHD Online Radio has general club meetings every Wednesday at 7 PM in the basement of BSB, room 032.
      In these meetings we discuss/listen to music, plan events, stream live radio shows, 
      and also run workshops on things like DJing, equipment setup, and the recording process.</p>

      <h3>Current Officers</h3>
      <div><b>General Manager/President</b>: Logan Ramon</div>
      <div><b>Equipment Manager</b>: Donald Hau</div>
      <div><b>Personnel Director</b>: Athena Henderson</div>
      <div><b>Program Director</b>: Audrey Mitchell</div>
      <div><b>Communications Director</b>: Natalija Pumpurs</div>
      <div><b>Webmaster</b>: Abby Smith</div>
      <div><b>Treasurer</b>: Andrew Orians</div>
      <div><b>Faculty Advisor</b>: Kevin Lanke</div>
      
      <h3>Room Info</h3>
      <p>We have four main rooms in BSB basement: the Broadcasting Room (BSB032), Recording Studio (BSB030), Podcasting Studio (BSB028), and Music Lounge (BSB022).
      We also have a storage room for our hundreds of CDs and records and equipment. We have one of the largest spaces on campus for a club and we strive to make them available to campus.
      Come hang out in them! Every Rose-Hulman student is welcome to use the rooms. See <Link to="/services">Services</Link> for information about using the recording studio and the podcasting studio.
      The hours that the radio is open weekly are posted below.</p>
      
      <h3>Open Radio Room Hours and Weekly Events</h3>
      <div><b>Monday:</b> 3:00 PM - 4:00 PM (Andrew)</div>
      <div>&emsp; Officer Meetings 6:30-7:30 PM</div> 
      <div><b>Tuesday:</b> 9:30 AM - 12:00 PM (Donald) <br /> &emsp; 3:00 PM - 6:00 PM (Abby)</div>
      <div><b>Wednesday:</b> 11:00 PM - 1:00 PM (Natalija) <br /> &emsp; 3:00 PM - 6:00 PM (Andrew)</div>
      <div>&emsp; Club Meetings at 8:00 PM</div>
      <div><b>Thursday:</b> 3:00 PM - 4:00 PM (Athena) <br /> &emsp; 6:00 PM - 8:00 PM (Audrey)</div>
      <div><b>Friday:</b> 4:00 PM - 5:00 PM (Logan)<br /> &emsp; 7:00 PM - 9:00 PM (Abby)</div>
      <div>&emsp; Jam Session from 7:00 PM to 9:00 PM</div>
      <div><b>Saturday:</b> Jam Session from 8:00 PM to 11:00 PM (Natalija)</div>
      <div><b>Sunday:</b> 2:00 PM - 4:00 PM (Keith)</div>
    </section>
  </>
)

export const query = graphql`
  query {
    clubImage: file(relativePath: { eq: "club-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4028) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
