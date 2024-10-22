import { Link } from "gatsby"
import React from "react"

import Logo from "../images/wmhd-logo-cropped.png"

class Nav extends React.Component {
  state = {}

  componentDidMount(){
      let activeClass = 'navbar fixonscroll solidnavbar navbar-inverse';
      let activeClassPadder = 'hidden';
      this.setState({ activeClass, activeClassPadder });
      if (this.props.home) {
        window.addEventListener('scroll', () => {
          let activeClass = 'navbar fixonscroll solidnavbar navbar-inverse';
          let activeClassPadder = 'hidden';
          if (window.pageYOffset > window.innerHeight) {
            activeClass = 'navbar fixonscroll navbar-fixed-top navbar-inverse';
            activeClassPadder = '';
          }
          this.setState({ activeClass, activeClassPadder });
       });
      }
  }

  render() {
    let activeClass = this.state.activeClass;
    let activeClassPadder = this.state.activeClassPadder;

    return (
      <>
        { /* Navbar Begin */ }
        <nav className={activeClass} role="navigation" id="home-nav">
          <div className="container">
            <div id="navbar">
              <ul className="nav navbar-nav">
                <li className="visible-xs-block">
                  <Link to="/" className="brand"><img src={Logo} style={{width: 70}} alt="WMHD Logo" /></Link>
                </li>
                <span className="navbar-section">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  {/*<li><Link to="/store">Store</Link></li>*/}
                  <li><a href="https://commerce.cashnet.com/rosehulmanem?CNAME=STUDENT%20ACTV">Store</a></li>
                </span>
                <li className="hidden-xs">
                  <Link to="/" className="brand"><img src={Logo} alt="WMHD Logo" /></Link>
                </li>
                <span className="navbar-section">
                  <li><a href="https://www.mixcloud.com/wmhdonlineradio/">Archive</a></li>
                  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform">Rental/DJ Requests</a></li>
                </span>
              </ul>{ /* /.nav */ }
            </div>{ /*/.nav-collapse */ }
          </div>{ /*/.container */ }
        </nav>{ /*/.navbar */ }
        { /* Navbar End */ }
        <div className={activeClassPadder} style={{height: 110}}></div>
      </>
    )
  }

}

export default Nav
