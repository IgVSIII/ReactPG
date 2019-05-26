import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import reducer from './reducers';
import App from './container/app';
import './css/reset.css';
import './css/index.css';


function initialState() {
    return   [];   
}


const store = createStore(reducer, initialState());


ReactDOM.render((
    <BrowserRouter>
        <App store={store} />
    </BrowserRouter>
), document.getElementById('root'));   



 
   
