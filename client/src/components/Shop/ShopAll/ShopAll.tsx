import React from "react";

import styles from "./ShopAll.module.scss";

import shopAll from "./images/shop-all.jpg";
import arrow from "./../../../assets/images/arrow-green.svg";
import { Link } from "react-router-dom";

const ShopAll: React.FC = () => {
  return (
    <section className={styles.shopAll}>
      <div className="container">
        <h3 className={styles.navigation}>
          <span>
            <Link to="/">Главная</Link>
          </span>
          <img src={arrow} alt="arrow" />
          Магазин
        </h3>
        <div className={styles.body}>
          <div className={styles.image}>
            <img src={shopAll} alt="shopAll" />
            <div className={styles.titles}>
              <h3 className={styles.subTitle}>Купить все</h3>
              <h2 className={styles.title}>Стили, одобренные детьми и природой</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopAll;
