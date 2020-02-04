import restaurants from "./restaurants.reducer";
import user from "./user.reducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  restaurants,
  user
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySagas);

export default store;
