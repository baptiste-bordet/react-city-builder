import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Dashboard.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.getNbHouse = this.getNbHouse.bind(this);
    }

    getNbHouse() {
        let houseCounter = 0;

        Object.keys(this.props.cells).map((cell, i) => {
            if (this.props.cells[i].type.startsWith('house')) {
                houseCounter++;
            }
        });

        return houseCounter;
    }

    render() {
        return (
            <div id="dashboard">
                <p>money : {this.props.money} €</p>
                <p>houses : {this.getNbHouse()}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cells: state.cells,
    update: state.update,
    money: state.money
});

export default connect(mapStateToProps, null)(Dashboard);