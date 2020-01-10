import * as React from 'react';
import { connect } from 'react-redux';
import { displayCellInfo, updateCell } from "../../redux/actions";
import * as pictos from '../../assets';

import './Cell.css';
import { Dispatch } from "redux";
import { EEntityType, ICell, IState } from "../../types";
import { ORIGIN_CELL_ID } from "../../constants";

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

    const handleMouseOver = (event: React.MouseEvent) => {
        if (event.buttons === 1 && cell.type === EEntityType.EMPTY && selectedEntity !== EEntityType.ERASE ||
            event.buttons === 1 && cell.type !== EEntityType.EMPTY && id != ORIGIN_CELL_ID && selectedEntity === EEntityType.ERASE) {
            updateCellFn(id);
        }
    };

    const getStyle = () => {
        let pictoName = null;

        if (cell.type === EEntityType.EMPTY) {
            pictoName = cell.emptyType;
        } else {
            pictoName = cell.orientation ? `${cell.type.split('_')[0]}_${cell.orientation}` : cell.type;
        }

        // @ts-ignore
        return { backgroundImage: `url(${pictos[pictoName]})` };
    };

    return (
        <div style={getStyle()} className={`cell ${id} ${cell.connected ? 'connected' : ''}`}
             onMouseOver={(e) => handleMouseOver(e)} onMouseDown={handleClick}>
            {!cell.connected && cell.type !== EEntityType.EMPTY && cell.type !== EEntityType.VEGETATION && cell.type !== EEntityType.ROAD &&
            <span className={'not-connected'}/>}
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
