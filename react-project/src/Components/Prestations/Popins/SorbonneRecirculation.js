import React, {Component} from 'react';

class SorbonneRecirculation extends Component {

    render() {
        return (
            <div className="row detailPrestationPopin">

                <h2>Sorbonne de laboratoire - Essai de recirculation</h2>

                <h5>Selon la norme NF X 15-211</h5>
                <br/>
                <ul>
                    <li><h4>Examen visuel de l'état de la sorbonne de laboratoire</h4></li>
                    <li><h4>Configuration du local d'implantation de la sorbonne de laboratoire</h4></li>
                    <li><h4>Configuration de la sorbonne de laboratoire contrôlée</h4></li>
                    <li><h4>Paramètres ambiants</h4></li>
                    <li><h4>Visualisation du débit d'air par test fumigène visible</h4></li>
                    <li><h4>Mesure des vitesses d'air frontales</h4></li>
                </ul>
            </div>
        )
    }
}

export default SorbonneRecirculation;