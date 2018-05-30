import React, {Component} from 'react';
import './LoginForm.css';
import InputText from '../../Form/InputText';
import axios from "axios";
import sha256 from 'crypto-js/sha256';
import {connect} from "react-redux";
import {login} from "../../../redux/actions";
import { withRouter } from 'react-router';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loginError: false
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

        axios.get('/api/login', {
            auth: {
                username: this.state.username,
                password: sha256(this.state.password)
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
        this.props.login({
            username: this.state.username,
            password: sha256(this.state.password).toString()
        })
    }

    render() {
        return (
            <div id="login">
                <h2 className="title">Login</h2>

                {this.state.loginError ? <span className="login-error">Le username ou le mot de passe n'est pas valide.</span> : ''}

                <form onSubmit={this.handleSubmit}>
                    <InputText label="USERNAME" name="username" placeholder="Saisir votre username"
                               handleChange={this.handleChange} />
                    <InputText type="password" label="MOT DE PASSE" name="password" placeholder="Saisir votre mot de passe"
                               handleChange={this.handleChange} />
                    <button type="submit" value="Submit">Login</button>
                </form>

            </div>
        );
    }
}

const mapDispatchToProps = {
    login
};


export default connect(null, mapDispatchToProps)(withRouter(LoginForm));
