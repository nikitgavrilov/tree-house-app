import React from "react";

import styles from "./Collection.module.scss";

import leaf from "./images/leaf.svg";
import { Link } from "react-router-dom";

const Collection: React.FC = () => {
  return (
    <section className={styles.collection}>
      <div className="container" style={{ position: "relative" }}>
        <div className={styles.leaf}>
          <img src={leaf} alt="leaf" />
        </div>
        <div className={styles.titles}>
          <h3 className="sub-title">давай сделаем покупки</h3>
          <h2 className="title">Что Вы ищете?</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.categories}>
            <img src={require("./images/categories.jpg")} alt="categories" />
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/shop">Топы</Link>
            </li>
            <li className={styles.item}>
              <Link to="/shop">Низ</Link>
            </li>
            <li className={styles.item}>
              <Link to="/shop">Шляпы</Link>
            </li>
            <li className={styles.item}>
              <Link to="/shop">Коллекция</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Collection;
