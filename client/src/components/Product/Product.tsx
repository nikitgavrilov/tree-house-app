import React from "react";

import styles from "./Product.module.scss";

import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/api/productsApi";
import { IProduct } from "../../models/IProduct";

const Product: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(Number(id));
  const [product, setProduct] = React.useState<IProduct>();

  React.useEffect(() => {
    if (!isLoading && Array.isArray(data)) {
      setProduct((data as IProduct[])[0]);
    }
  }, [data, isLoading]);

  return (
    <section className={styles.product}>
      <div className="container">
        <h3 className="navigation">
          <span>
            <Link to="/">Главная</Link>
          </span>
          <img src={"/images/general/arrow-green.svg"} alt="arrow" />
          <Link to="/shop">Магазин</Link>
          <img src={"/images/general/arrow-green.svg"} alt="arrow" />
          {product?.title}
        </h3>
        <div className={styles.body}>
          <div className={styles.left}>
            <img src={product?.image} alt="img" />
          </div>
          <div className={styles.right}>
            <h2 className="title">{product?.title}</h2>
            <p className={styles.description}>{product?.description}</p>
            <p className={styles.price}>{product?.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}</p>
            <p className={styles.collection}>Коллекция: {product?.collection === "spring" ? "Весна" : "Лето"}</p>
            <p className={styles.size}>Размер: {product?.size}</p>
            <p className={styles.category}>
              Категория:{" "}
              {product?.category === "top"
                ? "Верхняя одежда"
                : product?.category === "bottom"
                ? "Нижняя одежда"
                : "Головные уборы"}
            </p>
            <div className="buttons">
              <button className="orange">КУПИТЬ СЕЙЧАС</button>
              <button className="orange">
                <img src={"/images/general/arrow.svg"} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
