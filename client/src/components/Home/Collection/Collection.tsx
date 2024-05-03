import React from "react";

import styles from "./Collection.module.scss";

import leaf from "./images/leaf.svg";

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
            <li className={styles.item}>Топы</li>
            <li className={styles.item}>Низ</li>
            <li className={styles.item}>Шляпы</li>
            <li className={styles.item}>Коллекция</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Collection;
