import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tokenReducer from "./authSlice";
import selectResultReducers from "./searchSlice";
// const reducer = combineReducers({tokenReducer,searchReducer})

export default configureStore({
  reducer: {
    token: tokenReducer,
    selectResult: selectResultReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
