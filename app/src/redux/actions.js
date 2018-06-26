/*
 * action types
 */

export const UPDATE_CELL = 'UPDATE_CELL';

/*
 * action creators
 */

export function updateCell(key) {
    return {
        type: UPDATE_CELL,
        key: key
    }
};