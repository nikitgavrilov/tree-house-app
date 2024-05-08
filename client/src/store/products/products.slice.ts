import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedCategories: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload;
    },
  },
});

export const { actions, reducer } = productsSlice;
