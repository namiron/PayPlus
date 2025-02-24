import React, { InputHTMLAttributes } from "react";
import { IProductsTypes } from "../../entities/api/types/IProductsTypes";
import { CiSearch } from "react-icons/ci";
import { SEARCH_PLACEHOLDER } from "../../entities/constants/data/search.constants";
import clsx from "clsx";

type ISearchProps = {
  filterArray?: IProductsTypes[];
  setFilterArray?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Search: React.FC<ISearchProps> = ({ className }) => {
  //--------------------------
  //--------------------------

  return (
    <div className={clsx(className, "searchBlock")}>
      <CiSearch />
      <input type="text" placeholder={SEARCH_PLACEHOLDER} />
    </div>
  );
};

export default Search;
