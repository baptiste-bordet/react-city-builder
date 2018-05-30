import React, {Component} from "react";
import axios from "axios";
import { connect } from 'react-redux';
import './User.css';

class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthorized: false,
            data: ''
        }
    }

    componentWillMount() {

        axios.get('/api/user/data', {
            auth: {
                username: this.props.user.username,
                password: this.props.user.password
            }
        })
            .then((response) => {
                this.setState({
                    isAuthorized: true,
                    user: response.data.user.username
                });
            })
            .catch(() => {
                this.setState({ isAuthorized: false });
            });
    }

    render() {
        return (
            <div id="user-page">
                <h2>Welcome</h2>
                {this.state.isAuthorized ? <p>{this.state.user}</p> : <p>Unauthorized</p>}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(User);
