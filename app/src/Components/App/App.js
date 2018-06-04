import React, {Component} from 'react';
import { connect } from 'react-redux';
import Flags from '../Flags/Flags';
import Header from '../Header/Header';
import Infos from '../Infos/Infos';
import Technos from '../Technos/Technos';
import { Parallax } from 'react-spring';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.goToPage = this.goToPage.bind(this);
    }

    goToPage(page) {
        this.parallax.scrollTo(page);
    }

    render() {

        return (
            <div className="app-container">
                <Flags />
                <Header />
                <Infos />
                <Technos />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps, null)(App);