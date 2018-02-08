import React, {Component} from 'react';
import './Actualite.css';
import photoActualite from '../../assets/photo-actualite.jpg';

class Actualite extends Component {

    goToArticle(article) {
        window.open(article);
    }

    render() {
        return (

            <div id="actualites" className="row home-block">

                <div>
                    <h2 className="title">Actualité</h2>

                    <div className="row actualite" onClick={() => this.goToArticle('https://lejournal.cnrs.fr/billets/bioethique-faut-il-repenser-la-filiation')}>
                        <div className="col-md-6 col-xs-12">
                            <img src={photoActualite} alt="photoActualite" />
                        </div>

                        <div className="col-md-6 col-xs-12">
                            <p> À partir du 18 janvier s'ouvrent les États généraux de la bioéthique. Jusqu'au 7 juillet, une soixantaine de débats vont être organisés partout en France pour faire le point sur l'évolution de la science médicale et sur son utilisation dans notre société. Le gouvernement présentera ensuite un projet de loi à l'automne.</p>
                            <p>Cette vaste concertation, pilotée par le Comité consultatif national d'éthique (CCNE) et déclinée en régions, s'adressera à tous : médecins, experts, associations mais aussi simples citoyens et jeunes, avec des débats dédiés aux étudiants et lycéens. La phase de débats sera close début juillet par un événement placé sous l'égide du Président de la République.</p>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Actualite;
