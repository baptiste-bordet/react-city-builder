import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Dashboard.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.getNbEntities = this.getNbEntities.bind(this);
    }

    getNbEntities(type) {
        let counter = 0;

        Object.keys(this.props.cells).map((cell, i) => {
            if (this.props.cells[i].type.startsWith(type)) {
                counter++;
            }
        });

        return counter;
    }

    render() {

        const indiceClass = () => {
            return this.props.indice === 'equal' ? 'fa-equals' : `fa-arrow-${this.props.indice}`;
        };

        return (
            <div id="dashboard">
                <p>money : {this.props.money} € <span class={`fas ${indiceClass()}`}></span></p>
                <p>houses : {this.getNbEntities('house')}</p>
                <p>shops : {this.getNbEntities('shop')}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cells: state.cells,
    update: state.update,
    money: state.money,
    indice: state.indice
});

export default connect(mapStateToProps, null)(Dashboard);