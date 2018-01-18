import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import Sorbonne from '../Sorbonne/Sorbonne';
import Reglementation from '../Reglementation/Reglementation';
import Prestations from '../Prestations/Prestations';
import Valeurs from '../Valeurs/Valeurs';
import Devis from '../Devis/Devis';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './App.css';

var data = require('../../data/data.json');

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
                <Menu />
                <Header />
                <Sorbonne />
                <Reglementation />
                <Prestations />
                <Valeurs />
                <Devis />
                <Contact />
                <Footer />

                <h1 className="App-title">From JSON => {data.hello}</h1>
                <h1 className="App-title">From server => {this.state.test}</h1>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
