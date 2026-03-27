import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// creating store
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
