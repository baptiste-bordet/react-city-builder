import React, {Component} from 'react';
import './Valeurs.css';
import valeursData from './valeursData.json';

class Valeurs extends Component {

    render() {
        return (
            <div id="valeurs-bloc" class="container">

                <div class="row">
                    <h1>VALEURS</h1>
                </div>

                <div class="row">
                    <p>La société Control’Air s’est spécialisée dans le contrôle des sorbonnes de laboratoire et des différents équipements de protection ventilés de laboratoire.</p>
                </div>

                <div class="row">

                    {valeursData.valeurs.map((valeur, index) => {
                        return (
                            <div class="col-md-6 valeur-item">
                                <div class="valeur-title">{valeur.titre}</div>
                                <p>{valeur.content}</p>
                            </div>

                        )
                    })}

                </div>

            </div>

        );
    }
}

export default Valeurs;