import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Infos.css';

class Infos extends Component {

    render() {
        return (
            <div id="infos">

                <div className="info-elt">
                    <i class="far fa-calendar-alt"></i>
                    {this.props.data.birthdate}
                </div>

                <div className="info-elt">
                    <i className="fas fa-envelope"></i>
                    <span>{this.props.data.adresse1}</span><br/>
                    <span className="adresse2">{this.props.data.adresse2}</span>
                </div>

                <div className="info-elt">
                    <i className="fas fa-at"></i>{this.props.data.email}
                </div>

                <div className="info-elt">
                    <i class="fas fa-mobile-alt"></i>{this.props.data.tel}
                </div>

                <p>{this.props.data.apropos}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data.infos
});

export default connect(mapStateToProps, null)(Infos);
