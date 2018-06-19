import { INIT_CELLS, UPDATE_CELL } from './actions';

const form = (state = {cells: []}, action) => {

    switch (action.type) {
        case INIT_CELLS:
            let cells = [];

            for (let i=0; i<=action.xNbCell; i++) {
                cells.push([{}]);
                for (let j=0; j<=action.yNbCell; j++) {
                    cells[i][j] = action.data
                }
            }

            return Object.assign({}, state, {cells: cells});
        case UPDATE_CELL: {
            let cells = state.cells;
            cells[action.coord.x][action.coord.y] = action.data;
            return Object.assign({}, state, {cells: cells});
        }
        default:
            return state;
    }
};

export default form;