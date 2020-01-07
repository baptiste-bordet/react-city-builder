import * as React from "react";
import { connect } from 'react-redux';
import { addTime, setTime } from "../../redux/actions";

import './Dashboard.css';
import { LOOP_TIME } from "../../constants";

const Dashboard = ({ cells, date, money, setTimeFn, addTimeFn }) => {

    const getNbEntities = (type) => {
        let counter = 0;

        Object.keys(cells).map((cell, i) => {
            if (cells[i].type.startsWith(type)) {
                counter++;
            }
        });

        return counter;
    };

    const setTime = () => {
        if (LOOP_TIME === 99999999) {
            setTimeFn(10000);
        } else {
            setTimeFn(99999999);
        }
    };

    const indiceClass = () => {
        return money.indice === 'equal' ? 'fa-equals' : `fa-arrow-${money.indice}`;
    };

    const timeClass = () => {
        return LOOP_TIME === 99999999 ? 'fa-play' : 'fa-pause';
    };

    return (
        <div id="dashboard">
            <p>money : {money.value} € <span className="money_infos"><span
                class={`fas ${indiceClass()}`}></span> ({money.diff})</span></p>
            <p>houses : {getNbEntities('house')}</p>
            <p>shops : {getNbEntities('shop')}</p>
            <span>{date}</span>
            {/*<div className="time inline">
                <i onClick={this.props.addTime(5000)} className="fas fa-backward"></i>
                <i onClick={this.setTime()} className={`fas ${timeClass()}`}></i>
                <i onClick={this.props.addTime(-5000)} className="fas fa-forward"></i>
            </div>*/}
        </div>
    );
}

const mapStateToProps = state => ({
    cells: state.cells,
    update: state.update,
    money: state.money,
    date: state.date
});

const mapDispatchToProps = (dispatch) => ({
    setTimeFn: () => dispatch(setTime()),
    addTimeFn: () => dispatch(addTime())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
