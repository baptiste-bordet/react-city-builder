export enum EEntityType {
    HOUSE = 'house_1',
    SHOP = 'shop_1',
    ROAD = 'road_1',
    VEGETATION = 'vegetation_1',
    EMPTY = 'empty',
    ERASE = 'erase',
}

export enum EDiff {
    UP = 'up',
    DOWN = 'down',
    EQUAL = 'equal'
}

export enum EOrientation {
    HORIZON = 'horizon',
    CENTER = 'center',
    VERTICAL = 'vertical'
}

export enum EEmptyType {
    LAND_1 = 'land_1',
    LAND_2 = 'land_2',
    LAND_3 = 'land_3',
    LAND_4 = 'land_4',
    LAND_5 = 'land_5',
    SEA = 'sea'
}

export interface IState {
    cells: ICell[],
    money: IMoney,
    update: number,
    date: number,
    selectedEntity: EEntityType,
    infoId: number | null
}

export interface ICell {
    type: EEntityType,
    people: number,
    electricity: boolean,
    water: boolean,
    connected: boolean,
    emptyType: EEmptyType,
    orientation?: EOrientation
}

export interface IEntity {
    type: EEntityType,
    label: string,
    price: number,
    gain: number,
}

export interface IMoney {
    value: number,
    indice: EDiff,
    diff: number
}

