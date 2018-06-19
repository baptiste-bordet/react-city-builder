/*
 * action types
 */

export const INIT_CELLS = 'INIT_CELLS';
export const UPDATE_CELL = 'UPDATE_CELL';

/*
 * action creators
 */

export function initCells(xNbCell, yNbCell, data) {
    return {
        type: INIT_CELLS,
        xNbCell: xNbCell,
        yNbCell: yNbCell,
        data: data
    }
};

export function updateCell(x, y, data) {
    return {
        type: UPDATE_CELL,
        coord: {
            x: x,
            y: y
        },
        data: data
    }
};