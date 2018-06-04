import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Experiences.css';

class Experiences extends Component {

    render() {
        return (
            <div id="experiences">
                <h2>{this.props.data.label}</h2>

                <section class="timeline">
                    <ul>
                        <li>
                            <div>
                                <time>1934</time>
                                Some content here
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>1934</time>
                                Some content here
                            </div>
                        </li>
                    </ul>
                </section>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data.experiences
});

export default connect(mapStateToProps, null)(Experiences);
