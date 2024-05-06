import React from "react";

import styles from "./Filter.module.scss";

const Filter: React.FC = () => {
  return (
    <div className={styles.filter}>
      <h3 className={styles.subTitle}>Фильтр</h3>
      <hr />
    </div>
  );
};

export default Filter;
