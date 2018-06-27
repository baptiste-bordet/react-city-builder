import { UPDATE_CELL, SELECT_ENTITY, EXEC_LOOP_TIME } from './actions';
import GridHelper from './GridHelper';

const form = (state = {cells: new Map()}, action) => {

    switch (action.type) {
        case UPDATE_CELL: {
            let newState = { ...state };
            let cells = newState.cells;
            const type = state.selectedEntity.type === 'road' ? getRoadType(state, action.key) : state.selectedEntity.type;

            cells[action.key] = {type: type};
            newState.money = state.money - state.selectedEntity.price;

            newState.cells = updateRoadCells(newState);
            newState.update = Math.random();

            return newState;
        }
        case SELECT_ENTITY: {
            return Object.assign({}, state, {selectedEntity: action.entity});
        }
        case EXEC_LOOP_TIME: {
            const reducer = (total, entity) => total + getNbEntities(state, entity.type) * entity.gain;
            const gain = Object.values(state.entities).reduce(reducer, 0);

            const newMoney = state.money + gain;
            const indice = newMoney > state.money ? 'up' : (newMoney < state.money ? 'down' : 'equal');

            return Object.assign({}, state, {
                money: newMoney,
                indice: indice
            });
        }
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
        if (nearIdRoad[0] === cellId-1 && nearIdRoad[1] === cellId+1) {
            roadType = 'road_horizon';
        } else if (nearIdRoad[0] === cellId-state.xNbCell && nearIdRoad[1] === cellId+state.xNbCell) {
            roadType = 'road_vertical';
        } else {
            roadType = 'road_center';
        }
    }

    if (nearIdRoad.length === 1) {
        if (nearIdRoad[0] === cellId+1 || nearIdRoad[0] === cellId-1) {
            roadType = 'road_horizon';
        }
        if (nearIdRoad[0] === cellId+state.xNbCell || nearIdRoad[0] === cellId-state.xNbCell) {
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