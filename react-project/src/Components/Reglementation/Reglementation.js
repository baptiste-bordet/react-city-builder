import React, {Component} from 'react';
import './Reglementation.css';
import diagEssais1 from '../../assets/diag_essais_1.svg';
import diagEssais2 from '../../assets/diag_essais_2.svg';

class Reglementation extends Component {

    render() {
        return (
            <div id="reglementation-bloc" className="container">

                <div className="row">
                    <h1>REGLEMENTATION</h1>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        <p><b>Les arrêtés du 8 et 9 octobre 1987</b>, relatifs au contrôle des installations d'aération et
                            d'assainissement des locaux de travail à pollution spécifique, fixent les conditions dans lesquelles le
                            chef d'établissement doit assurer régulièrement le contrôle des installations d'aération et
                            d'assainissement des locaux de travail.</p>

                        <ul>
                            <li>Etablissement du <b>dossier de référence</b> de l'équipement un mois après la mise en service</li>
                            <li><b>Contrôle périodique</b> de l'équipement au minimum une fois par an</li>
                        </ul>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h2>Norme NF EN 14175 et NF X 15-206</h2>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-7 diagramSVG">
                        <img src={diagEssais1} alt="Diagramme essais" />
                    </div>

                    <div className="col-md-5">

                        <h3>Essai de type</h3>
                        <p>Evaluer les qualités intrinsèques de la sorbonne placée dans des conditions de mesure contrôlées.</p>

                        <h3>Essai de réception</h3>
                        <p>Evaluer les performances aérauliques de la sorbonne dans son local d’implantation. Etablissement du
                            dossier de référence de l’équipement.</p>

                        <h3>Essai de qualification</h3>
                        <p>Evaluer les performances aérauliques de la sorbonne dans son local d’implantation n’ayant pas subi
                            d’essai de type.</p>

                        <h3>Essai de routine</h3>
                        <p>Contrôle annuel pour vérifier l’évolution des performances dans le temps et dans les conditions réelles
                            d’utilisation.</p>

                    </div>

                </div>

                <div className="row norme-vigueur-row">

                    <div className="col-md-5 norme-vigueur">

                        <h3>Normes en vigueur</h3>
                        <p>NF EN 14175 et NF X 15-206</p>

                        <h3>Normes en vigueur</h3>
                        <p>NF EN 14175 ou XP X 15-203</p>

                    </div>

                    <div className="col-md-7 diagram2SVG">
                        <img src={diagEssais2} alt="Diagramme essais" />
                    </div>

                </div>

            </div>
        );
    }
}

export default Reglementation;