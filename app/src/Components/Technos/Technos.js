import React, {Component} from 'react';
import { connect } from 'react-redux';
import List from './List';

import './Techno.css';

class Techno extends Component {

    render() {
        return (
            <div id="technos">
                <h2>{this.props.data.label}</h2>


                <div className="technos-wrapper">
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
    data: state.data.technos
});

export default connect(mapStateToProps, null)(Techno);

