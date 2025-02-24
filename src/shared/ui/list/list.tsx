import React from "react";
import { IProductsTypes } from "../../../entities/api/types/IProductsTypes";
import Item from "../item/item";

interface IListProps {
  products: IProductsTypes[];
}

const List: React.FC<IListProps> = ({ products }) => {
  //------------------------

  //------------------------

  return (
    <ul>
      {products &&
        products.length > 0 &&
        products.map((product) => <Item key={product.id} product={product} />)
        }
    </ul>
  );
};

export default List;
