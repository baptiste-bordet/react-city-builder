import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';
import Dashboard from '../Dashboard/Dashboard';
import Toolbar from '../Toolbar/Toolbar';

import './App.css';

class App extends Component {

    render() {

        return (
            <div id="app">
                <Header />
                <Dashboard />
                <Toolbar />
                <Grid />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    step: state.step
});

export default connect(mapStateToProps, null)(App);