import React from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./FilterDropdown.module.scss";

import arrow from "./images/arrow.svg";

interface FilterDropdownProps {
  title: string;
  children: React.ReactNode;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ title, children }) => {
  const [isActive, setIsActive] = React.useState(true);

  return (
    <div className={styles.dropdown}>
      <div className={isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`} onClick={() => setIsActive(!isActive)}>
        {title}
        <img src={arrow} alt="arrow" />
      </div>
      <CSSTransition in={isActive} timeout={300} classNames="alert" unmountOnExit>
        {() => <div className={`${styles.content}`}>{children}</div>}
      </CSSTransition>
    </div>
  );
};

export default FilterDropdown;
