import React, {Component} from 'react';
import './Menu.css';
import profil from '../../assets/manue.jpg';

class Menu extends Component {

    render() {
        return (

            <nav className="navbar navbar-default navbar-fixed-side">

                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <img src={profil} alt="profil" />
                        <h1>Emmanuelle Claeys</h1>
                        <p className="description">Doctorante, enseignante et statistique lover</p>
                    </div>

                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="#">A propos</a></li>
                            <li><a href="#">Activités</a></li>
                            <li><a href="#">Recherche</a></li>
                            <li><a href="#">Enseignement</a></li>
                            <li><a href="#">Autre</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">CV</a></li>
                        </ul>
                    </div>

                    <div className="nav-bar-footer">
                        <ul class="icons">
                            <li><a class="icon fa-twitter"><span>Twitter</span></a></li>
                            <li><a class="icon fa-facebook"><span>Facebook</span></a></li>
                            <li><a class="icon fa-instagram"><span>Instagram</span></a></li>
                            <li><a class="icon fa-github"><span>Github</span></a></li>
                            <li><a class="icon fa-envelope"><span>Email</span></a></li>
                        </ul>
                    </div>
                </div>

            </nav>

        );
    }
}

export default Menu;