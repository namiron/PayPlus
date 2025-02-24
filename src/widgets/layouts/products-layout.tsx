import React from "react";
import { useAppSelector } from "../../entities/hooks/store.hooks";
import List from "../../shared/ui/list/list";

interface IMainProps {}

const ProductsLayout: React.FC<IMainProps> = () => {
  //-----------------------------
  const productList = useAppSelector((state) => state.products.list);
  //-----------------------------

  return (
    <div className="Products">
      <div className="search"></div>
      <div className="productsList">
        <List products={productList} />
      </div>
    </div>
  );
};

export default ProductsLayout;
