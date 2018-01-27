import React, {Component} from 'react';
import APropos from '../APropos/APropos';
import Menu from '../Menu/Menu';
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
                        <div className="col-sm-3 col-lg-2">
                            <Menu />
                        </div>
                        <div className="col-sm-9 col-lg-10 home-container">
                            <Summary className="summary" />
                            <APropos className="a-propos" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
