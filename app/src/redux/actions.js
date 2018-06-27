/*
 * action types
 */

export const UPDATE_CELL = 'UPDATE_CELL';
export const SELECT_ENTITY = 'SELECT_ENTITY';
export const EXEC_LOOP_TIME = 'EXEC_LOOP_TIME';

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

export function execLoopTime() {
    return {
        type: EXEC_LOOP_TIME
    }
};