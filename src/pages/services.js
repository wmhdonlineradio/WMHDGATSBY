import React from "react"

import SEO from "../components/seo"

const ServicesPage = () => (
  <>
    <SEO title="Services" />
    <section className="container content" style={{marginBottom: 20}}>
        <h1>Campus Services</h1>
        <h3>DJ Services</h3>
        <p>WMHD offers DJ services for on-campus events. If you would like us to DJ at your event, 
        please contact our equipment director at least a week in advance of the event. 
        If DJ services are required, then we will set up the necessary equipment that we own and then play the music requested for the event. 
        You can give us a specific playlist or just tell us a theme and guidelines and we’ll play music based on that. 
        We will need a table, chairs, and access to an electrical outlet to DJ.</p>

        <h3>Equipment and Room Rentals</h3>
        <p>We have equipment available to rent for any Rose-Hulman student organization or student usually for free. 
        There are speakers, speaker stands, microphones and cables, mixers, and more that can be rented. 
        WMHD requires a deposit for equipment taken off campus, but the deposit will be returned after the equipment is brought back to the radio rooms. 
        Please contact our equipment director for details.</p>

        <h3>Recording Services</h3>
        <p>Our recording room is free to rent for recording or as a practice space by any students or groups on campus. 
        We have a drum kit as well as microphones, music stands, cables, and mixers. 
        If you are interested in scheduling a time to rent the room then please contact our equipment director.</p>
    </section>
  </>
)

export default ServicesPage