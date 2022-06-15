import { createSlice } from "@reduxjs/toolkit";

const initialState = { productCount: 0 };

const totalProductsSlice = createSlice({
  name: "totalProducts",
  initialState,
  reducers: {
    addProduct(state) {
      state.productCount++;
    },
    removeProduct(state) {
      state.productCount--;
    },
  },
});

export const totalProductsAction = totalProductsSlice.actions;

export default totalProductsSlice.reducer;
