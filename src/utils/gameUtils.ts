import { EDiff, EEntityType, EOrientation, ICell, IEntity, IMoney } from "../types";
import { ENTITIES, X_NB_CELL } from "../constants";
import moment from "moment";
import { getNearId } from "./GridHelper";

export const calculateNewMoney = (money: IMoney, cells: ICell[]) => {
    const reducer = (total: number, entity: IEntity) => total + getNbEntities(cells, entity.type) * entity.gain;
    const gain = Object.values(ENTITIES).reduce(reducer, 0);

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
    return moment(date, 'MMM Do YY').add(1, 'd').format('MMM Do YY');
};

export const updateCells = (cells: ICell[]) => {
    cells.map((cell, i) => {
        if (cell.type === EEntityType.ROAD) {
            console.log('====> ', cell);
            cell.orientation = getRoadType(cells, i);
        }
    });

    return cells;
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
    let roadType = EOrientation.HORIZON;
    const nearIdRoad = getRoadNear(cells, cellId);

    if (nearIdRoad.length === 4) {
        roadType = EOrientation.CENTER;
    }

    if (nearIdRoad.length === 3) {
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
