import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Recommandations.css';

class Recommandations extends Component {

    render() {
        return (
            <div id="recos">
                <h2>{this.props.data.label}</h2>

                <h3 className="demande">{this.props.data.demande}</h3>

                {this.props.data.list.map(reco => {
                    return (
                        <div className="reco">
                            <i className="fas fa-angle-double-right"></i><h4>{reco.nom}</h4>
                            <h5>{reco.title}</h5>
                            <span>{reco.mail}</span>
                        </div>
                    )}
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data.recommandations
});

export default connect(mapStateToProps, null)(Recommandations);