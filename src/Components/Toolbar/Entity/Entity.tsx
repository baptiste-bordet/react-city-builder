import React from 'react';
import { connect } from 'react-redux';
import { selectEntity } from "../../../redux/actions";

import './Entity.css';
import { EEntityType, IEntity } from "../../../types";
import { Dispatch } from "redux";

interface IEntityProps {
    entity: IEntity,
    isSelected: boolean,
    selectEntityFn: (type: EEntityType) => void
}

const Entity = ({ entity, isSelected, selectEntityFn }: IEntityProps) => {

    const classes = `entity ${isSelected ? 'isSelected' : ''}`;

    return (
        <div className={classes} onClick={() => selectEntityFn(entity.type)}>
            <span className={`picto inline ${entity.type}`}/>
            <p className="inline type">{entity.label}</p>
            <p>price : {entity.price} €</p>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    selectEntityFn: (type: EEntityType) => dispatch(selectEntity(type))
});

export default connect(null, mapDispatchToProps)(Entity);
