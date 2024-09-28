import { configureStore } from "@reduxjs/toolkit";

import authSlice from '../features/auth/authSlice';
import productSlice from "../features/product/productSlice";
import productDetailsSlice from "../features/product/productDetailsSlice";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        product: productSlice,
        productDetails: productDetailsSlice,
        cart:cartSlice,
    }
})