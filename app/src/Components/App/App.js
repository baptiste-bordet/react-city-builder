import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {

    render() {

        return (
            <div>
                <Header />
                <Dashboard />
                <Grid />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    step: state.step
});

export default connect(mapStateToProps, null)(App);