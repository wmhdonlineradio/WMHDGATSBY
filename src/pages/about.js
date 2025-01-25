import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Nav from "../components/nav"  // Import Nav component

const AboutPage = ({ data }) => (
  <>
    <SEO title="About" />
    <section className="container content about-page">
      <h2>About WMHD Radio</h2>
      <Img fluid={data.clubImage.childImageSharp.fluid} className="club-image" />
      <p className="about-text">
        WMHD Radio is a student-run radio that offers online music, equipment rentals &amp; DJ services for the Rose-Hulman Institute of Technology community. Our studio is located in the basement of BSB hall, room 032.
      </p>

      <h3>Club Meetings</h3>
      <p className="about-text">
        WMHD Online Radio has general club meetings in the basement of BSB, room 032. The time for next quarter is still tentative. In these meetings, we discuss/listen to music, plan events, stream live radio shows, and also run workshops on things like DJing, equipment setup, and the recording process.
      </p>

      <h3>Current Officers</h3>
      <ul className="officers-list">
        <li><strong>General Manager/President</strong>: Zico Youash</li>
        <li><strong>Equipment Manager</strong>: Henry Morin</li>
        <li><strong>Personnel Director</strong>: Charlie L.</li>
        <li><strong>Program Director</strong>: Peter F.</li>
        <li><strong>Communications Director</strong>: Paul Sampson</li>
        <li><strong>Webmaster</strong>: James Harris</li>
        <li><strong>Treasurer</strong>: Ben Wilson</li>
        <li><strong>Podcast Director</strong>: Randyn</li>
        <li><strong>Faculty Advisor</strong>: Landon</li>
      </ul>

      <h3>Room Info</h3>
      <p className="about-text">
        We have four main rooms in BSB basement: the Broadcasting Room (BSB032), Recording Studio (BSB030), Podcasting Studio (BSB028), and Music Lounge (BSB022). We also have a storage room for our hundreds of CDs, records, and equipment. We have one of the largest spaces on campus for a club and we strive to make them available to the campus. Come hang out in them! Every Rose-Hulman student is welcome to use the rooms. See <Link to="/services">Services</Link> for information about using the recording studio and the podcasting studio. The hours that the radio is open weekly are posted below.
      </p>

      <h3>Open Radio Room Hours and Weekly Events</h3>
      <p className="about-text">
        <strong>Open Hours:</strong> Open hours are posted in our discord and outside our door. If you ever need to get into the space, ping or message an officer and we'll see if we can let you in.
      </p>
    </section>

    {/* Move the Nav component here to the bottom */}
    <Nav />
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
