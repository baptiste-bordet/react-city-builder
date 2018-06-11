import React, {Component} from 'react';
import { connect } from 'react-redux';
import portrait from '../../assets/portrait.png'

import './Header.css';

class Header extends Component {

    render() {
        return (
            <div id="header">
                <h1>Baptiste Bordet</h1>
                <h2>{this.props.data.titre}</h2>

                <img src={portrait} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps, null)(Header);