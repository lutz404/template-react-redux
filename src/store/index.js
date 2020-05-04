import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

import history from "../routes/history";
import rootReducer from "./ducks";
import rootSaga from "./sagas";

import { persistStore } from "redux-persist";
import persistReducers from "./persistReducers";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  persistReducers(rootReducer(history)),
  applyMiddleware(...middlewares)
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
