import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false };

const toggleCartSlice = createSlice({
  name: "toggleCart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const toggleCartActions = toggleCartSlice.actions;

export default toggleCartSlice.reducer;
