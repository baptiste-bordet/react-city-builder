import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
