import React, {Component} from 'react';
import { connect } from 'react-redux';
import Cell from '../Cell/Cell';

import './Grid.css';

class Grid extends Component {

    render() {

        const sizeStyle = {
            width: `${this.props.xNbCell*21}px`
        };

        return (
            <div id="grid" style={sizeStyle}>
                {
                    Object.keys(this.props.cells).map((cell, i) => {
                        return (
                            <Cell key={i} data={this.props.cells[i]} id={i} />
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