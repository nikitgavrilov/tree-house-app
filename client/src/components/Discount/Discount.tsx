import React from "react";

import styles from "./Discount.module.scss";

import vectors from "./images/vectors.svg";
import twentyFive from "./images/twenty-five.svg";
import star from "./images/star.svg";
import arrow from "./../Clothes/images/arrow.svg";

const Discount: React.FC = () => {
  return (
    <section className={styles.discount}>
      <div className={styles.left}>
        <div className={styles.vectors}>
          <img src={vectors} alt="vectors" />
        </div>
        <div className={styles.twentyFive}>
          <img src={twentyFive} alt="twentyFive" />
        </div>
        <p className={styles.description}>
          Избавьте себя от головной боли, связанной с бесконечными покупками, с нашей капсульной коллекцией. Купите все 14
          предметов, сэкономьте 25% и наслаждайтесь бесконечным выбором нарядов, одевая своих малышей в кратчайшие сроки!
        </p>
        <div className={styles.links}>
          <div className="buttons">
            <button className="orange">КУПИТЬ СЕЙЧАС</button>
            <button className="orange">
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className={styles.cloth}>
          <img src={require("./images/cloth.jpg")} alt="cloth" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.girls}>
          <img src={require("./images/girls.jpg")} alt="girls" />
        </div>
        <div className={styles.info}>
          <h3 className="sub-title">
            <img src={star} alt="star" />
            Вся коллекция имеет стиль, и каждый предмет идеально сочетается с другим.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Discount;
