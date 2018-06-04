import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {

    render() {
        return (
            <div id="header">
                <h2>Baptiste Bordet</h2>
                <h3>{this.props.data.titre}</h3>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps, null)(Header);