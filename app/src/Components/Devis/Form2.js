import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitStep} from '../../redux/actions';

class Form2 extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(JSON.stringify(this.props));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitStep({form: {step: 0}});
    }

    render() {

        return (
            <div className="form-wrapper">

                <h2>Form 2</h2>

                <p>coucou {this.props.form.prenom} {this.props.form.nom}</p>

                <form onSubmit={this.handleSubmit}>

                    <div className="input-file-wrapper">
                        <label for="file" className="label-file">Choisir un fichier</label>
                        <input id="file" className="input-file" type="file" />
                    </div>

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