import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import rootReducer from './redux/reducers';

const xNbCell = 40;
const yNbCell = 20;
const initialCell = {type: 'empty'};
const loopTime = 10000;
const money = 10000;
const entities = {
    house: { type: 'house_1', price: 100, gain: 1 },
    shop: { type: 'shop_1', price: 180, gain: 4 },
    road: { type: 'road', price: 25, gain: -1 },
    vegetation: { type: 'vegetation', price: 30, gain: -1 }
};

const initState = () => {
    let cells = {};
    let nbCells = xNbCell * yNbCell;

    for (let i of Array(nbCells).keys()) {
        cells[i] = initialCell;
    }

    return {
        xNbCell: xNbCell,
        yNbCell: yNbCell,
        cells: cells,
        money: money,
        indice: 'equal',
        entities: entities,
        selectedEntity: entities.house,
        loopTime: loopTime
    }
};

const store = createStore(
    rootReducer,
    initState()
);

ReactDOM.render(
    <Provider store={store}>
        <App loopTime={loopTime} />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
