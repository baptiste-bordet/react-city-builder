import React, {Component} from 'react';
import Actualite from '../Actualite/Actualite';
import Activites from '../Activites/Activites';
import Menu from '../Menu/Menu';
import Publications from '../Publications/Publications';
import Summary from '../Summary/Summary';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';


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

                        <div className="menu-container col-md-3 col-xs-12">
                            <Menu />
                        </div>

                        <div className="home-container col-md-9 col-xs-12">
                            <Header />
                            <Summary />
                            <Activites />
                            <Publications />
                            <Actualite />
                            <Footer />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
