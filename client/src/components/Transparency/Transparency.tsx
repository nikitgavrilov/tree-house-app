import React from "react";

import styles from "./Transparency.module.scss";

import treehouse from "./../Welcome/images/treehouse.svg";
import decor01 from "./images/decor01.svg";
import decor02 from "./images/decor02.svg";
import decor03 from "./images/decor03.svg";
import decor04 from "./images/decor04.svg";
import decor05 from "./images/decor05.svg";

const Transparency: React.FC = () => {
  return (
    <section className={styles.transparency}>
      <div className={styles.body}>
        <div className={styles.titles}>
          <h3 className="sub-title">вы можете доверять</h3>
          <h2 className="title">Transparency in every detail</h2>
        </div>
        <div className={styles.image}>
          <img src={require("./images/bg.png")} alt="background" />
          <img src={treehouse} alt="treehouse" className={styles.treehouse} />
          <img src={decor01} alt="decoration" className={styles.decor01} />
          <img src={decor02} alt="decoration" className={styles.decor02} />
          <img src={decor03} alt="decoration" className={styles.decor03} />
          <img src={decor05} alt="decoration" className={styles.decor05} />
        </div>
      </div>
      <img src={decor04} alt="decoration" className={styles.decor04} />
    </section>
  );
};

export default Transparency;
