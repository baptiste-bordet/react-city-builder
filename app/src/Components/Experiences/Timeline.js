import React, {Component} from 'react';

import './Timeline.css';

const Timeline = (props) => {

    return (
        <section className={`timeline ${props.className}`}>

            <h3>{props.data.duration}</h3>

            <ul className="timeline-list">
                {props.data.list.map((elt) => {
                    return (
                        <li>
                            <div>
                                <h4>{elt.client} - {elt.title}</h4>
                                <ul className="elt-ul">
                                    {elt.list.map((exp) => {
                                        return (
                                            <span className="elt-li">{exp}</span>
                                        )
                                    })}
                                </ul>
                                <span className="techno">{elt.technos}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

export default Timeline;
