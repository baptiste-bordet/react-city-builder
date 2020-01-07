import * as React from "react";
import { useEffect } from "react";
import Header from '../Header/Header';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';
import Dashboard from '../Dashboard/Dashboard';
import Toolbar from '../Toolbar/Toolbar';
import { execLoopTime } from "../../redux/actions";

import './App.css';
import { LOOP_TIME } from "../../constants";

const App = ({ execLoopTimeFn }) => {

    useEffect(() => {
        setInterval(() => {
            execLoopTimeFn();
        }, LOOP_TIME);
    }, []);

    return (
        <div id="app">
            <Header/>
            <Dashboard/>
            <Toolbar/>
            <Grid/>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    execLoopTimeFn: () => dispatch(execLoopTime())
});

export default connect(null, mapDispatchToProps)(App);
