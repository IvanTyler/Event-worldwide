import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import userReducer from "../reducers/userReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    user: userReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
