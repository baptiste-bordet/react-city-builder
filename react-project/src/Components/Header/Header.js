import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">
                    <div class="container">
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;