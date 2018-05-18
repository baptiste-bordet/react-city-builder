import React, {Component} from 'react';
import { connect } from 'react-redux';
import { changeFormStep } from '../../redux/actions';

class Form3 extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.changeFormStep(0);
    }

    render() {

        return (
            <div className="form-wrapper">

                <h2>Form 3</h2>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" value="Submit" >Retour</button>
                </form>

            </div>
        );

    }

};

const mapDispatchToProps = {
    changeFormStep
};

export default connect(null, mapDispatchToProps)(Form3);