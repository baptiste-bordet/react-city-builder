import React, {Component} from 'react';
import './Publications.css';

class Publications extends Component {


    render() {
        return (

            <div id="publications" className="row home-block">

                <div>
                    <h2 className="title">Publications</h2>

                    <div>
                        <div className="type-publication">Papier International</div>
                        <ul>
                            <li>Emmanuelle Claeys, Pierre Gançarski, Myriam Maumy-Bertrand, Hubert Wassner: Regression Tree for Bandits Models in A/B Testing. IDA 2017: 52-62</li>
                        </ul>

                        <div className="type-publication">Papier National</div>
                        <ul>
                            <li>Emmanuelle Claeys, Pierre Gançarski, Myriam Maumy-Bertrand: Approche contextuelle par régression pour les tests A/B. In EGC 2018, pp.269-274</li>
                            <li>Emmanuelle Claeys, Pierre Gançarski, Myriam Maumy-Bertrand, Hubert Wassner: Approche paramétrique de bandits pour le test A/B. APIA 2017: 19-25</li>
                            <li>Emmanuelle Claeys, Pierre Gançarski, Myriam Maumy-Bertrand, Hubert Wassner: Conception d’un modèle généraliste pour l’évaluation d’un test A/B. EGC 2017: 423-424</li>
                        </ul>
                    </div>

                </div>
            </div>



        );
    }
}

export default Publications;
