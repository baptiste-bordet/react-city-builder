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
                        <div className="elt" key={elt}>{elt}</div>
                    )
                })}
            </div>
        </div>
    )

};

export default List;
