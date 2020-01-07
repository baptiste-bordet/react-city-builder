import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import moment from 'moment';

import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import rootReducer from './redux/reducers';

const xNbCell = 30;
const yNbCell = 15;
const initialCell = {type: 'empty'};
const moneyValue = 10000;
const date = moment().format("MMM Do YY");

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
        money: {
            value: moneyValue,
            indice: 'equal',
            diff: 0,
        },
        selectedEntity: 'house_1',
        date: date
    }
};

const store = createStore(
    rootReducer,
    initState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
