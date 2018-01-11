import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {

    render() {
        return (
            <header className="App-Menu">

                <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">

                    <div class="container-fluid">

                        <div class="navbar-menu">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>

                        <div class="collapse navbar-collapse" id="navigationbar">
                            <ul class="nav navbar-nav">
                                <li class="active-elt">
                                    <a href="#reglementation-bloc">reglementation</a>
                                </li>
                                <li>
                                    <a href="#prestations-bloc">Prestations</a>
                                </li>
                                <li>
                                    <a href="#valeurs-bloc">Valeurs</a>
                                </li>
                                <li>
                                    <a href="#devis-bloc">Devis</a>
                                </li>
                                <li>
                                    <a href="#contact-bloc">Contact</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </nav>

            </header>
        );
    }
}

export default Menu;