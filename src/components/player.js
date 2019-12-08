import React from "react"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false, loading: false, trackTitle: 'Unknown Song', artistName: 'Unknown Artist', showName: 'Unknown Show', volume: 25 };
  }

  onPlayStopClicked() {
    var audio = this.state.audio;
    if (!this.state.playing && !this.state.loading)
        this.initMp3Player();
    else  if (this.state.playing && !this.state.loading && this.state.audio.muted) {
      audio.muted = false;
      this.setState({audio});
    }
    else if (this.state.playing && !this.state.loading) {
      audio.muted = true;
      this.setState({audio});
    }
  }

  initMp3Player() {
    this.setState({ loading: true });
    var audio = new Audio();
    audio.src = 'http://icecast.wmhdradio.org:8000/wmhd'; //link to the audio file
    audio.autoplay = true;
    audio.volume = this.state.audio.volume;

    audio.addEventListener('playing', () => {
      this.setState({ playing: true, loading: false });
    })

    this.setState({audio: audio})
  }

  updateVolume(value) {
    this.setCookie('volume', value.toString(), 365);
    var audio = this.state.audio;
    audio.volume = value/100;
    this.setState({audio, volume: audio.volume});
  }

  componentDidMount() {
    let footer = this.refs.footer;
    let activeClass = 'audio fixed';
    let activeClassPadder = '';
    if (window.pageYOffset+window.innerHeight > footer.offsetTop) {
      activeClass = 'audio';
      activeClassPadder = 'hidden';
    }
    this.setState({ activeClass, activeClassPadder });
    window.addEventListener('scroll', () => {
        let activeClass = 'audio fixed';
        let activeClassPadder = '';
        if (window.pageYOffset+window.innerHeight > footer.offsetTop) {
          activeClass = 'audio';
          activeClassPadder = 'hidden';
        }
        this.setState({ activeClass, activeClassPadder });
    });
    var audio = new Audio();
    audio.volume = 0.25;
    var volume = this.getCookie('volume');
    if (volume && !isNaN(parseInt(volume))) {
      audio.volume = parseInt(volume)/100;
    }
    this.setState({audio, volume: audio.volume});
    this.fetchData();
  }

  fetchData() {
    fetch('https://dj.wmhdradio.org/api/live-info/')
      .then(response => response.json())
      .then(data => { 
        this.setState({ trackTitle: data.current.track_title, artistName: data.current.artist_name, showName: data.currentShow[0].name });
        var timeout = (Date.parse(data.next.starts) - Date.parse(data.schedulerTime)) + 10000
        setTimeout(this.fetchData(), timeout)
      });
  }

  setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)===' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }

  eraseCookie(name) {   
      document.cookie = name+'=; Max-Age=-99999999;';  
  }

  render() {
    let icon;
    if (this.state.loading) {
      icon = (<i className="fa fa-spinner fa-pulse"></i>)
    } else if (this.state.playing && !this.state.audio.muted) {
      icon = (<i className="fa fa-pause"></i>);
    } else {
      icon = (<i className="fa fa-play"></i>);
    }
    return (
      <>
        { /* Audio Player Begin */ }
        <div className={this.state.activeClass} role="application" aria-label="media player" ref="audio">
          <div className="interface">
            <div className="container">
              <div className="play-pause">
                <div className="shape" onClick={() => this.onPlayStopClicked()}>
                  {icon}
                </div>
              </div>
              <div className="song-details">
                {this.state.artistName} - {this.state.trackTitle} 
              </div>
              <div className="volume-slider hidden-xs">
                <i className="fa fa-volume-down"></i>
                <i className="fa fa-volume-up"></i>
                <Slider 
                  trackStyle={{ backgroundColor: '#800000', height: 8 }}
                  handleStyle={{
                    boxShadow: "0 0 0 0",
                    borderColor: "#580100",
                    backgroundColor: '#800000',
                    height: 18,
                    width: 18
                  }}
                  railStyle={{ backgroundColor: '#E9E9E9', height: 8 }}
                  onChange={(value) => this.updateVolume(value)}
                  value={this.state.volume*100}
                />
              </div>
            </div>
          </div>{ /* /.jp-gui */ }
        </div>{ /* /.audio-player */ }
        <div className={this.state.activeClassPadder} style={{height: 80}}></div>
        <div ref="footer">

        </div>
        { /* Audio Player End */ }
      </>
    )
  }

}

export default Player