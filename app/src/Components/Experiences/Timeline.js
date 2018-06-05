import React, {Component} from 'react';

import './Timeline.css';

const Timeline = (props) => {

    return (
        <section class="timeline">
            <ul>
                {props.data.list.map((elt) => {
                    return (
                        <li>
                            <div>
                                <h4>{elt.client} - {elt.title}</h4>
                                <time>{elt.duration}</time>
                                <ul className="elt-ul">
                                    {elt.list.map((exp) => {
                                        return (
                                            <span className="elt-li">{exp}</span>
                                        )
                                    })}
                                </ul>
                                <span>{elt.technos}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

export default Timeline;
