import React from "react"

import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ServicesPage = ({data}) => (
  <>
    <SEO title="Services" />
    <section className="container content" style={{marginBottom: 20}}>
        <h1>Campus Services</h1>
        <p className="services-info">For any questions regarding our services or to book one of our studios, contact our officers by <a href="mailto:wmhdradio@gmail.com">email</a>.</p>
        <div className="row">
          <div className="col-md-4">
            <h3>DJ Services</h3>
            <Img fluid={data.djServices.childImageSharp.fluid} className="services-pic" />
            <p>WMHD offers DJ services for on-campus events. If you would like us to DJ at your event, 
            please fill out our rental request and DJing services <a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform">form</a>. 
            If DJ services are required, then WMHD Personnel will set up the equipment and play the requested music.</p>
          </div>
          <div className="col-md-4">
            <h3>Equipment Rentals</h3>
            <Img fluid={data.equipmentRentals.childImageSharp.fluid} className="services-pic" />
            <p>WMHD has equipment available to rent for any Rose-Hulman affiliated organization or student for free. 
            There are speakers, microphones, lighting systems, mixers, and more that can be rented.
            To request a rental, please fill out our rental request <a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform">form</a>.</p>
          </div>
          <div className="col-md-4">
            <h3>Recording Studio</h3>
            <Img fluid={data.recordingStudio.childImageSharp.fluid} className="services-pic" />
            <p>Our Recording Studio is free to rent for recording or as a practice space by any students or groups on campus. 
            The Recording Studio is equipped with a keyboard, drum kit, and bass amp, as well as plenty of microphones, music stands, and cables.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>Guitar Lessons</h3>
            <Img fluid={data.guitarLessons.childImageSharp.fluid} className="services-pic" />
            <p>Learn the basics of guitar playing every Saturday from 3:00pm to 5:00pm. These free lessons will get you started on electric or acoustic guitar. Contact Laya Mehra for more details.</p>
          </div>
          <div className="col-md-4">
            <h3>Production Lessons</h3>
            <Img fluid={data.productionLessons.childImageSharp.fluid} className="services-pic" />
            <p>Learn to produce your own music every Saturday from 2:00pm to 3:00pm. You'll have access to our expansive software and equipment. Contact Frank Lancaster for more details.</p>
          </div>
          <div className="col-md-4">
            <h3>Podcast Studio</h3>
            <Img fluid={data.podcastStudio.childImageSharp.fluid} className="services-pic" />
            <p>Our Podcast Studio is free to book for recording any voice-based audio. There are high quality vocal microphones for 3 different speakers and more can be added if needed.</p>
          </div>
        </div>
    </section>
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
    },
    equipmentRentals: file(relativePath: { eq: "equipment-rentals.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2953) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    recordingStudio: file(relativePath: { eq: "recording-studio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 6015) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    productionLessons: file(relativePath: { eq: "production-lessons.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4026) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    guitarLessons: file(relativePath: { eq: "guitar-lessons.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2047) {
          ...GatsbyImageSharpFluid
        }
      }
    },
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