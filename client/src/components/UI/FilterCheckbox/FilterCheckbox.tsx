import React from "react";

import styles from "./FilterCheckbox.module.scss";

interface FilterCheckboxProps {
  id: string;
  text: string;
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ id, text }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className={styles.body}>
      <input
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        type="checkbox"
        id={id}
        className={styles.realCheckbox}
      />
      <span onClick={() => setIsChecked(!isChecked)} className={styles.customCheckbox}></span>
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default FilterCheckbox;
