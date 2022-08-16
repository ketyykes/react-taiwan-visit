import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import tokenReducer from "./authSlice";
import selectResultReducers from "./searchSlice";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["token"],
};
const reducers = combineReducers({
  token: tokenReducer,
  selectResult: selectResultReducers,
});
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
