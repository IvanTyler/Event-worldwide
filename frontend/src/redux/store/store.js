import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import userReducer from "../reducers/userReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import eventReducer from "../reducers/eventReducers";
import subscribeReducer from "../reducers/subscribesReducer";

const rootReducer = combineReducers({
    user: userReducer,
    event: eventReducer,
    subscribe: subscribeReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
