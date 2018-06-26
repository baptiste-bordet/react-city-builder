import { UPDATE_CELL, SELECT_ENTITY } from './actions';

const form = (state = {cells: new Map()}, action) => {

    switch (action.type) {
        case UPDATE_CELL: {
            let newState = { ...state };
            let cells = newState.cells;

            cells[action.key] = {type: state.selectedEntity.type};
            newState.money = state.money - state.selectedEntity.price;

            newState.update = Math.random();

            return newState;
        }
        case SELECT_ENTITY: {
            return Object.assign({}, state, {selectedEntity: action.entity});
        }
        default:
            return state;
    }
};

export default form;