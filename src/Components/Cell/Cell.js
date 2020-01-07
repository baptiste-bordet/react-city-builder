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
        if (this.props.data.type === 'empty') {
            this.props.updateCell(this.props.id);
        }
    }

    render() {

        return (
            <div className={`cell ${this.props.id} ${this.props.data.type}`} onClick={this.updateCell}>
                <div className="infos">
                    <p className="infos_type">${this.props.data.type}</p>
                    <p className="infos_people">${this.props.data.people}</p>
                    <p className="infos_gain">${this.props.data.gain}</p>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    updateCell
};

export default connect(null, mapDispatchToProps)(Cell);