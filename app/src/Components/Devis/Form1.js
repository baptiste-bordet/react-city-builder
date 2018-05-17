import React, {Component} from 'react';
import { connect } from 'react-redux';
import { changeFormStep } from '../../redux/actions';

class Form1 extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.changeFormStep(1);
    }

    render() {

        return (
          <div className="form-wrapper">

              <form onSubmit={this.handleSubmit}>

                  <label>
                      Name:
                      <input type="text" name="nom" />
                  </label>
                  <button type="submit" value="Submit" >Envoyer</button>

              </form>

          </div>
        );

    }

};

const mapDispatchToProps = {
    changeFormStep
};

export default connect(null, mapDispatchToProps)(Form1);