import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';

class App extends Component {

    render() {

        return (
            <div>
                <Header />
                <Grid />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    step: state.step
});

export default connect(mapStateToProps, null)(App);