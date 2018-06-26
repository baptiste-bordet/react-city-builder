import React, {Component} from 'react';
import { connect } from 'react-redux';
import Cell from '../Cell/Cell';

import './Grid.css';

class Grid extends Component {

    render() {

        const sizeStyle = {
            width: `${this.props.xNbCell*22}px`
        };

        const nbCells = this.props.cells.size;

        return (
            <div id="grid" style={sizeStyle}>
                {this.props.update}

                {
                    [...Array(nbCells)].map((e, i) => {
                        return (
                            <Cell key={i} data={this.props.cells.get(i)} id={i} />
                        )
                    })
                }
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