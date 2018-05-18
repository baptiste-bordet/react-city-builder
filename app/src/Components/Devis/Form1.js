import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeFormStep} from '../../redux/actions';
import './Form.css';

class Form1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: 0
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.changeFormStep(this.state.form);
    }

    handleOptionChange(event) {
        this.setState({form: event.target.value});
    }

    render() {

        return (
            <div className="form-wrapper">

                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                        <label>NOM</label>
                        <input type="text" name="nom" placeholder="Saisisez votre nom"/>
                    </div>

                    <div className="row">
                        <label>PRENOM</label>
                        <input type="text" name="prenom" placeholder="Saisisez votre prénom"/>
                    </div>

                    <div className="row">
                        <input type="radio" id="form2" name="choix-form" value="1"
                               onChange={this.handleOptionChange} />
                        <label htmlFor="form2">Formulaire 2</label>

                        <input type="radio" id="form3" name="choix-form" value="2"
                               onChange={this.handleOptionChange} />
                        <label htmlFor="form3">Formulaire 3</label>
                    </div>

                    <button type="submit" value="Submit">Envoyer</button>

                </form>

            </div>
        );

    }

}
;

const mapDispatchToProps = {
    changeFormStep
};

export default connect(null, mapDispatchToProps)(Form1);