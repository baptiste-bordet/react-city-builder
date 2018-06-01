import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Infos.css';

class Infos extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="infos">
                <h1>Baptiste Bordet</h1>
                <h2>{this.props.data.label}</h2>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data.infos
});

export default connect(mapStateToProps, null)(Infos);
