import React from "react";
import { IProductsTypes } from "../../../entities/api/types/IProductsTypes";
import Image from "../ui-image/image";
import styles from "./styles/item.module.scss";

interface IItemProps {
  product: IProductsTypes;
}

const Item: React.FC<IItemProps> = ({ product }) => {
  return (
    <li className="item">
      <div className="container">
        <Image
          image={product.image_url}
          alt={product.name}
          layoutStyles={styles.layoutStyles}
        />
        <div className={styles.holder}>
          <p className="name">{product.name}</p>
          <p className="price">{product.price}</p>
        </div>
      </div>
    </li>
  );
};

export default Item;
