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
      <p>WMHD Radio is a student run radio that offers online music, equipment rentals & DJ services for Rose-Hulman Institute of Technology community. Our studio is located in the basement of BSB hall, room 032.</p>

      <h3>Club Meetings</h3>
      <div class="alert alert-danger" role="alert"><b>Notice:</b> Due to the COVID-19 pandemic, all WMHD Radio open hours are canceled until further notice. The studio will be closed for this time period as well. Events will be held on a limited basis and all meetings will be virtual.</div>
      <p>WMHD Online Radio has general club meetings every Thursday at 7 PM in the basement of BSB, room 032.
      In these meetings we discuss/listen to music, plan events, stream live radio shows, 
      and also run workshops on things like DJing, equipment setup, and the recording process.</p>

      <h3>Current Officers</h3>
      <div><b>General Manager</b>: Katana Colledge</div>
      <div><b>Equipment Manager</b>: Keith Condray-Raderstorf</div>
      <div><b>Personnel Director</b>: Laya Mehra</div>
      <div><b>Program Director</b>: Sabri Amer</div>
      <div><b>Communications Director</b>: Logan Ramon</div>
      <div><b>Webmaster</b>: Athena Henderson</div>
      <div><b>Treasurer</b>: Andrew Orians</div>
      <div><b>Faculty Advisor</b>: Kevin Lanke</div>
      
      <h3>Room Info</h3>
      <p>We have three main rooms in BSB basement: the Broadcasting Room (BSB032), Recording Studio (BSB030), and Podcasting Studio (BSB028).
      We also have a storage room for our hundreds of CDs and records and equipment. We have one of the largest spaces on campus for a club and we strive to make them available to campus.
      Come hang out in them! Every Rose-Hulman student is welcome to use the rooms. See <Link to="/services">Services</Link> for information about using the recording studio and the podcasting studio.
      The hours that the radio is open weekly are posted below.</p>
      
      <h3>Open Radio Room Hours and Weekly Events</h3>
      <div class="alert alert-danger" role="alert"><b>Notice:</b> Due to the COVID-19 pandemic, all WMHD Radio open hours are canceled until further notice. The studio will be closed for this time period as well. Events will be held on a limited basis and all meetings will be virtual.</div>
      <div><b>Thursday:</b></div>
      <div>Officer Mettings at 6:00 PM</div> 
      <div>Club Meetings at 7:00 PM</div>
      <div><b>Friday:</b></div>
      <div>Jam Session from 6:45 PM to 9:45 PM</div>
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
