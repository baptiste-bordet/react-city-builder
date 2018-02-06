import React, {Component} from 'react';
import './Summary.css';

class Summary extends Component {


    render() {
        return (

            <div className="summary row home-block">

                <div className="">
                    <h1>En quelques lignes</h1>

                    <h5>Doctorante à l'<a target="_blank" href="https://www.unistra.fr/index.php?id=accueil&utm_source=unistra_fr&utm_medium=unistra_fr_homepage">Université de Strasbourg</a> au laboratoire de l'<a target="_blank" href="https://icube.unistra.fr/">Icube</a> encadrée par  <a target="_blank" href="http://icube-bfo.unistra.fr/index.php/Pierre_Gan%C3%A7arski">Pierre Gançarski</a> et co-encadrée par <a target="_blank" href="http://irma.math.unistra.fr/~mmaumy/">Myriam Maummy-Bertrand</a> du <a target="_blank" href="http://irma.math.unistra.fr/">laboratoire IRMA</a>. Ma thèse est soutenue et financée par l'entreprise AB Tasty<a target="_blank" href="https://www.abtasty.com/fr/"/>.</h5>

                    <p>Doctorante depuis septembre 2016 mes sujets de prédilection sont:</p>

                    <ul>
                        <li>Les modèles de bandits</li>
                        <li>Les statistiques</li>
                        <li>Les séries temporelles</li>
                        <li>L'apprentissage par renforcement</li>
                        <li>Les systèmes de recommandation</li>
                    </ul>

                    <p>Je suis également chargée de travaux dirigés à l'<a target="_blank" href="https://www.esiea.fr">E.S.I.E.A</a> dans le module de d'<a target="_blank" href="https://www.esiea.fr/wp-content/uploads/2017/12/4eAnnee.jpg">estimation et analyse de données (M1)</a>, <a target="_blank" href="https://www.esiea.fr/wp-content/uploads/2017/12/5eAnneeAlaCarte.jpg">d'analyse exploratoire et modèle pour la data-science (M2)</a>.</p>

                    <p>Attirée par la pédagogie et les statistiques, j'explore par l'informatique et les mathématiques, les secrets du mondes qui nous entoure.</p>

                </div>

            </div>

        );
    }
}

export default Summary;
