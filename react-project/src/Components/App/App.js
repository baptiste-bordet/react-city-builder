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
            </div>
        );
    }
}

export default App;
