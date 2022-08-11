import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tokenReducer from "./authSlice";
export default configureStore({
  reducer: {
    token: tokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
