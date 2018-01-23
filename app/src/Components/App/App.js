import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import Projets from '../Projets/Projets';
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
                        <div className="col-sm-3 col-lg-2">
                            <Menu />
                        </div>
                        <div className="col-sm-9 col-lg-10">
                            <Projets />
                            <h1 className="App-title">From JSON => {data.hello}</h1>
                            <h1 className="App-title">From server => {this.state.world}</h1>
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
