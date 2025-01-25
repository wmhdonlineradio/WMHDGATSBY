import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Nav from "../components/nav"  // Import Nav component

const ServicesPage = ({ data }) => (
  <>
    <SEO title="Services" />
    <section className="container content services-page" style={{ marginBottom: 20 }}>
      <h1>Campus Services</h1>
      <p className="services-info">
        For any questions regarding our services or to book one of our studios, contact our officers by{" "}
        <a href="mailto:wmhdradio@gmail.com">email</a>.
      </p>

      <div className="services-row">
        {/* DJ Services */}
        <div className="services-col">
          <h3>DJ Services</h3>
          <div className="services-image-container">
            <Img fluid={data.djServices.childImageSharp.fluid} className="services-pic" />
          </div>
          <p>
            WMHD offers DJ services for on-campus events. If you would like us to DJ at your event, please fill out our rental request and DJing services{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform">form</a>.
            If DJ services are required, then WMHD Personnel will set up the equipment and play the requested music.
          </p>
        </div>

        {/* Equipment Rentals */}
        <div className="services-col">
          <h3>Equipment Rentals</h3>
          <div className="services-image-container">
            <Img fluid={data.equipmentRentals.childImageSharp.fluid} className="services-pic" />
          </div>
          <p>
            WMHD has equipment available to rent for any Rose-Hulman affiliated organization or student for free. There are speakers, microphones, lighting systems, mixers, and more that can be rented.
            To request a rental, please fill out our rental request <a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform">form</a>.
          </p>
        </div>
      </div>

      <div className="services-row">
        {/* Recording Studio */}
        <div className="services-col">
          <h3>Recording Studio</h3>
          <div className="services-image-container">
            <Img fluid={data.recordingStudio.childImageSharp.fluid} className="services-pic" />
          </div>
          <p>
            Our Recording Studio is free to rent for recording or as a practice space by any students or groups on campus. The Recording Studio is equipped with a keyboard, drum kit, and bass amp, as well as plenty of microphones, music stands, and cables.
          </p>
        </div>

        {/* Podcast Studio */}
        <div className="services-col">
          <h3>Podcast Studio</h3>
          <div className="services-image-container">
            <Img fluid={data.podcastStudio.childImageSharp.fluid} className="services-pic" />
          </div>
          <p>
            Our Podcast Studio is free to book for recording any voice-based audio. There are high-quality vocal microphones. If you need something special or assistance is required, consult our Podcasting Director.
          </p>
        </div>
      </div>
    </section>

    {/* Move the Nav component here to the bottom */}
    <Nav />
  </>
)

export const query = graphql`
  query {
    djServices: file(relativePath: { eq: "dj-services.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4007) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    equipmentRentals: file(relativePath: { eq: "equipment-rentals.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2953) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    recordingStudio: file(relativePath: { eq: "recording-studio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 6015) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    podcastStudio: file(relativePath: { eq: "podcast-studio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ServicesPage
