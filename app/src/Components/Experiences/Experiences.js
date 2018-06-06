import React, {Component} from 'react';
import { connect } from 'react-redux';
import Timeline from './Timeline';

import './Experiences.css';

class Experiences extends Component {

    render() {
        return (
            <div id="experiences">
                <h2>{this.props.data.label}</h2>

                <Timeline className="timeline-soat" data={this.props.data.soatTimeline} />
                <Timeline className="timeline-sopra" data={this.props.data.sopraTimeline} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data.experiences
});

export default connect(mapStateToProps, null)(Experiences);
