export enum EEntityType {
    HOUSE = 'house_1',
    SHOP = 'shop_1',
    ROAD = 'road_1',
    VEGETATION = 'vegetation_1',
    EMPTY = 'empty',
}

export enum EDiff {
    UP = 'up',
    DOWN = 'down',
    EQUAL = 'equal'
}

export enum ERoadType {
    HORIZON,
    CENTER,
    VERTICAL
}

export interface IState {
    cells: ICell[],
    money: IMoney,
    update: number,
    date: number,
    selectedEntity: EEntityType
}

export interface ICell {
    type: EEntityType,
    people: number
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
