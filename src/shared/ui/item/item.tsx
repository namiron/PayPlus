import React from "react";
import { IProductsTypes } from "../../../entities/api/types/IProductsTypes";
import Image from "../ui-image/image";
import styles from "./styles/item.module.scss";

interface IItemProps {
  product: IProductsTypes;
}

const Item: React.FC<IItemProps> = ({ product }) => {
  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            image={product.image_url}
            alt={product.name}
            layoutStyles={styles.layoutStyles}
          />
        </div>
        <div className={styles.holder}>
          <div className={styles.inner}>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>₪ {product.price}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
