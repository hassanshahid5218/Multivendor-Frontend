import { createReducer } from "@reduxjs/toolkit";

const getProductKey = (item) => item?._id || `${item?.id}-${item?.name}`;

const initialState = {
  wishlist: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

export const wishlistReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase("addToWishlist", (state, action) => {
        const item = action.payload;
        const itemKey = getProductKey(item);
        const isItemExist = state.wishlist.find(
          (i) => getProductKey(i) === itemKey
        );

        if (isItemExist) {
          state.wishlist = state.wishlist.map((i) =>
            getProductKey(i) === itemKey ? item : i
          );
        } else {
          state.wishlist.push(item);
        }
      })

      .addCase("removeFromWishlist", (state, action) => {
        state.wishlist = state.wishlist.filter(
          (i) => getProductKey(i) !== action.payload
        );
      });
  }
);
