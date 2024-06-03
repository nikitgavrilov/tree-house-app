import React from "react";

import styles from "./ProductList.module.scss";

import { useActions } from "../../../../hooks/useActions";
import { useAppSelector } from "../../../../hooks/redux";
import { IProduct } from "../../../../models/IProduct";
import { useGetProductsQuery } from "../../../../store/api/productsApi";
import { Link } from "react-router-dom";

const ProductList: React.FC = () => {
  const { data } = useGetProductsQuery(null);
  const { setProducts } = useActions();
  const { products, selectedCategories } = useAppSelector((state) => state.productsReducer);

  React.useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const filterProducts = (products: IProduct[], selectedCategories: string[]): IProduct[] => {
    return products.filter((product) =>
      selectedCategories.some(
        (category) =>
          product.collection === category ||
          product.category === category ||
          product.size === category ||
          product.material === category
      )
    );
  };

  const filteredProducts = selectedCategories.length > 0 ? filterProducts(products, selectedCategories) : products;

  return (
    <div className={styles.body}>
      {data &&
        filteredProducts.map((product) => {
          return (
            <div key={product.id} className={styles.column}>
              <div className={styles.item}>
                <Link to={`/shop/${product.id}`}>
                  <div className={styles.image}>
                    <img src={product.image} alt={product.title} />
                  </div>
                </Link>
                <h3 className="sub-title">{product.title}</h3>
                <div className={styles.reviews}>
                  <p>Количество отзывов: {product.reviews}</p>
                </div>
                <h2 className={styles.price}>{product.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}</h2>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
