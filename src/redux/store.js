import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./reducers/user";
import  cartReducer  from "./reducers/cart";
import sellerReducer from "./reducers/seller";
import { eventReducer } from "./reducers/event";
import { productReducer } from "./reducers/product";
import { wishlistReducer } from "./reducers/wishlist";
import { orderReducer } from "./reducers/order";
const Store=configureStore({
    reducer:{
        user:userReducers,
        cart:cartReducer,
        seller: sellerReducer,
        wishlist:wishlistReducer,
        events: eventReducer,
        products: productReducer,
        order: orderReducer,
    }
});

export default Store;