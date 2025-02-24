import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductsTypes } from "../../entities/api/types/IProductsTypes";
import { PRODUCTS_DATA } from "../../entities/api/data-api";

interface ProductsList extends IProductsTypes {}

interface initialState {
  list: ProductsList[];
}

const initialState: initialState = {
  list: PRODUCTS_DATA,
};

const ProductsSlice = createSlice({
  name: "product_slice",
  initialState,
  reducers: {
    filterProductListFotInput(state, action: PayloadAction<string>) {
      state.list = state.list.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterProductListForSelect(state, action: PayloadAction<number>) {
      state.list = state.list.filter(
        (item) => item.category_id === action.payload
      );
    },
  },
});

export const { filterProductListFotInput, filterProductListForSelect } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
