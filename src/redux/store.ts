import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {thunk} from "redux-thunk";

import rootReducer from "./rootReducer";

const persistConfig = {
  key: "webVideoPersistStore",
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

const persistor = persistStore(store);

export default store;
export { persistor };