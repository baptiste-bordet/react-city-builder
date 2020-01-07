import * as React from 'react';
import { connect } from 'react-redux';
import Entity from './Entity/Entity';

import './Toolbar.css';

const Toolbar = ({ entities, selectedEntity }) => {

    return (
        <div id="toolbar">
            {
                Object.keys(entities).map((e, i) => {

                    const entity = entities[e];

                    return (
                        <Entity key={i} entity={entity} isSelected={entity.type === selectedEntity.type}/>
                    )
                })
            }
        </div>
    );
};

const mapStateToProps = state => ({
    entities: state.entities,
    selectedEntity: state.selectedEntity
});

export default connect(mapStateToProps, null)(Toolbar);
