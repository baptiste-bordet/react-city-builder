/*
 * action types
 */

export const UPDATE_CELL = 'UPDATE_CELL';
export const SELECT_ENTITY = 'SELECT_ENTITY';

/*
 * action creators
 */

export function updateCell(key) {
    return {
        type: UPDATE_CELL,
        key: key
    }
};

export function selectEntity(entity) {
    return {
        type: SELECT_ENTITY,
        entity: entity
    }
};