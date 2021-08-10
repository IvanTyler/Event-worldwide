import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import userReducer from "../reducers/userReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

import subscribeReducer from "../reducers/subscribesReducer";
import posterReducer from "../reducers/posterReducer";
import eventquickReducer from "../reducers/eventquickReducers";
import eventfullReducer from "../reducers/eventfullReducers";

const rootReducer = combineReducers({
    user: userReducer,
    poster: posterReducer,
    subscribe: subscribeReducer,
    eventquick: eventquickReducer,
    eventfull : eventfullReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
