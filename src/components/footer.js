import React from "react"

let Footer = () => {
    return (
        <>
            { /* Footer Begin*/ }
            <div className="footer" id="footer">
            <div className="container">
                <div className="col-md-4 col-sm-4 footer-row">
                <div className="title"><h4>Contact our club</h4></div>
                <p>Email the Current Officers</p>
                <div className="content">
                    <div className="socmed-wrap">
                        <a href="mailto:wmhdradio@gmail.com?Subject=Radio"
                        target="_top"><i className="fa fa-envelope"></i></a>
                    </div>{ /* /.socmed-wrap */ }
                </div>{ /* /.content */ }
                </div>{ /* /.footer-row */ }
        
                <div className="col-md-4 col-sm-4 footer-row">
                <div className="title"><h4>Keep Connected</h4></div>
                <p>Connect with our Social Media</p>
                <div className="content">
                    <div className="socmed-wrap">
                    <a href="https://www.facebook.com/WMHDOnlineRadio/"
                    target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/wmhdonlineradio"
                    target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.youtube.com/channel/UCt_7AV3lxKFOOhB4TIChnIg/featured"
                    target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
                    <a href="https://instagram.com/wmhdonlineradio/"
                    target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                    </div>{ /* /.socmed-wrap */ }
                </div>{ /* /.content */ }
                </div>{ /* /.footer-row */ }

                <div className="col-md-4 col-sm-4 footer-row">
                    <div className="title"><h4>View the chat</h4></div>
                    <a href="https://wmhdradio.org/discord" type="button" className="btn btn-discord">Join Our Discord</a>
                </div>{ /* /.footer-row */ }
            </div>{ /* /.container */ }
        
            </div>{ /* /.footer */ }
            { /* Footer End*/ }
        
            <section className="copyright">
                <div className="container">
                    <p>&copy; WMHD Radio {new Date().getFullYear()}. All Right Reserved</p>
                </div>
            </section>
        </>
    )
};

export default Footer