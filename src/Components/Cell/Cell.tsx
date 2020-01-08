import * as React from 'react';
import { connect } from 'react-redux';
import { updateCell } from "../../redux/actions";

import './Cell.css';
import { Dispatch } from "redux";
import { EEntityType, ICell } from "../../types";
import { ENTITIES } from "../../constants";

interface ICellProps {
    cell: ICell,
    id: number,
    updateCellFn: (id: number) => void
}

const Cell = ({ updateCellFn, cell, id }: ICellProps) => {

    const updateCell = () => {
        if (cell.type === EEntityType.EMPTY) {
            updateCellFn(id);
        }
    };

    const getCellClass = () => {
        return cell.orientation ? `${cell.type.split('_')[0]}_${cell.orientation}` : cell.type;
    };

    return (
        <div className={`cell ${id} ${getCellClass()}`} onClick={updateCell}>
            <div className="infos">
                <p className="infos_type">${cell.type}</p>
                <p className="infos_people">${cell.people}</p>
                <p className="infos_gain">${ENTITIES[cell.type].gain}</p>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateCellFn: (id: number) => dispatch(updateCell(id))
});

export default connect(null, mapDispatchToProps)(Cell);
