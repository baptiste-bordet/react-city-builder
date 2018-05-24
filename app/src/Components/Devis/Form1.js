import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitStep} from '../../redux/actions';
import InputText from './InputText';
import './Form.css';

class Form1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nom: '',
            prenom: '',
            email: '',
            nomError: '',
            prenomError: '',
            emailError: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isFormValid() {

        let nomError = '', prenomError = '', emailError = '';

        if (this.state.nom.length === 0) {
            nomError = 'Le champ Nom est obligatoire';
        } else if (!this.state.nom.match(/^[a-zA-Z ]+$/)) {
            nomError = 'Le champ Nom n\'est pas valide';
        } else {
            nomError = '';
        }

        if (this.state.prenom.length === 0) {
            prenomError = 'Le champ Prénom est obligatoire';
        } else if (!this.state.prenom.match(/^[a-zA-Z ]+$/)) {
            prenomError = 'Le champ Prénom n\'est pas valide';
        } else {
            prenomError = '';
        }

        if (this.state.email.length === 0) {
            emailError = 'Le champ Email est obligatoire';
        } else if (!this.state.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            emailError = 'Le champ Email n\'est pas valide';
        } else {
            emailError = '';
        }

        this.setState({
           nomError: nomError,
            prenomError: prenomError,
            emailError: emailError
        });

        return nomError.length === 0 && prenomError.length === 0 && emailError.length === 0
    }

    handleChange(event) {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.isFormValid()) {
            this.props.submitStep(this.state);
        }
    }

    render() {

        return (
            <div className="form-wrapper">

                <form onSubmit={this.handleSubmit}>

                    <InputText label="NOM" name="nom" placeholder="Saisir votre nom"
                           handleChange={this.handleChange.bind(this)} error={this.state.nomError} />
                    <InputText label="PRENOM" name="prenom" placeholder="Saisir votre prenom"
                           handleChange={this.handleChange.bind(this)} error={this.state.prenomError} />
                    <InputText label="EMAIL" name="email" placeholder="Saisir votre adresse email"
                           handleChange={this.handleChange.bind(this)} error={this.state.emailError} />

                    <div className="row">
                        <label className="radio-inline" htmlFor="form2">
                            <input type="radio" id="form2" name="step" value="1" onChange={this.handleChange} />Mes données sont structurées
                        </label>

                        <label className="radio-inline"  htmlFor="form3">
                            <input type="radio" id="form3" name="step" value="2" onChange={this.handleChange} />Mes données sont en vrac
                        </label>
                    </div>

                    <button type="submit" value="Submit">Envoyer</button>

                </form>

            </div>
        );

    }

}

const mapDispatchToProps = {
    submitStep
};

export default connect(null, mapDispatchToProps)(Form1);