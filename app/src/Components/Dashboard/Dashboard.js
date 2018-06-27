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
            return this.props.money.indice === 'equal' ? 'fa-equals' : `fa-arrow-${this.props.money.indice}`;
        };

        return (
            <div id="dashboard">
                <p>money : {this.props.money.value} € <span className="money_infos"><span class={`fas ${indiceClass()}`}></span> ({this.props.money.diff})</span></p>
                <p>houses : {this.getNbEntities('house')}</p>
                <p>shops : {this.getNbEntities('shop')}</p>
                <span>{this.props.date}</span>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cells: state.cells,
    update: state.update,
    money: state.money,
    date: state.date
});

export default connect(mapStateToProps, null)(Dashboard);