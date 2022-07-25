// node_modules
import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";
import { createRouterMiddleware, initialRouterState, routerReducer } from 'connected-next-router'
import createSagaMiddleware from 'redux-saga'
import Router from 'next/router'
import rootSaga from './saga'

// slices
import nftSlice from "./nftSlice";

const routerMiddleware = createRouterMiddleware()
const sagaMiddleware = createSagaMiddleware()
const { asPath } = Router.router || {}

const reducer = combineReducers({
  router: routerReducer,
  nft: nftSlice,
});

const store = configureStore({
  preloadedState: {
    router: initialRouterState(asPath)
  },
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false })
      .concat(routerMiddleware)
      .concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export default store