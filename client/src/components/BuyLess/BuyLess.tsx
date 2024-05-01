import React from "react";
import styles from "./BuyLess.module.scss";
import boy from "./images/boy.svg";

const BuyLess: React.FC = () => {
  return (
    <section className={styles.buyLess}>
      <h1 className={styles.title}>
        <img src={boy} alt="boy" />
        Buy less, buy better
      </h1>
    </section>
  );
};

export default BuyLess;
