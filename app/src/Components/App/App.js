import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CustomHelmet from '../Helmet/Helmet';
import Actualite from '../Actualite/Actualite';
import Activites from '../Activites/Activites';
import Menu from '../Menu/Menu';
import Publications from '../Publications/Publications';
import Summary from '../Summary/Summary';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Article from '../Article/Article';
import './App.css';
import metadata from '../../metadata/metadata.json';


class App extends Component {

    state = {world: 'tata'};

    componentDidMount() {
        fetch('/api/test')
            .then(res => res.json())
            .then(jsonRes => this.setState({ world: jsonRes.world }));
    }

    render() {
        return (
            <Router>

                <div className="App">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="menu-container col-md-3 col-xs-12">
                                <Menu />
                            </div>

                            <Route exact={true} path="/" component={()=> (
                                <div className="home-container col-md-9 col-xs-12">
                                    <CustomHelmet
                                        name={metadata.name}
                                        description={metadata.description}
                                        url={metadata.url}
                                    />
                                    <Header />
                                    <Summary />
                                    <Activites />
                                    <Publications />
                                    <Actualite />
                                    <Footer />
                                </div>
                            )} />

                            <Route exact={true} path="/article" component={()=> (
                                <div className="home-container col-md-9 col-xs-12">
                                    <CustomHelmet
                                        name={metadata.name}
                                        description={metadata.description}
                                        url={metadata.url}
                                    />
                                    <Header />
                                    <Article />
                                    <Footer />
                                </div>
                            )} />

                        </div>
                    </div>
                </div>

            </Router>
        );
    }
}

export default App;
