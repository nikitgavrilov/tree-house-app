import React from "react";
import styles from "./Clothes.module.scss";
import arrow from "./images/arrow.svg";

const Clothes: React.FC = () => {
  return (
    <section className={styles.clothes}>
      <div className="container">
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
            <div className={styles.buttons}>
              <button>КУПИТЬ СЕЙЧАС</button>
              <button>
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clothes;
