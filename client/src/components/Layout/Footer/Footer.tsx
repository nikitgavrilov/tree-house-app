import React from "react";

import { Link as ScrollLink } from "react-scroll";

import styles from "./Footer.module.scss";

import logo from "./../images/logo.svg";
import leaf from "./../images/leaf.svg";
import leaf2 from "./../images/leaf-2.svg";
import up from "./../images/up.svg";

import paypal from "./../images/payments/paypal.svg";
import masterCard from "./../images/payments/Mastercard.svg";
import visa from "./../images/payments/visa.svg";
import googlePay from "./../images/payments/Google_Pay.svg";
import applePay from "./../images/payments/apple-pay.svg";
import afterPay from "./../images/payments/Afterpay.svg";
import shopPay from "./../images/payments/ShopPay.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <img src={leaf} alt="leaf" className={styles.leaf} />
      <img src={leaf2} alt="leaf2" className={styles.leaf2} />
      <ScrollLink to="header" spy={true} smooth={true} offset={0} duration={500}>
        <img src={up} alt="leaf2" className={styles.up} />
      </ScrollLink>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.author}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <h2 className={styles.title}>Tree House 2024 © All Rights reserved</h2>
          </div>
          <div className={styles.footerLinks}>
            <ul className={styles.list}>
              <h2 className={styles.title}>Навигация по сайту</h2>
              <li className={styles.link}>
                <Link to="/shop">Магазин</Link>
              </li>
              <li className={styles.link}>
                <Link to="/team">Команда</Link>
              </li>
              <li className={styles.link}>Наши вложения</li>
              <li className={styles.link}>FAQ</li>
              <li className={styles.link}>Контакты</li>
            </ul>
            <ul className={styles.list}>
              <h2 className={styles.title}>Соц. сети</h2>
              <li className={styles.link}>VK</li>
              <li className={styles.link}>Pinterest</li>
              <li className={styles.link}>Instagram</li>
            </ul>
            <ul className={styles.list}>
              <h2 className={styles.title}>Обслуживание клиентов</h2>
              <li className={styles.link}>Условия использования</li>
              <li className={styles.link}>Политика конфиденциальности</li>
              <li className={styles.link}>Доставка и возврат</li>
              <li className={styles.link}>Отследить ваш заказ</li>
              <li className={styles.link}>FAQ</li>
            </ul>
            <ul className={styles.list}>
              <h2 className={styles.title}>Методы оплаты</h2>
              <div className={styles.link}>
                <img src={paypal} alt="paypal" />
              </div>
              <div className={styles.link}>
                <img src={masterCard} alt="paypal" />
              </div>
              <div className={styles.link}>
                <img src={visa} alt="paypal" />
              </div>
              <div className={styles.link}>
                <img src={googlePay} alt="paypal" />
              </div>
              <div className={styles.link}>
                <img src={applePay} alt="paypal" />
              </div>
              <div className={styles.link}>
                <img src={afterPay} alt="paypal" />
              </div>
              <div className={styles.link}>
                <img src={shopPay} alt="paypal" />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
