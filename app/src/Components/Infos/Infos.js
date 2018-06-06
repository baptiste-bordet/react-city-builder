import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Infos.css';

class Infos extends Component {

    render() {
        return (
            <div id="infos">
                <p>{this.props.data.apropos}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data.infos
});

export default connect(mapStateToProps, null)(Infos);
