/*
 * action types
 */

export const UPDATE_CELL = 'UPDATE_CELL';
export const SELECT_ENTITY = 'SELECT_ENTITY';
export const EXEC_LOOP_TIME = 'EXEC_LOOP_TIME';
export const ADD_TIME = 'ADD_TIME';
export const SET_TIME = 'SET_TIME';

/*
 * action creators
 */

export const updateCell = (key) => ({ type: UPDATE_CELL, key });
export const selectEntity = (entity) => ({ type: SELECT_ENTITY, entity });
export const execLoopTime = () => ({ type: EXEC_LOOP_TIME });
export const addTime = () => ({ type: ADD_TIME });
export const setTime = () => ({ type: SET_TIME });
