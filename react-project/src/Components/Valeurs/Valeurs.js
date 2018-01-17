import React, {Component} from 'react';
import './Valeurs.css';
import Valeur from './Valeur/Valeur';
import valeursData from './valeursData.json';

class Valeurs extends Component {

    render() {
        return (
            <div id="valeurs-bloc" className="container">

                <div className="row">
                    <h1>VALEURS</h1>
                </div>

                <div className="row">
                    <p>La société Control’Air s’est spécialisée dans le contrôle des sorbonnes de laboratoire et des différents équipements de protection ventilés de laboratoire.</p>
                </div>

                <div className="row">

                    {valeursData.valeurs.map(valeur => {
                        return (
                            <Valeur key={valeur.title} title={valeur.title} image={valeur.image} content={valeur.content} />
                        )
                    })}

                </div>

            </div>

        );
    }
}

export default Valeurs;