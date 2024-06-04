import React from "react";

import styles from "./Header.module.scss";

import logo from "./../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useCheckUserStatus } from "../../../hooks/useCheckUserStatus";

const Header: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = React.useState(false);
  const isUserAuth = useCheckUserStatus();

  const navigate = useNavigate();

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

  const logoutUser = () => {
    fetch("http://localhost:3001/api/v1/users/logout", {
      method: "GET",
      credentials: "include",
    }).then(() => window.location.reload());
  };

  const currentUrl = window.location.pathname;
  const adminUrl = currentUrl === "/admin";

  return (
    <header className={styles.header} id="header">
      <div className={styles.rows}>
        {adminUrl ? (
          <div className={styles.discounts}>
            <h2 className={styles.title}>Добро пожаловать</h2>
            <div className={styles.divider} />
            <h2 className={styles.title}>пользователь admin</h2>
          </div>
        ) : (
          <div className={styles.discounts}>
            <h2 className={styles.title}>Получите скидку 25% на покупку всей капсульной коллекции.</h2>
            <div className={styles.divider} />
            <h2 className={styles.title}>Подпишитесь на нас и получите скидку 15% на первый заказ</h2>
          </div>
        )}
        <div className="container">
          <div className={styles.body}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <nav className={styles.nav}>
              <ul className={isMenuActive ? `${styles.list} ${styles.active}` : `${styles.list}`}>
                <li className={styles.link}>
                  <Link to="/shop">Магазин</Link>
                </li>
                <li className={styles.link}>
                  <Link to="/team">Команда</Link>
                </li>
                <li className={styles.link}>Наши вложения</li>
                <li className={styles.link}>FAQ</li>
                <li className={styles.link}>Контакты</li>
                <div className={styles.tabletLinks}>
                  {isUserAuth ? (
                    <li onClick={() => logoutUser()} className={styles.link}>
                      Выйти
                    </li>
                  ) : (
                    <>
                      <li className={styles.link}>
                        <Link to="/reg">Регистрация</Link>
                      </li>
                      <li className={styles.link}>
                        <Link to="/login">Авторизация</Link>
                      </li>
                    </>
                  )}
                </div>
              </ul>
            </nav>
            <ul className={styles.other}>
              {isUserAuth.isAuth ? (
                <>
                  <li
                    onClick={() => {
                      logoutUser();
                      navigate("/");
                    }}
                    className={styles.link}
                  >
                    Выйти
                  </li>
                  {isUserAuth.login === "admin" ? (
                    <li className={styles.link}>
                      <Link to="/admin">Панель администратора</Link>
                    </li>
                  ) : (
                    <li className={styles.link}>
                      <Link to="/">Личный кабинет</Link>
                    </li>
                  )}
                </>
              ) : (
                <>
                  <li className={styles.link}>
                    <Link to="/reg">Регистрация</Link>
                  </li>
                  <li className={styles.link}>
                    <Link to="/login">Авторизация</Link>
                  </li>
                </>
              )}
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
