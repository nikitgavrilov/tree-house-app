import React from "react";
import styles from "./Welcome.module.scss";

import hand from "./images/hand.jpg";
import boy from "./images/boy.jpg";
import leaf from "./images/leaf.svg";
import treehouse from "./images/treehouse.svg";
import arrow from "./images/arrow.svg";

const Welcome: React.FC = () => {
  return (
    <section className={styles.welcome}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.images}>
            <div className={styles.hand}>
              <img src={hand} alt="hand" />
            </div>
            <div className={styles.boy}>
              <img src={boy} alt="boy" />
            </div>
            <div className={styles.leaf}>
              <img src={leaf} alt="leaf" />
            </div>
            <div className={styles.treehouse}>
              <img src={treehouse} alt="treehouse" />
            </div>
          </div>
          <div className={styles.info}>
            <h3 className={styles.subTitle}>welcome</h3>
            <h2 className={styles.title}>Hi, meet TreeHouse.</h2>
            <p className={styles.text}>
              Тщательно созданная детская одежда, нейтральная с гендерной точки зрения, ориентированная на вашего малыша и
              разработанная с большой заботой о нашей планете и людях на ней.
            </p>
            <div className={styles.readMore}>
              <div className="buttons">
                <button className="green">Почитать больше</button>
                <button className="green">
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
