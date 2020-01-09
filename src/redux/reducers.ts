import { DISPLAY_CELL_INFO, EXEC_LOOP_TIME, SELECT_ENTITY, UPDATE_CELL } from './actions';
import { produce } from "immer";

import moment from 'moment';
import { ENTITIES, INITIAL_CELL, INITIAL_MONEY } from "../constants";
import { EDiff, EEntityType } from "../types";
import { calculateNewDate, calculateNewMoney, createInitCells, updateCells } from "../utils/gameUtils";

const date = moment().format("MMM Do YY");

const initialState = () => {
    return {
        cells: createInitCells(),
        money: {
            value: INITIAL_MONEY,
            indice: EDiff.EQUAL,
            diff: 0,
        },
        selectedEntity: EEntityType.HOUSE,
        date: date,
        infoId: null
    }
};

const form = (state = initialState(), action: any) => {

    switch (action.type) {
        case UPDATE_CELL:
            return produce(state, (draft) => {
                if (draft.selectedEntity === EEntityType.ERASE) {
                    draft.cells[action.id] = INITIAL_CELL;
                } else {
                    draft.cells[action.id].type = draft.selectedEntity;
                }
                draft.money.value = state.money.value - ENTITIES[state.selectedEntity].price;
                draft.cells = updateCells(draft.cells);

                return draft;
            });
        case DISPLAY_CELL_INFO:
            return Object.assign({}, state, { infoId: action.id });
        case SELECT_ENTITY: {
            return Object.assign({}, state, { selectedEntity: action.entity });
        }
        case EXEC_LOOP_TIME:
            return produce(state, (draft) => {
                draft.money = calculateNewMoney(state.money, state.cells);
                draft.date = calculateNewDate(state.date);
                draft.cells = updateCells(draft.cells);

                return draft;
            });
        default:
            return state;
    }
};

export default form;
