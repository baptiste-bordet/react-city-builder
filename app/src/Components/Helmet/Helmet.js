import React, {Component} from 'react';
import {Helmet} from "react-helmet";

class CustomHelmet extends Component {

    render() {

        return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>{this.props.name}</title>
                <meta name="description" content={this.props.description} />
                <meta property="og:title" content={this.props.name} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={this.props.url} />
                <meta property="og:image" content="https://www.emmanuelle-claeys.com/favicon.png" />
            </Helmet>
        );
    }
}

export default CustomHelmet;