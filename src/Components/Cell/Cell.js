import * as React from 'react';
import { connect } from 'react-redux';
import { updateCell } from "../../redux/actions";

import './Cell.css';

const Cell = ({ updateCellFn, data, id }) => {

    const updateCell = () => {
        if (data.type === 'empty') {
            updateCellFn(id);
        }
    };

    return (
        <div className={`cell ${id} ${data.type}`} onClick={updateCell}>
            <div className="infos">
                <p className="infos_type">${data.type}</p>
                <p className="infos_people">${data.people}</p>
                <p className="infos_gain">${data.gain}</p>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    updateCellFn: (id) => dispatch(updateCell(id))
});

export default connect(null, mapDispatchToProps)(Cell);
