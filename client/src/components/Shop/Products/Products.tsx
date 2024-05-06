import React from "react";

import styles from "./Products.module.scss";

import Filter from "./Filter/Filter";
import ProductList from "./ProductList/ProductList";

const Products: React.FC = () => {
  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.body}>
          <Filter />
          <ProductList />
        </div>
      </div>
    </section>
  );
};

export default Products;
