import React, {Component} from 'react';
import LoginForm from '../LoginForm/LoginForm';

import './PresentationQui.css';

class PresentationQui extends Component {

    render() {
        return (
            <div id="qui">
                <h1>Data Analyse</h1>
                <LoginForm />
            </div>
        );
    }
}

export default PresentationQui;
