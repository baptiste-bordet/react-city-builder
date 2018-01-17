import React, {Component} from 'react';

class InputText extends Component {

    render() {
        return (
            <label>{this.props.label}
                <input type="text" name={this.props.name} onChange={this.props.onChange} />
            </label>
        );
    }
}

export default InputText;