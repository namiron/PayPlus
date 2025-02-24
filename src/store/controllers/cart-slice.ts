import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsTypes } from "../../entities/api/types/IProductsTypes";

interface ICartProductType extends IProductsTypes {
  quantity: number;
}

interface initialState {
  cart: ICartProductType[];
}

const initialState: initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartProductType>) {
      const candidate = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (candidate) {
        candidate.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeToCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { removeToCart, clearCart, addToCart } = CartSlice.actions;

export default CartSlice.reducer;
