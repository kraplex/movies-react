import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./js/Components/Redux/Store";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
