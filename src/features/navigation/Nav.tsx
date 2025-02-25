import React, { useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../entities/hooks/store.hooks";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./styles/nav.module.scss";
import clsx from "clsx";
import { filterProductListForCategories } from "../../store/controllers/product-slice";

interface NavProps {
  className?: string;
}

const Nav: React.FC<NavProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.products.categories);

  const [leftOffset, setLeftOffset] = useState(0);

  const handleArrowClick = () => {
    setLeftOffset((prevOffset) => (prevOffset === 0 ? 78 : 0));
  };

  const handleCategoryClick = (categoryId: number) => {
    dispatch(filterProductListForCategories(categoryId));
  };

  return (
    <nav className={styles.navigation}>
      <IoIosArrowBack className={styles.arrow} onClick={handleArrowClick} />
      <ul
        className={styles.navList}
        style={{
          transform: `translateX(${leftOffset}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {categories.map((item) => (
          <li
            className={clsx(styles.navItem, className)}
            key={item.id}
            onClick={() => handleCategoryClick(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
