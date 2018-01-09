import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

var data = require('./data/data.json');

class App extends Component {

    state = {test: 'tata'};

    componentDidMount() {
        fetch('/api/test')
            .then(res => res.json())
            .then(jsonRes => this.setState({ test: jsonRes.world }));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">From JSON => {data.hello}</h1>
                    <h1 className="App-title">From server => {this.state.test}</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
