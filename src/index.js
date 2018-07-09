import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { App } from './app/App';
import { HashRouter } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
