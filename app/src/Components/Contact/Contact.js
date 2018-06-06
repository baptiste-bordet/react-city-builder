import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';

import InputText from './Form/InputText';
import Textarea from './Form/Textarea';

import './Contact.css';

class Contact extends Component {

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
        this.onRecaptchaChange = this.onRecaptchaChange.bind(this);
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
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.isFormValid()) {
            this.props.submitStep(this.state);
        }
    }

    onRecaptchaChange(captcha) {
        this.setState({ captcha: captcha });
    }

    render() {
        return (
            <div id="contact">
                <h2>{this.props.data.label}</h2>

                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                        <InputText label="NOM" name="nom" placeholder="Saisir votre nom"
                                   handleChange={this.handleChange} error={this.state.nomError}/>
                        <InputText label="EMAIL" name="email" placeholder="Saisir votre adresse email"
                                   handleChange={this.handleChange} error={this.state.emailError}/>
                    </div>

                    <div className="row">
                        <Textarea label="MESSAGE" name="message"
                                handleChange={this.handleChange} error={this.state.messageError}/>
                    </div>

                    <div className="row">
                        <ReCAPTCHA
                            ref="recaptcha"
                            sitekey="6Ldnpl0UAAAAAIyCbP5DFungayLRv__JWnm_zDvG"
                            onChange={this.onRecaptchaChange}
                        />
                        <div className="button-container">
                            <button type="submit" value="Submit"><i class="far fa-envelope"></i>Envoyer</button>
                        </div>
                    </div>

                </form>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data.contact
});

export default connect(mapStateToProps, null)(Contact);
