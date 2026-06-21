import { addToCart, removeFromCart as removeFromCartAction } from "../reducers/cart";

const getProductKey = (item) => item?._id || `${item?.id}-${item?.name}`;

// add to cart
export const addTocart = (data) => async (dispatch, getState) => {
  dispatch(addToCart(data));
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
};

// remove from cart
export const removeFromCart = (data) => async (dispatch, getState) => {
  dispatch(removeFromCartAction(getProductKey(data)));
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
};
