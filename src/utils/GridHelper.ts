import { X_NB_CELL, Y_NB_CELL } from "../constants";

export const getAroundId = (cellId: number) => {

    let nearId = [];

    if ((cellId + 1) % X_NB_CELL !== 0) {
        nearId.push(cellId - X_NB_CELL + 1);
        nearId.push(cellId + 1);
        nearId.push(cellId + X_NB_CELL + 1);
    }

    if (cellId % X_NB_CELL !== 0) {
        nearId.push(cellId - X_NB_CELL - 1);
        nearId.push(cellId - 1);
        nearId.push(cellId + X_NB_CELL - 1);
    }

    nearId.push(cellId - X_NB_CELL);
    nearId.push(cellId + X_NB_CELL);

    return nearId.filter((id) => {
        return id >= 0 && id <= (X_NB_CELL * Y_NB_CELL - 1)
    }).sort((x: number, y: number) => x - y);
};

export const getNearId = (cellId: number) => {
    let nearId = [];

    if ((cellId + 1) % X_NB_CELL !== 0) {
        nearId.push(cellId + 1);
    }

    if (cellId % X_NB_CELL !== 0) {
        nearId.push(cellId - 1);
    }

    nearId.push(cellId - X_NB_CELL);
    nearId.push(cellId + X_NB_CELL);

    return nearId.filter((id) => {
        return id >= 0 && id <= (X_NB_CELL * Y_NB_CELL - 1)
    }).sort((x: number, y: number) => x - y);
};

