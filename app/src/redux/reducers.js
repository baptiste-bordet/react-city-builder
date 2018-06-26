import { UPDATE_CELL } from './actions';

const form = (state = {cells: new Map()}, action) => {

    switch (action.type) {
        case UPDATE_CELL: {
            let newState = { ...state };
            let cells = newState.cells;

            cells[action.key] = {type: state.currentSelection.type};
            newState.money = state.money - state.currentSelection.price;

            newState.update = Math.random();

            return newState;
        }
        default:
            return state;
    }
};

export default form;