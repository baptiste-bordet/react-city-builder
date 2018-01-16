import React, {Component} from 'react';

import essaiReception from '../../../assets/essai_reception.png'
import mesureVitesseAirFrontale from '../../../assets/mesure_vitesse_air_frontale.jpg'

class SorbonneRoutine extends Component {

    render() {
        return (
            <div className="row detailPrestationPopin">

                <h5>Selon les normes NF EN 14175 ou XP X 15-203</h5>

                <br/>

                <ul>

                    <li><h4>Examen visuel de l'état de la sorbonne de laboratoire</h4></li>
                    <li><h4>Descriptif de la configuration du local d'implantation de la sorbonne</h4></li>
                    <li><h4>Descriptif de la configuration de la sorbonne de laboratoire contrôlée</h4></li>
                    <li><h4>Relevé des paramètres ambiants</h4></li>

                    <li>
                        <h4>Visualisation du débit d'air par test fumigène visible</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Le test a pour objectif de visualiser de manière nette les flux d'air extrait par la sorbonne au niveau de la façade mobile afin de l'étudier et de collecter des informations qualitatives sur le débit d'extraction d'air et d'étudier les interactions entre les débits d'air extrait par la sorbonne et les débits d'air issus de la compensation d'air du local.</p>
                            </div>
                            <div className="col-md-6">
                                <img src={essaiReception} alt="essai de reception"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <h4>Mesure des vitesses d'air frontales</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={mesureVitesseAirFrontale} alt="mesure des vitesses d'air frontales"/>
                            </div>
                            <div className="col-md-6">
                                <h5>Norme NF EN 14175 (Sorbonne installée après 2005)</h5>
                                <p>L'objectif des mesures lors du contrôle de routine est de déterminer tous écarts de valeurs des vitesses d'air frontales par rapport aux mesures relevées lors de l'essai de réception pour se rendre compte de l'évolution dans le temps des performances de l'équipement.</p>

                                <h5>Norme XP X 15-203 (Sorbonne installée avant 2005)</h5>
                                <p>L'objectif des mesures lors du contrôle de routine est de comparer les valeurs des vitesses d'air frontales par rapport à une valeur seuil de référence de 0,4 m/s en tous points de mesure.</p>
                            </div>

                        </div>
                    </li>

                </ul>

            </div>

        )
    }
}

export default SorbonneRoutine;