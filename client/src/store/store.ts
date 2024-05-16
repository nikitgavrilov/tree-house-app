import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as productsReducer } from "./products/products.slice";
import { api } from "./api/api";

const rootReducer = combineReducers({
  productsReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
