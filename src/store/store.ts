import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./controllers/product-slice";
import CartSlice from "./controllers/cart-slice";

const store = configureStore({
  reducer: {
    products: ProductsSlice,
    cart: CartSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
