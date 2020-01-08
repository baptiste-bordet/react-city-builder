import { EXEC_LOOP_TIME, SELECT_ENTITY, UPDATE_CELL } from './actions';
import { produce } from "immer";

import moment from 'moment';
import { ENTITIES, INITIAL_CELL, INITIAL_MONEY, X_NB_CELL, Y_NB_CELL } from "../constants";
import { EDiff, EEntityType, ICell } from "../types";
import { calculateNewDate, calculateNewMoney, updateCells } from "../utils/gameUtils";

const date = moment().format("MMM Do YY");

const initialState = () => {
    let cells = [] as ICell[];
    let nbCells = X_NB_CELL * Y_NB_CELL;

    [...Array(nbCells)].forEach((_, i) => {
        cells[i] = INITIAL_CELL;
    });

    return {
        cells: cells,
        money: {
            value: INITIAL_MONEY,
            indice: EDiff.EQUAL,
            diff: 0,
        },
        selectedEntity: EEntityType.HOUSE,
        date: date
    }
};

const form = (state = initialState(), action: any) => {

    switch (action.type) {
        case UPDATE_CELL:
            return produce(state, (draft) => {
                draft.cells[action.key].type = draft.selectedEntity;
                draft.money.value = state.money.value - Object.values(ENTITIES).find(entity => entity.type === state.selectedEntity)!.price;
                draft.cells = updateCells(draft.cells);

                return draft;
            });
        case SELECT_ENTITY: {
            return Object.assign({}, state, { selectedEntity: action.entity });
        }
        case EXEC_LOOP_TIME:
            return produce(state, (draft) => {
                draft.money = calculateNewMoney(state.money, state.cells);
                draft.date = calculateNewDate(state.date);

                return draft;
            });
        default:
            return state;
    }
};

export default form;
