import * as React from 'react';
import { connect } from 'react-redux';
import Entity from './Entity/Entity';

import './Toolbar.css';
import { ENTITIES } from "../../constants";
import { EEntityType, IEntity, IState } from "../../types";

interface IToolbar {
    selectedEntity: EEntityType
}

const Toolbar = ({ selectedEntity }: any) => {

    return (
        <div id="toolbar">
            {
                Object.keys(ENTITIES).map((key, index) => {
                    return key !== EEntityType.EMPTY && (
                        <Entity key={index} entity={ENTITIES[key as EEntityType]} isSelected={key === selectedEntity}/>
                    )
                })
            }
        </div>
    );
};

const mapStateToProps = (state: IState) => ({
    selectedEntity: state.selectedEntity
});

export default connect(mapStateToProps, null)(Toolbar);
