import {todoReducer, notificationsReducer} from "./reducers";
import {combineReducers, createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const reducers = combineReducers({
    todoReducer: todoReducer,
    notificationsReducer: notificationsReducer
});
//state
//state.todoReducer //array
//state.notificationsReducer //obhect
//state.notificationsReducer.notificationText

export const store = createStore(reducers, applyMiddleware(thunk));