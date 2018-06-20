import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import rootReducer from './redux/reducers';

const xNbCell = 50;
const yNbCell = 40;
const initialCell = {color: '#FFF'};

const initState = () => {
    let cells = [];

    for (let i=0; i<yNbCell; i++) {
        cells.push([{}]);
        for (let j=0; j<xNbCell; j++) {
            cells[i][j] = initialCell
        }
    }

    return {xNbCell: xNbCell, yNbCell: yNbCell, cells: cells}
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
