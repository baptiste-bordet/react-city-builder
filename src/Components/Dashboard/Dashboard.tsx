import * as React from "react";
import { connect } from 'react-redux';

import './Dashboard.css';
import { EEntityType, EDiff, ICell, IMoney, IState } from "../../types";

interface IDashboard {
    cells: ICell[],
    money: IMoney,
    date: number,
}

const Dashboard = ({ cells, money, date }: any) => {

    const getNbEntities = (type: EEntityType) => {
        let counter = 0;

        Object.keys(cells).map((cell, i) => {
            if (cells[i].type === type) {
                counter++;
            }
        });

        return counter;
    };

    const indiceClass = () => {
        return money.indice === EDiff.EQUAL ? 'fa-equals' : `fa-arrow-${money.indice}`;
    };

    return (
        <div id="dashboard">
            <div className={"date"}>{date}</div>
            <p>money : {money.value} € <span className={`money-infos ${money.indice}`}>
                <span className={`fas ${indiceClass()}`}/> ({money.diff})</span>
            </p>
            <p>houses : {getNbEntities(EEntityType.HOUSE)}</p>
            <p>shops : {getNbEntities(EEntityType.SHOP)}</p>
            {/*<div className="time inline">
                <i onClick={this.props.addTime(5000)} className="fas fa-backward"></i>
                <i onClick={this.setTime()} className={`fas ${timeClass()}`}></i>
                <i onClick={this.props.addTime(-5000)} className="fas fa-forward"></i>
            </div>*/}
        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    cells: state.cells,
    money: state.money,
    date: state.date
});

export default connect(mapStateToProps, null)(Dashboard);
