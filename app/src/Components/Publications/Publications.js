import React, {Component} from 'react';
import './Publications.css';

class Publications extends Component {


    render() {
        return (

            <div id="publications" className="row home-block">

                <div>
                    <h2 className="title">Publications</h2>

                    <div className="col-md-6">
                        <div className="type-publication">Papier International</div>
                        <ul>
                            <li>Les modèles de bandits</li>
                            <li>Les modèles de bandits</li>
                        </ul>

                        <div className="type-publication">Papier National</div>
                        <ul>
                            <li>Les modèles de bandits</li>
                            <li>Les modèles de bandits</li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <div className="type-publication">Workshop</div>
                            <ul>
                                <li>Les modèles de bandits</li>
                                <li>Les modèles de bandits</li>
                            </ul>

                            <div className="type-publication">Poster</div>
                            <ul>
                                <li>Les modèles de bandits</li>
                                <li>Les modèles de bandits</li>
                            </ul>

                    </div>

                </div>
            </div>



        );
    }
}

export default Publications;
