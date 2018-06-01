import {setLanguage} from "../../redux/actions";
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Flag from 'react-world-flags'

import './Flags.css';

class Flags extends Component {

    constructor(props) {
        super(props);

        this.setLanguage = this.setLanguage.bind(this);
    }

    setLanguage(language) {
        this.props.setLanguage(language);
    }

    render() {
        return (
            <div id="flags">
                <Flag code="gbr" height="16" onClick={() => {this.setLanguage('EN')}} />
                <Flag code="fra" height="16" onClick={() => {this.setLanguage('FR')}} />
            </div>
        );
    }
}




const mapDispatchToProps = {
    setLanguage
};

export default connect(null, mapDispatchToProps)(Flags);