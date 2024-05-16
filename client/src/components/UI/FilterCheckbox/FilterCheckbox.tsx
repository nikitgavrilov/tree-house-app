import React from "react";

import styles from "./FilterCheckbox.module.scss";
import { useAppSelector } from "../../../hooks/redux";
import { useActions } from "../../../hooks/useActions";

interface FilterCheckboxProps {
  id: string;
  text: string;
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ id, text }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const { selectedCategories } = useAppSelector((state) => state.productsReducer);
  const { setSelectedCategories } = useActions();

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);

    const isSelected = selectedCategories.includes(id);
    if (isSelected) {
      setSelectedCategories(selectedCategories.filter((categoryId) => categoryId !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  return (
    <div className={styles.body}>
      <input checked={isChecked} onChange={handleCheckboxClick} type="checkbox" id={id} className={styles.realCheckbox} />
      <span onClick={handleCheckboxClick} className={styles.customCheckbox}></span>
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default FilterCheckbox;
