import React from "react";
import styles from "./styles/main.module.scss";
import ProductsLayout from "../layouts/products-layout";



const Main: React.FC = () => {


  return <main className={styles.main}>
<ProductsLayout/>
  </main>;
};

export default Main;
