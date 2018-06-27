import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTime, setTime } from "../../redux/actions";

import './Dashboard.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.getNbEntities = this.getNbEntities.bind(this);
        this.setTime = this.setTime.bind(this);
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

    setTime() {
        if (this.props.loopTime === 99999999) {
            this.props.setTime(10000);
        } else {
            this.props.setTime(99999999);
        }
    }

    render() {

        const indiceClass = () => {
            return this.props.money.indice === 'equal' ? 'fa-equals' : `fa-arrow-${this.props.money.indice}`;
        };

        const timeClass = () => {
            return this.props.loopTime === 99999999 ? 'fa-play' : 'fa-pause';
        };

        return (
            <div id="dashboard">
                <p>money : {this.props.money.value} € <span className="money_infos"><span class={`fas ${indiceClass()}`}></span> ({this.props.money.diff})</span></p>
                <p>houses : {this.getNbEntities('house')}</p>
                <p>shops : {this.getNbEntities('shop')}</p>
                <span>{this.props.date}</span>
                {/*<div className="time inline">
                    <i onClick={this.props.addTime(5000)} className="fas fa-backward"></i>
                    <i onClick={this.setTime()} className={`fas ${timeClass()}`}></i>
                    <i onClick={this.props.addTime(-5000)} className="fas fa-forward"></i>
                </div>*/}
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

const mapDispatchToProps = {
    setTime,
    addTime
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);