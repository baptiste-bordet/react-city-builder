import React, {Component} from 'react';
import { connect } from 'react-redux';
import Cell from '../Cell/Cell';

import './Grid.css';

class Grid extends Component {

    render() {

        const sizeStyle = {
            width: `${this.props.xNbCell*22}px`
        };

        return (
            <div id="grid" style={sizeStyle}>
                {this.props.update}

                {this.props.cells.map((item, i) => {
                    return (
                        item.map((cell, j)  => {
                        return (
                            <Cell key={`${i}-${j}`} data={this.props.cells[i][j]} x={i} y={j} />
                        )
                    }))
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cells: state.cells,
    xNbCell: state.xNbCell,
    yNbCell: state.yNbCell,
    update: state.update
});

export default connect(mapStateToProps, null)(Grid);