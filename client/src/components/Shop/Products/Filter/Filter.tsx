import React from "react";

import styles from "./Filter.module.scss";
import FilterDropdown from "../../../UI/FilterDropdown/FilterDropdown";
import FilterCheckbox from "../../../UI/FilterCheckbox/FilterCheckbox";

const Filter: React.FC = () => {
  return (
    <div className={styles.filter}>
      <h3 className={styles.subTitle}>Фильтр</h3>
      <hr className={styles.divider} />
      <div className={styles.list}>
        <div className={styles.item}>
          <FilterDropdown title="Коллекция">
            <FilterCheckbox id="summer collection" text="Летняя коллекция" />
          </FilterDropdown>
        </div>
        <hr className={styles.divider} />
        <div className={styles.item}>
          <FilterDropdown title="Категории">
            <FilterCheckbox id="tops" text="Верхняя одежда" />
            <FilterCheckbox id="bottoms" text="Нижняя одежда" />
            <FilterCheckbox id="hats" text="Шляпы" />
          </FilterDropdown>
        </div>
        <hr className={styles.divider} />
        <div className={styles.item}>
          <FilterDropdown title="Размеры">
            <FilterCheckbox id="2-3" text="2-3 года" />
            <FilterCheckbox id="3-4" text="3-4 года" />
            <FilterCheckbox id="4-5" text="4-5 года" />
            <FilterCheckbox id="5-6" text="5-6 лет" />
            <FilterCheckbox id="6-7" text="6-7 лет" />
            <FilterCheckbox id="7-8" text="7-8 лет" />
            <FilterCheckbox id="8-9" text="8-9 лет" />
            <FilterCheckbox id="9-10" text="9-10 лет" />
          </FilterDropdown>
        </div>
        <hr className={styles.divider} />
        <div className={styles.item}>
          <FilterDropdown title="Материал">
            <FilterCheckbox id="cotton" text="Хлопок" />
            <FilterCheckbox id="linen" text="Шерсть" />
          </FilterDropdown>
        </div>
        <hr className={styles.divider} />
      </div>
    </div>
  );
};

export default Filter;
