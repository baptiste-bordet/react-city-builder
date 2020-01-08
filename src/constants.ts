import { EEntityType, ICell, IEntity } from "./types";

export const LOOP_TIME = 1000;

export const X_NB_CELL = 60;
export const Y_NB_CELL = 35;

export const ORIGIN_CELL_ID = X_NB_CELL / 2;

export const INITIAL_MONEY = 10000;

export const INITIAL_CELL: ICell = {
    type: EEntityType.EMPTY,
    people: 0,
    electricity: false,
    water: false,
    connected: false,
};

type EntityMap = { [key in EEntityType]: IEntity }

export const ENTITIES: EntityMap = {
    [EEntityType.HOUSE]: { type: EEntityType.HOUSE, label: "House", price: 100, gain: 1 },
    [EEntityType.SHOP]: { type: EEntityType.SHOP, label: "Shop", price: 180, gain: 4 },
    [EEntityType.ROAD]: { type: EEntityType.ROAD, label: "Road", price: 25, gain: -1 },
    [EEntityType.VEGETATION]: { type: EEntityType.VEGETATION, label: "Vegetation", price: 30, gain: -1 },
    [EEntityType.EMPTY]: { type: EEntityType.EMPTY, label: "empty", price: 0, gain: 0 },
    [EEntityType.ERASE]: { type: EEntityType.ERASE, label: "erase", price: 2, gain: 0 }
};
