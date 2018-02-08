import React, {Component} from 'react';
import './Menu.css';
import profil from '../../assets/profil.jpg';

class Menu extends Component {

    render() {
        return (

            <nav>
                <div id="first-part">

                    <div className="nav-header">
                        <div id="photo-profil"></div>
                        <h1>Emmanuelle Claeys</h1>
                        <p className="description">Doctorante, enseignante et statistique lover</p>
                    </div>

                    <div className="nav-links">
                        <ul>
                            <li><a href="/#summary">En quelques lignes</a></li>
                            <li><a href="/#activites">Mes activités</a></li>
                            <li><a href="/#publications">Publications</a></li>
                            <li><a href="/#actualites">Actualites</a></li>
                        </ul>
                    </div>
                </div>

                <div className="nav-footer">
                    <ul className="icons">
                        <li><a target="_blank" href="https://twitter.com/ManueClaeys"><i className="fa fa-twitter"/></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/emmanuelle-claeys-02347974/"><i className="fa fa-linkedin"/></a></li>
                        <li><a target="_blank" href="https://github.com/manuclaeys"><i className="fa fa-github"/></a></li>
                    </ul>
                </div>

            </nav>

        );
    }
}

export default Menu;