import React from "react";
import { CiSearch } from "react-icons/ci";
import { SEARCH_PLACEHOLDER } from "../../entities/constants/data/search.constants";
import styles from "./styles/search.module.scss";

interface ISearchProps {
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<ISearchProps> = ({ search, onSearchChange }) => {
  return (
    <div className={styles.searchBlock}>
      <CiSearch />
      <input
        type="text"
        value={search}
        placeholder={SEARCH_PLACEHOLDER}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default Search;
