import React from "react";

import styles from "./Header.module.scss";

import logo from "./../images/logo.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  React.useEffect(() => {
    if (isMenuActive) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }

    return () => {
      document.body.classList.remove("lock");
    };
  }, [isMenuActive]);

  return (
    <header className={styles.header} id="header">
      <div className={styles.rows}>
        <div className={styles.discounts}>
          <h2 className={styles.title}>Получите скидку 25% на покупку всей капсульной коллекции.</h2>
          <div className={styles.divider} />
          <h2 className={styles.title}>Подпишитесь на нас и получите скидку 15% на первый заказ</h2>
        </div>
        <div className="container">
          <div className={styles.body}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <nav className={styles.nav}>
              <ul className={isMenuActive ? `${styles.list} ${styles.active}` : `${styles.list}`}>
                <li className={styles.link}>Магазин</li>
                <li className={styles.link}>
                  <Link to="/team">Команда</Link>
                </li>
                <li className={styles.link}>Наши вложения</li>
                <li className={styles.link}>Подарочная карта</li>
                <li className={styles.link}>FAQ</li>
                <li className={styles.link}>Контакты</li>
                <div className={styles.tabletLinks}>
                  <li className={styles.link}>Регистрация</li>
                  <li className={styles.link}>Авторизация</li>
                </div>
              </ul>
            </nav>
            <ul className={styles.other}>
              <li className={styles.link}>Регистрация</li>
              <li className={styles.link}>Авторизация</li>
            </ul>
            <div
              onClick={() => setIsMenuActive(!isMenuActive)}
              className={isMenuActive ? `${styles.burger} ${styles.active}` : `${styles.burger}`}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
