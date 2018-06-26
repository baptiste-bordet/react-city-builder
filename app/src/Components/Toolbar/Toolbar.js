import React, {Component} from 'react';
import { connect } from 'react-redux';
import Entity from './Entity/Entity';

import './Toolbar.css';

class Toolbar extends Component {

    render() {
        return (
            <div id="toolbar">
                {
                    Object.keys(this.props.entities).map((e, i) => {

                        const entity = this.props.entities[e];

                        return (
                            <Entity key={i} entity={entity} isSelected={entity.type === this.props.currentSelection.type} />
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    entities: state.entities,
    currentSelection: state.currentSelection
});

export default connect(mapStateToProps, null)(Toolbar);