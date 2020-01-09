import * as React from 'react';
import { connect } from 'react-redux';
import { updateCell } from "../../redux/actions";

import './Cell.css';
import { Dispatch } from "redux";
import { EEntityType, ICell, IState } from "../../types";
import { ENTITIES, ORIGIN_CELL_ID } from "../../constants";

interface ICellProps {
    cell: ICell,
    id: number,
    selectedEntity: EEntityType,
    updateCellFn: (id: number) => void
}

const Cell = ({ updateCellFn, cell, id, selectedEntity }: ICellProps) => {

    const updateCell = () => {
        if (cell.type === EEntityType.EMPTY && selectedEntity !== EEntityType.ERASE ||
            cell.type !== EEntityType.EMPTY && id != ORIGIN_CELL_ID && selectedEntity === EEntityType.ERASE) {
            updateCellFn(id);
        }
    };

    const getCellClass = () => {
        return cell.orientation ? `${cell.type.split('_')[0]}_${cell.orientation}` : cell.type;
    };

    return (
        <div className={`cell ${id} ${getCellClass()} ${cell.connected ? 'connected' : ''}`} onClick={updateCell}>
            <div className="infos">
                <p className="infos_type">${cell.type}</p>
                <p className="infos_people">${cell.people}</p>
                <p className="infos_gain">${ENTITIES[cell.type].gain}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    selectedEntity: state.selectedEntity,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateCellFn: (id: number) => dispatch(updateCell(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
