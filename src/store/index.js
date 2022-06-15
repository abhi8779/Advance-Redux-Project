import { configureStore } from "@reduxjs/toolkit";
import toggleCartReducer from "./toggleCartSlice";
import totalProductsReducer from "./totalProductsSlice";
import cartItemsSliceReducer from "./cartItemsSlice";

const store = configureStore({
  reducer: {
    toggleCart: toggleCartReducer,
    totalProduct: totalProductsReducer,
    cartItems: cartItemsSliceReducer,
  },
});

export default store;
