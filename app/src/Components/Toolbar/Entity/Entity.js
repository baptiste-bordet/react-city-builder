import React, {Component} from 'react';

import './Entity.css';

class Entity extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={`entity ${this.props.isSelected ? 'isSelected' : ''}`}>
                <span className={`picto inline ${this.props.entity.type}`}></span>
                <p className="inline">{this.props.entity.type}</p>
                <p>price : {this.props.entity.price} €</p>
            </div>
        );
    }
}

export default Entity;