import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {

    render() {
        return (
            <header className="App-Menu">

                <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">

                    <div className="container-fluid">

                        <div className="navbar-menu">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="navigationbar">
                            <ul className="nav navbar-nav">
                                <li className="active-elt">
                                    <a href="#lien1-bloc">Lien 1</a>
                                </li>
                                <li>
                                    <a href="#lien2-bloc">Lien 2</a>
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