import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface ProductStateProps {
  products: IProduct[];
  selectedCategories: string[];
}

const initialState: ProductStateProps = {
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
    setSelectedCategories: (state, action: PayloadAction<string[]>) => {
      state.selectedCategories = action.payload;
    },
  },
});

export const { actions, reducer } = productsSlice;
