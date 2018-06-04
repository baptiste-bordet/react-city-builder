import React from 'react';

const List = (props) => {

    return (
        <div className="list">

            <div className="title">
                <i className={`fas ${props.elt.icon}`}></i>
                <h3>{props.elt.label}</h3>
            </div>

            <div className="list-elt">
                {props.elt.list.map((elt) => {
                    return (
                        <span key={elt}>{elt}</span>
                    )
                })}
            </div>
        </div>
    )

};

export default List;
