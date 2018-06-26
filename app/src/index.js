import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import rootReducer from './redux/reducers';

const xNbCell = 50;
const yNbCell = 30;
const initialCell = {type: 'empty'};
const money = 10000;

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
        currentSelection: {type: 'house_1', price: 100}
    }
};

const store = createStore(
    rootReducer,
    initState()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
