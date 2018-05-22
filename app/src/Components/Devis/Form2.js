import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitStep} from '../../redux/actions';

class Form2 extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitStep({form: {step: 0}});
    }

    render() {

        return (
            <div className="form-wrapper">

                <h2>Form 2</h2>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" value="Submit">Retour</button>
                </form>

            </div>
        );

    }

}

const mapDispatchToProps = {
    submitStep
};

export default connect(null, mapDispatchToProps)(Form2);