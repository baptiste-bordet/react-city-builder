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
            email: '',
            message: '',
            nomError: '',
            emailError: '',
            messageError: '',
            envoiEnCours: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onRecaptchaChange = this.onRecaptchaChange.bind(this);
    }

    isFormValid() {

        let nomError = '', messageError = '', emailError = '';

        if (this.state.nom.length === 0) {
            nomError = this.props.data.name.errorEmpty;
        } else if (!this.state.nom.match(/^[a-zA-Z ]+$/)) {
            nomError = this.props.data.name.errorInvalid;
        } else {
            nomError = '';
        }

        if (this.state.email.length === 0) {
            emailError = this.props.data.email.errorEmpty;
        } else if (!this.state.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            emailError = this.props.data.name.errorInvalid;
        } else {
            emailError = '';
        }

        if (this.state.message.length === 0) {
            messageError = this.props.data.message.errorEmpty;
        }

        this.setState({
            nomError: nomError,
            emailError: emailError,
            messageError: messageError
        });

        return nomError.length === 0 && messageError.length === 0 && emailError.length === 0
    }

    handleChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.isFormValid()) {
            this.setState({ envoiEnCours: true });

            fetch('/api/devis', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: this.state
                })
            })
                .then(res => res.json())
                .then(jsonRes => {
                    this.setState({
                        errors: jsonRes,
                        displayErrors: Object.keys(jsonRes).length > 0,
                        displaySuccess: Object.keys(jsonRes).length === 0,
                        envoiEnCours: false
                    });
                }).catch(error => {

            });
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
                        <InputText label={this.props.data.name.label} name="nom"
                                   handleChange={this.handleChange} error={this.state.nomError}/>
                        <InputText label={this.props.data.email.label} name="email"
                                   handleChange={this.handleChange} error={this.state.emailError}/>
                    </div>

                    <div className="row">
                        <Textarea label={this.props.data.message.label} name="message"
                                  handleChange={this.handleChange} error={this.state.messageError}/>
                    </div>

                    <div className="row">
                        <ReCAPTCHA
                            ref="recaptcha"
                            sitekey="6Ldnpl0UAAAAAIyCbP5DFungayLRv__JWnm_zDvG"
                            onChange={this.onRecaptchaChange}
                        />
                        <div className="button-container">
                            {this.state.envoiEnCours ? (
                                <button type="submit" value="Submit" disabled="disabled"><div className="loader"></div><span> {this.props.data.sending}</span></button>
                            ) : (
                                <button type="submit" value="Submit" className="enable"><i className="far fa-envelope"></i>{this.props.data.send}</button>
                            )}
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
