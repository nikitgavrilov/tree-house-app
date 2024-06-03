import React from "react";

import styles from "./Clothes.module.scss";

import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

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
              <button className="orange">
                <Link to="/shop">КУПИТЬ СЕЙЧАС</Link>
              </button>
              <button className="orange">
                <Link to="/shop">
                  <img src="/images/general/arrow.svg" alt="arrow" />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.other}>
          <p>* Покупай добро, делай добро</p>
        </div>
        <div className={styles.scroll}>
          <button>
            <ScrollLink to="welcome" spy={true} smooth={true} offset={-100} duration={500}>
              Scroll
            </ScrollLink>
          </button>
          <img src="/images/general/arrow.svg" alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default Clothes;
