import React from "react"

import SEO from "../components/seo"

const ArchivePage = () => (
  <>
    <SEO title="Archive" />
    <section className="container content" style={{marginBottom: 20}}>
        <h2>Podcasts</h2>
          <h3>It’s Alive: A Halloween Radio Play</h3>
          <p>Aired Oct. 31, 2018
            After several months of research and working out the bugs WMHD is finally able to host live radio shows. One of these first live shows named “It’s Alive!” a live request show where listeners can email in their favorite Halloween songs. Friends and family are all asked to listen and participate firstly to give the host songs to play and secondly to notify the host if any of the previous issues appear with the first broadcast.</p><p> 
            Things start off smoothly as listeners email in requests however things begin to fall off track as the program glitches. At first, it appears to only be an awkward pause between songs but soon it becomes apparent there is more to these technical difficulties than just dead air. 
          </p><p>
            This play was written by Katana Colledge. The host was played by Katana Colledge. The Equipment Director was played by Graham Hepworth.</p>
          <audio src="assets/audio/halo_play.mp3" controls>
            Your browser does not support the audio element.
          </audio>
        <h3>Dank Meme Radio Episode 1</h3>
          <p>Aired August 30, 2017</p><p>
            Serving up the dankest #1 jams worldwide.</p>
          <audio src="assets/audio/dmr1.mp3" controls>
            Your browser does not support the audio element.
        </audio>
        <h3>Dank Meme Radio Episode 2</h3>
          <p>
            Aired March 8, 2017</p><p>
            Serving up the dankest #1 jams worldwide.</p>
          <audio src="assets/audio/dmr2.mp3" controls>
            Your browser does not support the audio element.
          </audio>
        <h3>Electric Breakfast 4-6-1988</h3>
          <p>
            Aired April 6, 1988
          </p>
          <audio src="assets/audio/WMHD Electric Breakfast 4-6-1988 7-745 am.mp3" controls>
            Your browser does not support the audio element.
          </audio>

        <h3>New Music Monday</h3>
          <p>
            Aired December 12, 2019

            Every week WMHD Radio receives several emails from musicians requesting their songs to be played on the radio.  We comb through them and pick out our favorites to air! 
            "All The Time" by Papyllon, "Heartbeat of My Life" by Wembi, "Pavement" by Drev, "Unforgiven" by Elijvh, "Graveyard Tonight" by Donald Carpenter, "Ain't Gonna Whistle Dixie Anymore" by Paul Metsa & Willie Walker ft. Sounds of Blackness, "Isegoria" by Rhy Dongju, "Strawberry" by Sal the Musician, "Make Up Your Mind" by Phonettes, "Skinny Kid" by Minutes to Midnight, "Continuation" by Kalo Capella, and "The River" by P.S. November
          </p>
          <audio src="assets/audio/New Music Monday 12_3_2019.mp3" controls>
            Your browser does not support the audio element.
          </audio>
    </section>
  </>
)

export default ArchivePage
