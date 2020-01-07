import React from 'react';
import { connect } from 'react-redux';
import { selectEntity } from "../../../redux/actions";

import './Entity.css';

const Entity = ({ entity, isSelected, selectEntityFn }) => {

    const classes = `entity ${isSelected ? 'isSelected' : ''}`;

    return (
        <div className={classes} onClick={() => selectEntityFn(entity.type)}>
            <span className={`picto inline ${entity.type}`}/>
            <p className="inline type">{entity.type}</p>
            <p>price : {entity.price} €</p>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    selectEntityFn: (type) => dispatch(selectEntity(type))
});

export default connect(null, mapDispatchToProps)(Entity);
