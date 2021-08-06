import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import userReducer from "../reducers/userReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import eventReducer from "../reducers/eventReducers";

const rootReducer = combineReducers({
    user: userReducer,
    event: eventReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
