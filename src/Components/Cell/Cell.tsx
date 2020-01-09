import * as React from 'react';
import { connect } from 'react-redux';
import { displayCellInfo, updateCell } from "../../redux/actions";

import './Cell.css';
import { Dispatch } from "redux";
import { EEntityType, ICell, IState } from "../../types";
import { ENTITIES, ORIGIN_CELL_ID } from "../../constants";

interface ICellProps {
    cell: ICell,
    id: number,
    selectedEntity: EEntityType,
    updateCellFn: (id: number) => void
    displayInfoFn: (id: number) => void
}

const Cell = ({ updateCellFn, displayInfoFn, cell, id, selectedEntity }: ICellProps) => {

    const handleClick = () => {
        if (cell.type === EEntityType.EMPTY && selectedEntity !== EEntityType.ERASE ||
            cell.type !== EEntityType.EMPTY && id != ORIGIN_CELL_ID && selectedEntity === EEntityType.ERASE) {
            updateCellFn(id);
        } else {
            displayInfoFn(id)
        }
    };

    const getCellClass = () => {
        return cell.orientation ? `${cell.type.split('_')[0]}_${cell.orientation}` : cell.type;
    };

    return (
        <div className={`cell ${id} ${getCellClass()} ${cell.connected ? 'connected' : ''}`} onClick={handleClick}>
            {/*<div className="infos">*/}
            {/*    <p className="infos_type">${cell.type}</p>*/}
            {/*    <p className="infos_people">${cell.people}</p>*/}
            {/*    <p className="infos_gain">${ENTITIES[cell.type].gain}</p>*/}
            {/*</div>*/}
            {!cell.connected && cell.type !== EEntityType.EMPTY && cell.type !== EEntityType.VEGETATION && cell.type !== EEntityType.ROAD && <div className={'not-connected'} />}
        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    selectedEntity: state.selectedEntity,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateCellFn: (id: number) => dispatch(updateCell(id)),
    displayInfoFn: (id: number) => dispatch(displayCellInfo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
