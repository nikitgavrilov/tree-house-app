import React from "react";

import styles from "./ModalDropdown.module.scss";
import { CSSTransition } from "react-transition-group";

interface ModalDropdownProps {
  title: string;
  children: React.ReactNode;
}

const ModalDropdown: React.FC<ModalDropdownProps> = ({ title, children }) => {
  const [isActive, setIsActive] = React.useState(true);

  return (
    <div className={styles.dropdown}>
      <div className={isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`} onClick={() => setIsActive(!isActive)}>
        {title}
        <img src={"/images/general/dropdown-arrow.svg"} alt="arrow" />
      </div>
      <CSSTransition in={isActive} timeout={300} classNames="alert" unmountOnExit>
        {() => <ul className={`${styles.list}`}>{children}</ul>}
      </CSSTransition>
    </div>
  );
};

export default ModalDropdown;
