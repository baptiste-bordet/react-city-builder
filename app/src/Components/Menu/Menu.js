import React, {Component} from 'react';
import './Menu.css';
import profil from '../../assets/manue.jpg';

class Menu extends Component {

    render() {
        return (

            <nav>

                <div className="nav-header">
                    <img src={profil} alt="profil" />
                    <h1>Emmanuelle Claeys</h1>
                    <p className="description">Doctorante, enseignante et statistique lover</p>
                </div>

                <div className="nav-links">
                    <ul>
                        <li><a href="#a-propos">A propos</a></li>
                        <li><a href="#actualites">Actualites</a></li>
                        <li><a href="#publications">Publications</a></li>
                        <li><a href="#enseignement">Enseignement</a></li>
                        <li><a href="#cv">CV</a></li>
                    </ul>
                </div>

                <div className="nav-footer">
                    <ul className="icons">
                        <li><a href="#"><i className="fa fa-twitter"/></a></li>
                        <li><a href="#"><i className="fa fa-facebook"/></a></li>
                        <li><a href="#"><i className="fa fa-instagram"/></a></li>
                        <li><a href="#"><i className="fa fa-github"/></a></li>
                        <li><a href="#"><i className="fa fa-envelope"/></a></li>
                    </ul>
                </div>

            </nav>

        );
    }
}

export default Menu;