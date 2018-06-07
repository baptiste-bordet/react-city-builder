import React from 'react';

import './Timeline.css';

const Timeline = (props) => {

    return (
        <section className={`timeline ${props.className}`}>

            <h3>{props.data.duration}</h3>
            <h5>{props.data.title} <i class="fas fa-map-marker-alt"></i> {props.data.lieu}</h5>

            <ul className="timeline-list">
                {props.data.list.map((elt) => {
                    return (
                        <li>
                            <div>
                                <h4>{elt.icon ? (<i className={elt.icon}></i>) : ''}{elt.client} - {elt.title}</h4>
                                <ul className="elt-ul">
                                    {elt.list.map((exp) => {
                                        return (
                                            <span className="elt-li">{exp}</span>
                                        )
                                    })}
                                </ul>
                                {elt.technos ? (<span className="techno">{elt.technos}</span>) : ''}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

export default Timeline;
