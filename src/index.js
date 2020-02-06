import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import  layoutReducer  from "./reducers/layoutReducer";

import App from './App';

const store = createStore(layoutReducer);
ReactDOM.render(  
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

