import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import moviesReducer from "./moviesReducer";

let reducers = combineReducers(
    {
        movies: moviesReducer,
    }
)
let store = createStore(reducers, applyMiddleware(thunk));
export default store;