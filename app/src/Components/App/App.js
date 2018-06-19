import React, { Component } from 'react';
import { initCells } from "../../redux/actions";
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Grid from '../Grid/Grid';

const xNbCell = 50;
const yNbCell = 50;

class App extends Component {

    constructor(props) {
        super(props);

        if (!this.props.cells) {
            this.props.initCells(xNbCell, yNbCell, {color: '#FFF'});
        }
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <Header />
                <Grid cells={this.props.cells} xNbCell={xNbCell} yNbCell={yNbCell} />
            </div>
        );
    }
}


const mapDispatchToProps = {
    initCells
};

export default connect(null, mapDispatchToProps)(App);