import * as React from "react";
import { connect } from 'react-redux';

import './Dashboard.css';
import { EEntityType, EDiff, ICell, IMoney, IState } from "../../types";
import { ENTITIES } from "../../constants";

interface IDashboard {
    cells: ICell[],
    money: IMoney,
    date: number,
    infoId: number,
}

const Dashboard = ({ cells, money, date, infoId }: any) => {

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
            <p className={'rounded'}>money : {money.value} € <span className={`money-infos ${money.indice}`}>
                <span className={`fas ${indiceClass()}`}/> ({money.diff})</span>
            </p>
            <p className={'rounded'}>houses : {getNbEntities(EEntityType.HOUSE)}</p>
            <p className={'rounded'}>shops : {getNbEntities(EEntityType.SHOP)}</p>
            {/*<div className="time inline">
                <i onClick={this.props.addTime(5000)} className="fas fa-backward"></i>
                <i onClick={this.setTime()} className={`fas ${timeClass()}`}></i>
                <i onClick={this.props.addTime(-5000)} className="fas fa-forward"></i>
            </div>*/}
            {infoId !== null && (<div className={'cell-info'}>
                <span>ID: {infoId} | {ENTITIES[cells[infoId].type as EEntityType].label} | {cells[infoId].connected ? 'connected' : 'not connected'}</span>
            </div>)}
        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    cells: state.cells,
    money: state.money,
    date: state.date,
    infoId: state.infoId
});

export default connect(mapStateToProps, null)(Dashboard);
