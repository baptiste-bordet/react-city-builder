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
        this.props.updateCell(this.props.id);
    }

    render() {

        return (
            <div className={`cell ${this.props.id} ${this.props.data.type}`} onClick={this.updateCell}>
            </div>
        );
    }
}

const mapDispatchToProps = {
    updateCell
};

export default connect(null, mapDispatchToProps)(Cell);