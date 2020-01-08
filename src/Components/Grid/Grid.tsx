import * as React from 'react';
import { connect } from 'react-redux';
import Cell from '../Cell/Cell';

import './Grid.css';
import { ICell, IState } from "../../types";
import { X_NB_CELL } from "../../constants";

interface IGrid {
    cells: ICell[]
}

const Grid = ({ cells }: any) => {

    const sizeStyle = {
        width: `${X_NB_CELL * 21}px`
    };

    return (
        <div id="grid" style={sizeStyle}>
            {
                Object.keys(cells).map((cell, i) => {
                    return (
                        <Cell key={i} cell={cells[i]} id={i} />
                    )
                })
            }
        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    cells: state.cells,
});


export default connect(mapStateToProps, null)(Grid);
