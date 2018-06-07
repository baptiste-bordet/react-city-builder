import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {

    render() {

        return (
            <div id="footer">
                <div className="media-wrapper">
                    <a className="linkedin-i"><i className="fab fa-linkedin"></i></a>
                    <a className="insta-i"><i className="fab fa-instagram"></i></a>
                </div>
                <p>copyright Baptiste Bordet - 2018 <i className="fa fa-copyright"/></p>
            </div>
        );

    }
}

export default Footer;
