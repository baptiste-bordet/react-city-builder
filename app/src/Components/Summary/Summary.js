import React, {Component} from 'react';
import './Summary.css';

class Summary extends Component {


    render() {
        return (

            <div className="summary row home-block">

                <div className="">
                    <h1>En quelques lignes</h1>

                    <h5>Doctorante à l'université de Strasbourg au laboratoire de l'Icube encadrée par Pierre Gançarski et co-encadrée par Myriam Maummy-Bertrand du laboratoire IRMA. Ma thèse est soutenue et financée par l'entreprise AB Tasty.</h5>

                    <p>Doctorante depuis septembre 2016 mes sujets de prédilection sont:</p>

                    <ul>
                        <li>Les modèles de bandits</li>
                        <li>Les statistiques</li>
                        <li>Les séries temporelles</li>
                        <li>L'apprentissage par renforcement</li>
                        <li>Les systèmes de recommandation</li>
                    </ul>

                    <p>Je suis également chargée de travaux dirigés à l'E.S.I.E.A dans le module de d'estimation et analyse de donnée (M1), d'analyse exploratoire et modèle pour la data-science (M2).</p>

                    <p>Attirée par la pédagogie et les statistiques, j'explore par l'informatique et les mathématiques, les secrets du mondes qui nous entoure.</p>

                </div>

            </div>

        );
    }
}

export default Summary;
