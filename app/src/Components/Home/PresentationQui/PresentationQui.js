import React, {Component} from 'react';
import './PresentationQui.css';
import InputText from '../../Form/InputText';

class PresentationQui extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isLogged: false,
            usernameError: '',
            passwordError: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.username + ' ' + this.state.password);

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({
                    errors: jsonRes,
                    isLogged: Object.keys(jsonRes).length === 0
                });
            });
    }

    render() {
        return (
            <div id="qui">
                <h1>Data Analyse</h1>
                <h2 className="title">QUI</h2>

                <form onSubmit={this.handleSubmit}>
                    <InputText label="USERNAME" name="username" placeholder="Saisir votre username"
                               handleChange={this.handleChange} error={this.state.usernameError}/>
                    <InputText type="password" label="MOT DE PASSE" name="password" placeholder="Saisir votre mot de passe"
                               handleChange={this.handleChange} error={this.state.passwordError}/>
                    <button type="submit" value="Submit">Login</button>
                </form>

            </div>
        );
    }
}

export default PresentationQui;
