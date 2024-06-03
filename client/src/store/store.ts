import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as productsReducer } from "./products/products.slice";
import { userApi } from "./api/userApi";
import { productsApi } from "./api/productsApi";

const rootReducer = combineReducers({
  productsReducer,
  [userApi.reducerPath]: userApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware).concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
