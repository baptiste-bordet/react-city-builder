import React, {Component} from 'react';
import InputText from './InputText';
import Select from './Select';
import Textarea from './Textarea';
import naturesPrestation from './naturesPrestation.json';
import'./Devis.css';
import ReCAPTCHA from 'react-google-recaptcha';

class Devis extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prenom: '',
            nom: '',
            email: '',
            telephone: '',
            nature: 'Essais de réception - sorbonnes de laboratoire',
            info: '',
            captcha: '',
            envoiEnCours: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetMessage = this.resetMessage.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

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
            .then(jsonRes => this.setState({
                errors: jsonRes,
                envoiEnCours: false
            }));

        console.log('this.state = ' + JSON.stringify(this.state));
    }

    onChange(field, event) {
        this.setState({ [field]: event.target.value });
    }

    onRecaptchaChange(captcha) {
        this.setState({ captcha: captcha });
    }

    resetMessage() {
        this.setState({ errors: null });
    }

    render() {
        return (
            <div id="devis-bloc" className="container">

                <div className="row">
                    <h1>DEVIS</h1>
                </div>

                {this.state.errors && Object.keys(this.state.errors).length > 0 ? (
                    <div class="alert alert-danger form-errors" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Fermer" onSubmit={this.resetMessage}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                        {Object.keys(this.state.errors).map(error => {
                            return (
                                <div>{this.state.errors[error]}</div>
                            )
                        })}
                    </div>
                ) : ''}

                {this.state.errors && Object.keys(this.state.errors).length === 0 ? (
                    <div class="alert alert-success" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Fermer" onSubmit={this.resetMessage}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div>La demande de devis a bien été envoyée.</div>
                    </div>
                ) : ''}

                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <InputText
                                name={'prenom'}
                                label={'Prénom'}
                                onChange={this.onChange.bind(this, 'prenom')}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <InputText
                                name={'nom'}
                                label={'Nom'}
                                onChange={this.onChange.bind(this, 'nom')}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <InputText
                                name={'email'}
                                label={'Email'}
                                onChange={this.onChange.bind(this, 'email')}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <InputText
                                name={'telephone'}
                                label={'Téléphone'}
                                onChange={this.onChange.bind(this, 'telephone')}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <InputText
                                name={'entreprise'}
                                label={'Entreprise'}
                                onChange={this.onChange.bind(this, 'entreprise')}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <Select
                                name={'nature'}
                                label={'Nature de la préstation'}
                                options={naturesPrestation.natures}
                                onChange={this.onChange.bind(this, 'nature')}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <Textarea
                                name={'info'}
                                label={'Information complémentaire'}
                                onChange={this.onChange.bind(this, 'info')}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-8">
                            <ReCAPTCHA
                                ref="recaptcha"
                                sitekey="6LfVbiEUAAAAAACvbi_AmVq6GZ__ORNZmejycT3o"
                                onChange={this.onRecaptchaChange.bind(this)}
                            />
                        </div>
                    </div>

                    {this.state.envoiEnCours ? (
                        <button class="btn btn-success" type="submit" disabled="disabled"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>  Envoi du message...</button>
                    ) : (
                        <button className="btn btn-success" type="submit" value="Submit">Envoyer la demande</button>
                    )}

                </form>

            </div>
        );
    }
}

export default Devis;