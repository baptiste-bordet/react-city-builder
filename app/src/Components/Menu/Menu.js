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
                        <li><a href="#">A propos</a></li>
                        <li><a href="#">Activités</a></li>
                        <li><a href="#">Recherche</a></li>
                        <li><a href="#">Enseignement</a></li>
                        <li><a href="#">Autre</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">CV</a></li>
                    </ul>
                </div>

                <div className="nav-footer">
                    <ul className="icons">
                        <li><a className="icon fa-twitter"><span>Twitter</span></a></li>
                        <li><a className="icon fa-facebook"><span>Facebook</span></a></li>
                        <li><a className="icon fa-instagram"><span>Instagram</span></a></li>
                        <li><a className="icon fa-github"><span>Github</span></a></li>
                        <li><a className="icon fa-envelope"><span>Email</span></a></li>
                    </ul>
                </div>

            </nav>

        );
    }
}

export default Menu;