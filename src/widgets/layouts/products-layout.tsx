import React from "react";
import { useAppSelector } from "../../entities/hooks/store.hooks";
import List from "../../shared/ui/list/list";
import styles from './styles/products.module.scss'

interface IMainProps {}

const ProductsLayout: React.FC<IMainProps> = () => {
  //-----------------------------
  const productList = useAppSelector((state) => state.products.list);
  //-----------------------------

  return (
    <div className={styles.layoutProduct}>
      <List products={productList} />
    </div>
  );
};

export default ProductsLayout;
