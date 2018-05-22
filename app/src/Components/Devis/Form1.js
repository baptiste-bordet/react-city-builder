import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitStep} from '../../redux/actions';
import './Form.css';

class Form1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                step: 0
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({form: {[event.target.name]: event.target.value}});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitStep(this.state.form);
    }

    render() {

        return (
            <div className="form-wrapper">

                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                        <label>NOM</label>
                        <input type="text" name="nom" placeholder="Saisisez votre nom" onChange={this.handleChange} />
                    </div>

                    <div className="row">
                        <label>PRENOM</label>
                        <input type="text" name="prenom" placeholder="Saisisez votre prénom" onChange={this.handleChange} />
                    </div>

                    <div className="row">
                        <input type="radio" id="form2" name="step" value="1" onChange={this.handleChange} />
                        <label htmlFor="form2">Formulaire 2</label>

                        <input type="radio" id="form3" name="step" value="2" onChange={this.handleChange} />
                        <label htmlFor="form3">Formulaire 3</label>
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