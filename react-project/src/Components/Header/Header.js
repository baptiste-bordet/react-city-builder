import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div id="header-bloc">

                <div class="row header-row">
                    <div class="col-md-6 header-image">
                        {/*<img />*/}
                        <h3>Contrôle - Expertise - Conseil</h3>
                    </div>
                    <div class="col-md-6 header-text">
                        {/*<img />*/}
                    </div>
                </div>

                <div class="row sentance">
                    <h2>Spécialiste en mesure et analyse des comportements aérauliques</h2>
                </div>

            </div>

        );
    }
}

export default Header;