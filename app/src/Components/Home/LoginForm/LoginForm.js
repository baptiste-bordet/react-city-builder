import React, {Component} from 'react';
import './LoginForm.css';
import InputText from '../../Form/InputText';
import axios from "axios";
import { withRouter } from 'react-router';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loginError: false,
            usernameError: '',
            passwordError: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveLoginData = this.saveLoginData.bind(this);
    }

    handleChange(event) {
        this.setState({...this.state, [event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.username + ' ' + this.state.password);

        axios.get('/api/login', {
            auth: {
                username: this.state.username,
                password: this.state.password
            }
        })
            .then(() => {
                this.saveLoginData();
                this.props.history.push('/user');
            })
            .catch(() => {
                this.setState({loginError: true});
            });
    }

    saveLoginData() {
        console.log('save login')
    }

    render() {
        return (
            <div id="login">
                <h2 className="title">Login</h2>

                {this.state.loginError ? <span className="login-error">Le username ou le mot de passe n'est pas valide.</span> : ''}

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

export default withRouter(LoginForm);
