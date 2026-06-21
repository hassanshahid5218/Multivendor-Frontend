import { createSlice } from "@reduxjs/toolkit";

const getProductKey = (item) => item?._id || `${item?.id}-${item?.name}`;

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const itemKey = getProductKey(item);
      const isItemExist = state.cart.find((i) => getProductKey(i) === itemKey);

      if (isItemExist) {
        state.cart = state.cart.map((i) =>
          getProductKey(i) === itemKey ? item : i
        );
      } else {
        state.cart.push(item);
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (i) => getProductKey(i) !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
