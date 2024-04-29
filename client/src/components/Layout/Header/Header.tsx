import React from "react";
import styles from "./Header.module.scss";
import logo from "./logo.svg";

const Header: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  React.useEffect(() => {
    if (isMenuActive) {
      document.body.classList.remove("lock");
    } else {
      document.body.classList.add("lock");
    }

    return () => {
      document.body.classList.remove("lock");
    };
  }, [isMenuActive]);

  return (
    <header className={styles.header}>
      <div className={styles.rows}>
        <div className={styles.discounts}>
          <h2 className={styles.title}>Get 25% off buying the entire capsule collection</h2>
          <div className={styles.divider} />
          <h2 className={styles.title}>Subscribe to us and get 15% off your first order</h2>
        </div>
        <div className="container">
          <div className={styles.body}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <nav className={styles.nav}>
              <ul className={isMenuActive ? `${styles.list} ${styles.active}` : `${styles.list}`}>
                <li className={styles.link}>Shop +</li>
                <li className={styles.link}>Our team</li>
                <li className={styles.link}>Our impact</li>
                <li className={styles.link}>Gift card</li>
                <li className={styles.link}>FAQ</li>
                <li className={styles.link}>Journal</li>
                <li className={styles.link}>Contacts</li>
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
