import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {

    render() {
        return (
            <div id="contact-bloc" className="container">

                <div className="row">
                    <h1>CONTACT</h1>
                </div>

                <div className="row map">

                    <div className="col-md-12">
                        <iframe title="Map contact" style={{ width: "100%", height: "350px", border: "0"}} frameBorder="0"
                                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJj2AA3rYT5kcRj4DH4s6bURA&key=AIzaSyAWptYw9X-eBqlHi1y50QsKQEHtXfrsZmE" allowFullScreen></iframe>
                    </div>

                    <div className="col-md-6 contact-details">
                        <div className="row">
                            <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>  46 Allée des Coteaux,
                            <div className="line2">93340 LE RAINCY</div>
                        </div>
                    </div>

                    <div className="col-md-6 contact-details">
                        <div className="row">
                            <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>  contact@control-air.fr
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Contact;