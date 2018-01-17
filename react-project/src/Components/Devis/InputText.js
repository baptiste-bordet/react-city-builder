import React, {Component} from 'react';

class InputText extends Component {

    render() {
        return (
            <label>{this.props.label}
                <input className="form-control" type="text" name={this.props.name} onChange={this.props.onChange} />
            </label>
        );
    }
}

export default InputText;