/*
 * action types
 */

export const UPDATE_CELL = 'UPDATE_CELL';

/*
 * action creators
 */

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