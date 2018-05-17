import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import formStep from './redux/reducers';

const store = createStore(formStep);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
