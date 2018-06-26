import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectEntity } from "../../../redux/actions";

import './Entity.css';

class Entity extends Component {

    constructor(props) {
        super(props);

        this.selectEntity = this.selectEntity.bind(this);
    }

    selectEntity() {
        this.props.selectEntity(this.props.entity);
    }

    render() {

        const classes = `entity ${this.props.isSelected ? 'isSelected' : ''}`;
        const entity = this.props.entity;

        return (
            <div className={classes} onClick={this.selectEntity} >
                <span className={`picto inline ${entity.type}`}></span>
                <p className="inline">{entity.type}</p>
                <p>price : {entity.price} €</p>
            </div>
        );
    }
}

const mapDispatchToProps = {
    selectEntity
};

export default connect(null, mapDispatchToProps)(Entity);