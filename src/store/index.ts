// node_modules
import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {
  routerReducer,
} from "connected-next-router";

// slices
import walletSlice from "./walletSlice";

const reducer = combineReducers({
  wallet: walletSlice,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
