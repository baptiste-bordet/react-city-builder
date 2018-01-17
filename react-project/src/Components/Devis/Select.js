import React, {Component} from 'react';

class Select extends Component {

    render() {
        return (
            <label>{this.props.label}
                <select className="form-control" name={this.props.name} onChange={this.props.onChange}>
                    {this.props.options.map((option, index) => {
                        return (
                            <option key={index} value={option.value}>{option.value}</option>
                        )
                    })}
                </select>
            </label>
        );
    }
}

export default Select;