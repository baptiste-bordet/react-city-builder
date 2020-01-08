import { EXEC_LOOP_TIME, SELECT_ENTITY, UPDATE_CELL } from './actions';
import { produce } from "immer";

import moment from 'moment';
import { ENTITIES, INITIAL_CELL, INITIAL_MONEY, X_NB_CELL, Y_NB_CELL } from "../constants";
import { EDiff, EEntityType, ERoadType, ICell, IEntity } from "../types";
import { getNearId } from "../utils/GridHelper";

const date = moment().format("MMM Do YY");

const initialState = () => {
    let cells = [] as ICell[];
    let nbCells = X_NB_CELL * Y_NB_CELL;

    [...Array(nbCells)].forEach((_, i) => {
        cells[i] = INITIAL_CELL;
    });
    // for (let i of Array(nbCells).keys()) {
    //     cells[i] = INITIAL_CELL;
    // }

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
                const type = /*draft.selectedEntity === EEntityType.ROAD ? getRoadType(draft, action.key) :*/ draft.selectedEntity;

                draft.cells[action.key].type = type;
                draft.money.value = state.money.value - Object.values(ENTITIES).find(entity => entity.type === state.selectedEntity)!.price;

                // draft.cells = updateRoadCells(draft);
                // draft.update = Math.random();

                return draft;
            });
        case SELECT_ENTITY: {
            return Object.assign({}, state, { selectedEntity: action.entity });
        }
        case EXEC_LOOP_TIME:
            return produce(state, (draft) => {
                const reducer = (total: number, entity: IEntity) => total + getNbEntities(state.cells, entity.type) * entity.gain;
                const gain = Object.values(ENTITIES).reduce(reducer, 0);

                const oldMoney = state.money.value;
                const newMoney = oldMoney + gain;
                const indice = newMoney > oldMoney ? EDiff.UP : (newMoney < oldMoney ? EDiff.DOWN : EDiff.EQUAL);
                const diff = newMoney - oldMoney;

                draft.money = {
                    value: newMoney,
                    indice: indice,
                    diff: diff
                };

                draft.date = moment(state.date, 'MMM Do YY').add(1, 'd').format('MMM Do YY');

                return draft;
            });
        default:
            return state;
    }
};

// const updateRoadCells = (cells: ICell[]) => {
//     cells.map((cell, i) => {
//         if (cell.type === EEntityType.ROAD) {
//             cell.type = getRoadType(cells, i);
//         }
//     });
//
//     return cells;
// };

const getNbEntities = (cells: ICell[], type: EEntityType) => {
    let counter = 0;

    Object.keys(cells).map((cell, i) => {
        if (cells[i].type === type) {
            counter++;
        }
    });

    return counter;
};

// const getRoadType = (cells: ICell[], cellId: number) => {
//
//     let roadType = ERoadType.HORIZON;
//
//     const nearIdRoad = getRoadNear(cells, cellId);
//
//     if (nearIdRoad.length === 4) {
//         roadType = ERoadType.CENTER;
//     }
//
//     if (nearIdRoad.length === 3) {
//         roadType = ERoadType.CENTER;
//     }
//
//     if (nearIdRoad.length === 2) {
//         if (nearIdRoad[0] === cellId - 1 && nearIdRoad[1] === cellId + 1) {
//             roadType = ERoadType.HORIZON;
//         } else if (nearIdRoad[0] === cellId - X_NB_CELL && nearIdRoad[1] === cellId + X_NB_CELL) {
//             roadType = ERoadType.VERTICAL;
//         } else {
//             roadType = ERoadType.CENTER;
//         }
//     }
//
//     if (nearIdRoad.length === 1) {
//         if (nearIdRoad[0] === cellId + 1 || nearIdRoad[0] === cellId - 1) {
//             roadType = ERoadType.HORIZON;
//         }
//         if (nearIdRoad[0] === cellId + X_NB_CELL || nearIdRoad[0] === cellId - X_NB_CELL) {
//             roadType = ERoadType.VERTICAL;
//         }
//     }
//
//     return roadType;
// };
//
//
// const getRoadNear = (cells: ICell[], cellId: number) => {
//
//     let roadNearId: number[] = [];
//
//     const nearId = getNearId(cellId);
//
//     nearId.map((id: number) => {
//         if (cells[id].type === EEntityType.ROAD) {
//             roadNearId.push(id);
//         }
//     });
//
//     return roadNearId;
//
// };

export default form;
