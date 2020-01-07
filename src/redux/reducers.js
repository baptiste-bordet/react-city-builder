import { EXEC_LOOP_TIME, SELECT_ENTITY, UPDATE_CELL } from './actions';
import { produce } from "immer";

import GridHelper from '../utils/GridHelper';
import moment from 'moment';

const initialState = { cells: new Map() };

const form = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_CELL:
            return produce(state, (draft) => {
                const type = draft.selectedEntity.type === 'road' ? getRoadType(draft, action.key) : draft.selectedEntity.type;

                draft.cells[action.key] = { type: type };
                draft.money.value = state.money.value - state.selectedEntity.price;

                draft.cells = updateRoadCells(draft);
                draft.update = Math.random();

                return draft;
            });
        case SELECT_ENTITY: {
            return Object.assign({}, state, { selectedEntity: action.entity });
        }
        case EXEC_LOOP_TIME:
            return produce(state, (draft) => {
                const reducer = (total, entity) => total + getNbEntities(state, entity.type) * entity.gain;
                const gain = Object.values(state.entities).reduce(reducer, 0);

                const oldMoney = state.money.value;
                const newMoney = oldMoney + gain;
                const indice = newMoney > oldMoney ? 'up' : (newMoney < oldMoney ? 'down' : 'equal');
                const diff = newMoney - oldMoney;

                draft.money = {
                    value: newMoney,
                    indice: indice,
                    diff: diff
                };

                draft.date = moment(state.date, 'MMM Do YY').add(1, 'd').format('MMM Do YY');

                return draft;
            });
        default:
            return state;
    }
};

const updateRoadCells = (state) => {

    Object.keys(state.cells).map((cell, i) => {
        if (state.cells[i].type.startsWith('road')) {
            state.cells[i].type = getRoadType(state, i);
        }
    });

    return state.cells;
};

const getNbEntities = (state, type) => {
    let counter = 0;

    Object.keys(state.cells).map((cell, i) => {
        if (state.cells[i].type.startsWith(type)) {
            counter++;
        }
    });

    return counter;
};

const getRoadType = (state, cellId) => {

    let roadType = 'road_horizon';

    const nearIdRoad = getRoadNear(state, cellId);

    if (nearIdRoad.length === 4) {
        roadType = 'road_center';
    }

    if (nearIdRoad.length === 3) {
        roadType = 'road_center';
    }

    if (nearIdRoad.length === 2) {
        if (nearIdRoad[0] === cellId - 1 && nearIdRoad[1] === cellId + 1) {
            roadType = 'road_horizon';
        } else if (nearIdRoad[0] === cellId - state.xNbCell && nearIdRoad[1] === cellId + state.xNbCell) {
            roadType = 'road_vertical';
        } else {
            roadType = 'road_center';
        }
    }

    if (nearIdRoad.length === 1) {
        if (nearIdRoad[0] === cellId + 1 || nearIdRoad[0] === cellId - 1) {
            roadType = 'road_horizon';
        }
        if (nearIdRoad[0] === cellId + state.xNbCell || nearIdRoad[0] === cellId - state.xNbCell) {
            roadType = 'road_vertical';
        }
    }

    return roadType;
};


const getRoadNear = (state, cellId) => {

    let roadNearId = [];

    const nearId = GridHelper.getNearId(state, cellId);

    nearId.map((id) => {
        if (state.cells[id].type.startsWith('road')) {
            roadNearId.push(id);
        }
    });

    return roadNearId;

};

export default form;
