import React from "react"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false, loading: false, trackTitle: 'Unknown Song', volume: 25, showHistory: false, historyClass: "dropup" };
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
    audio.src = 'https://streams.radio.co/sced914ff9/listen'; //link to the audio file
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
    fetch('https://public.radio.co/stations/sced914ff9/status')
      .then(response => response.json())
      .then(data => { 
        this.setState({ trackTitle: data.current_track.title, history: data.history, trackArtwork: data.current_track.artwork_url }, 
          () => {
            if (!this.state.trackArtwork) {
              this.setState({trackArtwork: 'https://images.radio.co/station_logos/sced914ff9.20200325015033.png'})
            }
          });
        var timeout = 20000;
        setTimeout(() => this.fetchData(), timeout);
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

  toggleHistory() {
    if (!this.state.showHistory) {
      this.setState({ showHistory: !this.state.showHistory, historyClass: "dropup open" });
    } else {
      this.setState({ showHistory: !this.state.showHistory, historyClass: "dropup" });
    }
  }

  render() {
    let icon;
    if (this.state.loading) {
      icon = (<i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>)
    } else if (this.state.playing && !this.state.audio.muted) {
      icon = (<i className="fa fa-pause fa-3x fa-fw"></i>);
    } else {
      icon = (<i className="fa fa-play fa-3x fa-fw"></i>);
    }
    return (
      <>
        { /* Audio Player Begin */ }
        <div className={this.state.activeClass} role="application" aria-label="media player" ref="audio">
          <div className="interface">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-xs-11 vcenter">
                  <div className="song-artwork vcenter">
                    <img style={{display: "inline-block", height: "100%"}} src={this.state.trackArtwork}></img>
                    <div className="play-pause" onClick={() => this.onPlayStopClicked()}>
                        {icon}
                    </div>
                  </div>
                  <div className="song-details vcenter">
                    <p style={{margin: 0, fontWeight: "bold", fontSize: "15px"}}>{this.state.trackTitle.split(/-(.+)/)[1]}</p>
                    <p style={{margin: 0}}>{this.state.trackTitle.split(/-(.+)/)[0]}</p>
                  </div>
                </div>
                <div className="col-sm-2 col-xs-1 vcenter" style={{paddingRight: 0}}>
                  <div className="social-wrapper" style={{float: "right"}}>
                    <div className="player-social hidden-xs hidden-sm hidden-md">
                      <a href={"https://open.spotify.com/search/" + encodeURIComponent(this.state.trackTitle.split(/-(.+)/)[0] + this.state.trackTitle.split(/-(.+)/)[1])} target="_blank" rel="noopener noreferrer"><i className="fa fa-spotify"></i></a>
                      <a href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.state.trackTitle + " now playing on WMHD Radio. Listen in at") + "&url=https://wmhdradio.org&hashtags=NowPlaying,WMHDRadio"} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                      <a href="https://www.facebook.com/sharer/sharer.php?u=https://wmhdradio.org" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                    </div>
                    <div className="song-history">
                      <div className={this.state.historyClass}>
                        <i title="Song History" onClick={() => this.toggleHistory()} className="fa fa-list-ul"></i>
                        <ul className="dropdown-menu list-group history-list" aria-labelledby="dropdownMenu2">
                          <li className="dropdown-header">Recently Played</li>
                          {this.state.history && this.state.history.map((item, index) => (
                            <div key={index}>
                              <li>{item.title}</li>
                              {(index != this.state.history.length-1) && <li role="separator" className="divider"></li>}
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12 vcenter">
                  <div className="volume-slider">
                    <div className="row">
                      <div className="col-xs-1" style={{paddingLeft: 0, paddingRight: 0, textAlign: "right"}}>
                        <i className="fa fa-volume-down"></i>
                      </div>
                      <div className="col-xs-10">
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
                      <div className="col-xs-1" style={{paddingLeft: 0}}>
                        <i className="fa fa-volume-up"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        { /* /.audio-player */ }
        <div className={this.state.activeClassPadder} style={{height: 100}}></div>
        <div ref="footer">

        </div>
        { /* Audio Player End */ }
      </>
    )
  }

}

export default Player