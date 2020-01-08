import { X_NB_CELL, Y_NB_CELL } from "../constants";

export const getAroundId = (id: number) => {
    let nearId = [];

    if ((id + 1) % X_NB_CELL !== 0) {
        nearId.push(id - X_NB_CELL + 1);
        nearId.push(id + 1);
        nearId.push(id + X_NB_CELL + 1);
    }

    if (id % X_NB_CELL !== 0) {
        nearId.push(id - X_NB_CELL - 1);
        nearId.push(id - 1);
        nearId.push(id + X_NB_CELL - 1);
    }

    nearId.push(id - X_NB_CELL);
    nearId.push(id + X_NB_CELL);

    return nearId.filter((id) => {
        return id >= 0 && id <= (X_NB_CELL * Y_NB_CELL - 1)
    }).sort((x: number, y: number) => x - y);
};

export const getNearId = (id: number) => {
    let nearId = [];

    if ((id + 1) % X_NB_CELL !== 0) {
        nearId.push(id + 1);
    }

    if (id % X_NB_CELL !== 0) {
        nearId.push(id - 1);
    }

    nearId.push(id - X_NB_CELL);
    nearId.push(id + X_NB_CELL);

    return nearId.filter((id) => {
        return id >= 0 && id <= (X_NB_CELL * Y_NB_CELL - 1)
    }).sort((x: number, y: number) => x - y);
};

