import React, {Component} from 'react';

import testFumigeneVideo from '../../../assets/test_fumigene_visible.mp4'
import mesureVitesseAirFrontale from '../../../assets/mesure_vitesse_air_frontale.jpg'
import mesureVitesseAirAmbiante from '../../../assets/mesure_vitesse_air_ambiante.jpg'
import mesureConfinementGaz from '../../../assets/mesure_confinement_gaz_traceur_SF6.jpg'

class SorbonneReception extends Component {

    render() {
        return (
            <div className="row detailPrestationPopin">

                <h5>Selon les normes NF EN 14175 et NF X 15-206</h5>

                <br/>

                <ul>

                    <li><h4>Examen visuel de l'état de la sorbonne de laboratoire</h4></li>
                    <li><h4>Descriptif de la configuration du local d'implantation de la sorbonne</h4></li>
                    <li><h4>Descriptif de la configuration de la sorbonne de laboratoire contrôlée</h4></li>
                    <li><h4>Relevé des paramètres ambiants du local</h4></li>

                    <li>
                        <h4>Visualisation du débit d'air par test fumigène visible</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Le test a pour objectif de visualiser de manière nette les flux d'air extrait par la sorbonne au
                                    niveau de la façade mobile afin de l'étudier et de collecter des informations qualitatives sur
                                    le débit d'extraction d'air et d'étudier les interactions entre les débits d'air extrait par la
                                    sorbonne et les débits d'air issus de la compensation d'air du local.</p>
                            </div>
                            <div className="col-md-6">
                                <video width="369" height="246" controls>
                                    <source src={testFumigeneVideo} type="video/mp4" />Your browser does not support the video tag.
                                </video>
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
                                <p>L'objectif de l'essai est d'évaluer l'homogénéité des mesures de vitesses d'air frontales
                                    relevées dans le plan de la façade mobile afin de s'assurer d'un débit d'air extrait convenable
                                    au bon fonctionnement de la sorbonne. Le positionnement des sondes de mesures se fait en
                                    fonction de la longueur d'ouverture de l'équipement.</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <h4>Mesure de la vitesse d'air ambiante</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <p>L'objectif de l'essai est d'évaluer l'homogénéité des mesures de vitesses d'air frontales
                                    relevées dans le plan de la façade mobile afin de s'assurer d'un débit d'air extrait convenable
                                    au bon fonctionnement de la sorbonne. Le positionnement des sondes de mesures se fait en
                                    fonction de la longueur d'ouverture de l'équipement.</p>
                            </div>
                            <div className="col-md-6">
                                <img src={mesureVitesseAirAmbiante} alt="mesure de la vitesse d'air ambiante"/>
                            </div>
                        </div>
                    </li>

                    <li>
                        <h4>Mesure de confinement au gaz traceur SF6</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Le test de confinement a pour objectif de s'assurer du bon fonctionnement de la sorbonne dans son
                                    local d'implantation, en quantifiant le confinement en fonction des paramètres aérauliques du
                                    local d'implantation de l'équipement. Le positionnement des points de mesure est fonction de la
                                    longueur d'ouverture de l'équipement.</p>
                            </div>
                            <div className="col-md-6">
                                <img src={mesureConfinementGaz} alt="mesure de confinement au gaz traceur SF6"/>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>

        )
    }
}

export default SorbonneReception;