import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <React.Fragment>
            <div id="footer" style={{clear:'both'}}>
                <center>
                    &copy; Studio Ghibli Universe
                    <br />
                    <img src="./826333.png" width="80" height="80" className="d-inline-block align-bottom" alt="" loading="lazy" />
                </center> 
            </div>
        </React.Fragment>
    )
}
export default Footer;