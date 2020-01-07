import * as React from 'react';
import { connect } from 'react-redux';
import Cell from '../Cell/Cell';

import './Grid.css';

const Grid = ({ cells, xNbCell, yNbCell, update }) => {

    const sizeStyle = {
        width: `${xNbCell*21}px`
    };

    return (
        <div id="grid" style={sizeStyle}>
            {
                Object.keys(cells).map((cell, i) => {
                    return (
                        <Cell key={i} data={cells[i]} id={i} update={update} />
                    )
                })
            }
        </div>
    );
};

const mapStateToProps = state => ({
    cells: state.cells,
    xNbCell: state.xNbCell,
    yNbCell: state.yNbCell,
    update: state.update
});


export default connect(mapStateToProps, null)(Grid);
