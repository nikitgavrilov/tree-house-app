import React from "react";

import styles from "./Mission.module.scss";

import one from "./images/one.svg";
import two from "./images/two.svg";
import three from "./images/three.svg";
import fourth from "./images/fourth.svg";
import anastasia from "./images/Anastasia.svg";

const Mission: React.FC = () => {
  return (
    <section className={styles.mission}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.left}>
            <h3 className="sub-title">устойчивые ценности</h3>
            <h2 className="title">Наша миссия.</h2>
            <h3 className="sub-title">
              ПРИСОЕДИНЯЙТЕСЬ К НАМ В ПУТЕШЕСТВИИ к этическим нормам, устойчивой моде и счастливым детям!
            </h3>
            <p className={styles.text}>
              Наша миссия — произвести революцию в детской моде, создав те изменения, которые мы хотим видеть в мире. Мы верим,
              что одежда должен быть прежде всего добрым.
            </p>
            <div className={styles.image}>
              <img src={require("./images/manufacture.jpg")} alt="manufacture" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.images}>
              <img src={require("./images/kids.jpg")} alt="kids" />
              <img src={require("./images/hands.jpg")} alt="hands" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>Мы придерживаемся 4 ключевых принципов:</h3>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <img src={one} alt="one" />
                  Сертифицированные экологически чистые материалы
                </li>
                <li className={styles.item}>
                  <img src={two} alt="two" />
                  Справедливые и безопасные условия труда для всех участников нашей цепочки поставок.
                </li>
                <li className={styles.item}>
                  <img src={three} alt="three" />
                  Минимизация нашего воздействия на окружающую среду
                </li>
                <li className={styles.item}>
                  <img src={fourth} alt="fourth" />
                  Постоянная оценка и улучшение всего вышеперечисленного.
                </li>
              </ul>
              <div className={styles.author}>
                <img src={anastasia} alt="anastasia" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
