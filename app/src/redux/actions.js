/*
 * action types
 */

export const UPDATE_CELL = 'UPDATE_CELL';

/*
 * action creators
 */

export function updateCell(key, data) {
    return {
        type: UPDATE_CELL,
        key: key,
        data: data
    }
};