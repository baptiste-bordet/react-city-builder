import React, {Component} from 'react';
import { connect } from 'react-redux';
import List from '../Technos/List';

import './Hobbies.css';

class Hobbies extends Component {

    render() {
        return (
            <div id="hobbies">
                <h2>{this.props.data.label}</h2>

                <div className="hobbies-wrapper">
                    {this.props.data.list.map((elt) => {
                        return (
                            <List elt={elt} key={elt.label} />
                        )
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data.hobbies
});

export default connect(mapStateToProps, null)(Hobbies);