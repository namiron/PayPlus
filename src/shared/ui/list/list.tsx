import React, { memo, useCallback } from "react";
import { IProductsTypes } from "../../../entities/api/types/IProductsTypes";
import styles from "./styles/list.module.scss";
import Item from "../item/item";
import { countItemsOnPage } from "../../../entities/constants/data/pagination.constants";
import Pagination from "../../../features/pagination/Pagination";
import { useAppDispatch } from "../../../entities/hooks/store.hooks";
import { filterProductListFotInput } from "../../../store/controllers/product-slice";
import Nav from "../../../features/navigation/Nav";
import Search from "../../../features/search/Search.tsx";

interface IListProps {
  products: IProductsTypes[];
}

const List: React.FC<IListProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = React.useState<string>("");

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const firstPage = (currentPage - 1) * countItemsOnPage;
  const lastPage = firstPage + countItemsOnPage;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const countItemsOnCurrentPage = filteredProducts.slice(firstPage, lastPage);

  const moveToPage = (page: number) => setCurrentPage(page);

  const filterProductList = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      dispatch(filterProductListFotInput(e.target.value));
    },
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <Search search={search} onSearchChange={filterProductList} />
      <Nav />
      <ul className={styles.list}>
        {countItemsOnCurrentPage.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </ul>
      <Pagination
        productsTotalCount={filteredProducts.length}
        moveToPage={moveToPage}
      />
    </div>
  );
};

export default memo(List);
