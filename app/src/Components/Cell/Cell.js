import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateCell } from "../../redux/actions";

import './Cell.css';

class Cell extends Component {

    constructor(props) {
        super(props);

        this.updateCell = this.updateCell.bind(this);
    }

    updateCell() {
        this.props.updateCell(this.props.x, this.props.y, {color: '#000'});
    }

    render() {

        const cellStyle = {
            color: this.props.data.color
        };

        return (
            <div className="cell" style={cellStyle} onClick={this.updateCell}>
            </div>
        );
    }
}

const mapDispatchToProps = {
    updateCell
};

export default connect(null, mapDispatchToProps)(Cell);