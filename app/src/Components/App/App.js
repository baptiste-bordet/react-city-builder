import React, {Component} from 'react';
import Actualite from '../Actualite/Actualite';
import APropos from '../APropos/APropos';
import Menu from '../Menu/Menu';
import Publications from '../Publications/Publications';
import Summary from '../Summary/Summary';
import './App.css';
import logo from '../../assets/logo-control-air.jpg';

var data = require('../../data/data.json');

class App extends Component {

    state = {world: 'tata'};

    componentDidMount() {
        fetch('/api/test')
            .then(res => res.json())
            .then(jsonRes => this.setState({ world: jsonRes.world }));
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 col-lg-3">
                            <Menu />
                        </div>
                        <div className="col-sm-9 col-lg-9 home-container">
                            <Summary className="summary" />
                            <APropos className="a-propos" />
                            <Publications className="publications" />
                            <Actualite className="actualite" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
