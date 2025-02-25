import React from "react";
import { countItemsOnPage } from "../../entities/constants/data/pagination.constants";
import Button from "../../shared/ui/ui-button/Button";
import styles from "./styles/pagination.module.scss";

interface IPaginationProps {
  productsTotalCount?: number | undefined;
  moveToPage: (p: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  productsTotalCount = 50,
  moveToPage,
}) => {
  //---------------------------------
  const pageCount = [];

  for (let i = 1; i <= Math.ceil(productsTotalCount / countItemsOnPage); i++) {
    pageCount.push(i);
  }

  //---------------------------------

  return (
    <div className={styles.pagination}>
      <ul className={styles.row}>
        {pageCount &&
          pageCount.length > 0 &&
          pageCount.map((item) => (
            <Button
              key={item}
              variant="pagination"
              onClick={() => moveToPage(item)}
              buttonLayoutStyles={styles.paginationButtonStyles}
            >
              {item}
            </Button>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
