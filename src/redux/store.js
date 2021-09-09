import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducers from "./reducers/userReducers";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducers,
});

const persistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user"],
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const persistor = persistStore(store);

export { persistor };

export default store;
