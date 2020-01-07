import * as React from 'react';
import { connect } from 'react-redux';
import Entity from './Entity/Entity';

import './Toolbar.css';
import { ENTITIES } from "../../constants";

const Toolbar = ({ selectedEntity }) => {

    return (
        <div id="toolbar">
            {
                Object.keys(ENTITIES).map((e, i) => {
                    const entity = ENTITIES[e];
                    return (
                        <Entity key={i} entity={entity} isSelected={entity.type === selectedEntity}/>
                    )
                })
            }
        </div>
    );
};

const mapStateToProps = state => ({
    selectedEntity: state.selectedEntity
});

export default connect(mapStateToProps, null)(Toolbar);
