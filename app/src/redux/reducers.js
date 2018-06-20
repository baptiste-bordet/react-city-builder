import { UPDATE_CELL } from './actions';

const form = (state = {cells: []}, action) => {

    switch (action.type) {
        case UPDATE_CELL: {
            let newState = { ...state };
            let cells = newState.cells;

            cells[action.coord.x][action.coord.y] = action.data;
            newState.update = Math.random();

            return newState;
        }
        default:
            return state;
    }
};

export default form;