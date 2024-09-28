import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  cartItems: cookies.get("cart") ? cookies.get("cart") : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsToCart: (state, action) => {
      const { item, noOfItems } = action.payload;
      console.log(item);
      const exist = state.cartItems.find((product) => product._id === item._id);

      if (exist) {
        exist.quantity += noOfItems;
        exist.totalPrice += item.price * noOfItems;
      } else {
        state.cartItems.push({
          _id: item._id,
          name: item.name,
          price: item.price,
          image: item.images[0].url,
          quantity: noOfItems,
          stock:item.Stock,
        });
      } 
      cookies.set("cart", JSON.stringify(state.cartItems));
    },
    removeItemsFromCart: (state, action) => {
      const id = action.payload;
      const exist = state.cartItems.find((product) => product._id === id);
      if (exist) {
        state.cartItems = state.cartItems.filter((product) => product._id !== id);
        cookies.set("cart", JSON.stringify(state.cartItems));
      }
    }
  },
});

export const { addItemsToCart, removeItemsFromCart } = cartSlice.actions;
export default cartSlice.reducer;
