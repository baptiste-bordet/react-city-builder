import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';
import Dashboard from '../Dashboard/Dashboard';
import Toolbar from '../Toolbar/Toolbar';
import { execLoopTime } from "../../redux/actions";

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        setInterval(() => {
            this.props.execLoopTime();
        }, this.props.loopTime);
    }

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

const mapDispatchToProps = {
    execLoopTime
};

export default connect(null, mapDispatchToProps)(App);