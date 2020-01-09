/*
 * action types
 */

import { EEntityType } from "../types";

export const UPDATE_CELL = 'UPDATE_CELL';
export const DISPLAY_CELL_INFO = 'DISPLAY_CELL_INFO';
export const SELECT_ENTITY = 'SELECT_ENTITY';
export const EXEC_LOOP_TIME = 'EXEC_LOOP_TIME';
export const ADD_TIME = 'ADD_TIME';
export const SET_TIME = 'SET_TIME';

/*
 * action creators
 */

export const updateCell = (id: number) => ({ type: UPDATE_CELL, id });
export const displayCellInfo = (id: number) => ({ type: DISPLAY_CELL_INFO, id });
export const selectEntity = (entity: EEntityType) => ({ type: SELECT_ENTITY, entity });
export const execLoopTime = () => ({ type: EXEC_LOOP_TIME });
export const addTime = () => ({ type: ADD_TIME });
export const setTime = () => ({ type: SET_TIME });
