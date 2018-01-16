import React, {Component} from 'react';
import './Table.css';

class Table extends Component {

    render() {
        return (
            <table className="table table-condensed prestation-table">
                <thead>
                    <tr>
                        <th>{this.props.title}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {this.props.content}
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;