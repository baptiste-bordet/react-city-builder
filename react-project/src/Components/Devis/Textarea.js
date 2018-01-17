import React, {Component} from 'react';

class Textarea extends Component {

    render() {
        return (
            <label>{this.props.label}
                <textarea className="form-control" name={this.props.name} onChange={this.props.onChange} />
            </label>
        );
    }
}

export default Textarea;