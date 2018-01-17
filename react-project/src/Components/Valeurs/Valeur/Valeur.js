import React, {Component} from 'react';

class Valeur extends Component {

    render() {

        const imageSrc = require('../../../assets/' + this.props.image);

        return (
            <div class="col-md-6 valeur-item">
                <img src={imageSrc} />
                <div class="valeur-title">{this.props.title}</div>
                <p dangerouslySetInnerHTML={{__html: this.props.content}}></p>
            </div>
        );
    }
}

export default Valeur;