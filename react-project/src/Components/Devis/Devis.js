import React, {Component} from 'react';
import InputText from './InputText';
import'./Devis.css';

class Devis extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prenom: '',
            nom: '',
            email: '',
            telephone: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('this.state = ' + JSON.stringify(this.state));
    }

    onChange(field, event) {
        this.setState({ [field]: event.target.value });
    }

    render() {
        return (
            <div id="devis-bloc" className="container">

                <div className="row">
                    <h1>DEVIS</h1>
                </div>

                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <InputText name={'prenom'} label={'Prénom'} onChange={this.onChange.bind(this, 'prenom')} />
                        </div>
                        <div className="form-group col-md-4">
                            <InputText name={'nom'} label={'Nom'} onChange={this.onChange.bind(this, 'nom')} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <InputText name={'email'} label={'Email'} onChange={this.onChange.bind(this, 'email')} />
                        </div>
                        <div className="form-group col-md-4">
                            <InputText name={'telephone'} label={'Téléphone'} onChange={this.onChange.bind(this, 'telephone')} />
                        </div>
                    </div>

                    <input type="submit" value="Submit" />

                </form>

            </div>
        );
    }
}

export default Devis;