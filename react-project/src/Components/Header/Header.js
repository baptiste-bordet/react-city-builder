import React, {Component} from 'react';
import './Header.css';
import logo from '../../assets/logo-control-air.jpg';
import visu from '../../assets/visu-control-air.png';

class Header extends Component {

    render() {
        return (
            <div id="header-bloc">

                <div className="row header-row">
                    <div className="col-md-6 col-xs-12 header-logo">
                        <img src={logo} alt="logo" />
                        <h3>Contrôle - Expertise - Conseil</h3>
                    </div>
                    <div className="col-md-6 col-xs-12 header-visu">
                        <img src={visu} alt="visuel" />
                    </div>
                </div>

                <div className="row sentance">
                    <h2>Spécialiste en mesure et analyse des comportements aérauliques</h2>
                </div>

            </div>

        );
    }
}

export default Header;