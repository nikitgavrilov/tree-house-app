import React from "react";

import styles from "./Clothes.module.scss";

import arrow from "./images/arrow.svg";
import bottomArrow from "./images/bottom-arrow.svg";

const Clothes: React.FC = () => {
  return (
    <section className={styles.clothes}>
      <div className="container" style={{ position: "relative" }}>
        <div className={styles.row}>
          <div className={styles.body}>
            <h3 className={styles.treehouse}>TREEHOUSE:</h3>
            <h1 className={styles.title}>Little Clothes.</h1>
            <h2 className={styles.title}>Big impact.</h2>
            <p className={styles.description}>
              Высококачественная детская одежда, тщательно изготовленная из экологически чистых материалов, бережно относящихся к
              планете. Эти вневременные модели станут идеальными спутниками вашего маленького искателя приключений, куда бы его ни
              завело воображение.
            </p>
            <div className="buttons">
              <button className="orange">КУПИТЬ СЕЙЧАС</button>
              <button className="orange">
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.other}>
          <p>* Покупай добро, делай добро</p>
        </div>
        <div className={styles.scroll}>
          <button>Scroll</button>
          <img src={bottomArrow} alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default Clothes;
