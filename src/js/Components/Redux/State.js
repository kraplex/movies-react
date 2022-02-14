import {createStore} from "redux";
import StateReducer from "./StateReducer";


let reducers = combineReducers(
    {
        state: StateReducer,
    }
)

// for production version
// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// for chrome extension only
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store;

