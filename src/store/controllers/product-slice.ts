import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductsTypes } from "../../entities/api/types/IProductsTypes";
import { CATEGORIES_DATA, PRODUCTS_DATA } from "../../entities/api/data-api";
import { ICategoriesType } from "../../entities/api/types/ICategories";

interface ProductsList extends IProductsTypes {}
interface CategoriesList extends ICategoriesType {}

interface initialState {
  list: ProductsList[];
  categories: CategoriesList[];
}

const initialState: initialState = {
  list: PRODUCTS_DATA,
  categories: CATEGORIES_DATA,
};

const ProductsSlice = createSlice({
  name: "product_slice",
  initialState,
  reducers: {
    filterProductListFotInput(state, action: PayloadAction<string>) {
      state.list = PRODUCTS_DATA.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterProductListForCategories(state, action: PayloadAction<number>) {
      state.list = PRODUCTS_DATA.filter(
        (item) => item.category_id === action.payload
      );
    },
  },
});

export const { filterProductListFotInput, filterProductListForCategories } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
