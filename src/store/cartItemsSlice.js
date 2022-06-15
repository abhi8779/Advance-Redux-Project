import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart(state, action) {
      const repeatedItemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );

      if (repeatedItemIndex !== -1) {
        console.log(current(state.items)[repeatedItemIndex]);
        state.items[repeatedItemIndex] = {
          title: state.items[repeatedItemIndex].title,
          quantity: state.items[repeatedItemIndex].quantity + 1,
          total: state.items[repeatedItemIndex].total + action.payload.price,
          price: state.items[repeatedItemIndex].price,
        };
      } else {
        state.totalQuantity++;
        state.items.push({
          title: action.payload.title,
          quantity: 1,
          total: action.payload.price,
          price: action.payload.price,
        });
      }
    },
    increaseItem(state, action) {
      const repeatedItemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );
      state.items[repeatedItemIndex] = {
        title: state.items[repeatedItemIndex].title,
        quantity: state.items[repeatedItemIndex].quantity + 1,
        total: state.items[repeatedItemIndex].total + action.payload.price,
        price: state.items[repeatedItemIndex].price,
      };
    },
    decreaseItem(state, action) {
      const repeatedItemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );

      const title = state.items[repeatedItemIndex].title;
      console.log(title);
      if (state.items[repeatedItemIndex].quantity === 1) {
        console.log("clear");
        console.log(repeatedItemIndex);
        state.totalQuantity--;

        state.items = state.items.filter((item) => item.title != title);
        return;
      }
      state.items[repeatedItemIndex] = {
        title: state.items[repeatedItemIndex].title,
        quantity: state.items[repeatedItemIndex].quantity - 1,
        total: state.items[repeatedItemIndex].total - action.payload.price,
        price: state.items[repeatedItemIndex].price,
      };
    },
  },
});

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
