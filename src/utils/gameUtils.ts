import { EDiff, EEmptyType, EEntityType, EOrientation, ICell, IMoney } from "../types";
import { ENTITIES, INITIAL_CELL, ORIGIN_CELL_ID, X_NB_CELL, Y_NB_CELL } from "../constants";
import moment from "moment";
import { getNearId } from "./gridUtils";
import { cloneDeep } from 'lodash';

export const createInitCells = () => {
    let cells = [] as ICell[];
    let nbCells = X_NB_CELL * Y_NB_CELL;

    for (let i = 0; i < nbCells; i++) {
        cells[i] = cloneDeep(INITIAL_CELL);
        // @ts-ignore
        cells[i].emptyType = EEmptyType[`LAND_${Math.floor(Math.random() * 5) + 1  }`];
    }

    cells[ORIGIN_CELL_ID] = {
        type: EEntityType.ROAD,
        orientation: EOrientation.VERTICAL,
        people: 0,
        electricity: true,
        water: true,
        connected: true,
        emptyType: EEmptyType.LAND_1
    };

    return cells;
};

export const calculateNewMoney = (money: IMoney, cells: ICell[]) => {
    let gain = 0;

    Object.keys(cells).map((cell, i) => {
        if (cells[i].connected || cells[i].type === EEntityType.ROAD && !cells[i].connected) {
            gain += ENTITIES[cells[i].type as EEntityType].gain;
        }
    });

    const newMoney = money.value + gain;
    const indice = newMoney > money.value ? EDiff.UP : (newMoney < money.value ? EDiff.DOWN : EDiff.EQUAL);
    const diff = newMoney - money.value;

    return {
        value: newMoney,
        indice: indice,
        diff: diff
    };
};

export const calculateNewDate = (date: string) => {
    return moment(date, 'MMM Do YY').add(1, 'd').format('MMM Do YYYY');
};

export const updateCells = (cells: ICell[]) => {
    cells.map((cell, id) => {
        if (cell.type === EEntityType.ROAD) {
            cell.orientation = getRoadType(cells, id);
        }
    });

    connectionLoop(cells);

    return cells;
};

const connectionLoop = (cells: ICell[]) => {
    let updating = X_NB_CELL * Y_NB_CELL;

    cells.map((cell: ICell, id: number) => {
        if (cell.type !== EEntityType.EMPTY && cell.type !== EEntityType.VEGETATION && id !== ORIGIN_CELL_ID) {
            cell.connected = false;
        }
    });

    while (updating > 0) {
        updating = X_NB_CELL * Y_NB_CELL;

        cells.map((cell: ICell, id: number) => {
            if (cell.type !== EEntityType.EMPTY && cell.type !== EEntityType.VEGETATION && id !== ORIGIN_CELL_ID) {
                const connected = isConnected(cells, id);

                if (connected === cell.connected) {
                    updating--;
                }
                cell.connected = connected;
            } else {
                updating--;
            }
        });
    }
};

const isConnected = (cells: ICell[], id: number) => {
    return getNearId(id).some(id => cells[id].type === EEntityType.ROAD && cells[id].connected);
};

const getNbEntities = (cells: ICell[], type: EEntityType) => {
    let counter = 0;

    Object.keys(cells).map((cell, i) => {
        if (cells[i].type === type) {
            counter++;
        }
    });

    return counter;
};

const getRoadType = (cells: ICell[], cellId: number) => {
    let roadType = cellId === ORIGIN_CELL_ID ? EOrientation.VERTICAL : EOrientation.HORIZON;
    const nearIdRoad = getRoadNear(cells, cellId);

    if (nearIdRoad.length === 4 || nearIdRoad.length === 3) {
        roadType = EOrientation.CENTER;
    }

    if (nearIdRoad.length === 2) {
        if (nearIdRoad[0] === cellId - 1 && nearIdRoad[1] === cellId + 1) {
            roadType = EOrientation.HORIZON;
        } else if (nearIdRoad[0] === cellId - X_NB_CELL && nearIdRoad[1] === cellId + X_NB_CELL) {
            roadType = EOrientation.VERTICAL;
        } else {
            roadType = EOrientation.CENTER;
        }
    }

    if (nearIdRoad.length === 1) {
        if (nearIdRoad[0] === cellId + 1 || nearIdRoad[0] === cellId - 1) {
            roadType = EOrientation.HORIZON;
        }
        if (nearIdRoad[0] === cellId + X_NB_CELL || nearIdRoad[0] === cellId - X_NB_CELL) {
            roadType = EOrientation.VERTICAL;
        }
    }

    return roadType;
};


const getRoadNear = (cells: ICell[], cellId: number) => {
    let roadNearId: number[] = [];
    const nearId = getNearId(cellId);

    nearId.map((id: number) => {
        if (cells[id].type === EEntityType.ROAD) {
            roadNearId.push(id);
        }
    });

    return roadNearId;
};
