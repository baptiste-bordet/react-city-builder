import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {

    render() {
        return (
            <div id="header">
                <h1>City</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps, null)(Header);