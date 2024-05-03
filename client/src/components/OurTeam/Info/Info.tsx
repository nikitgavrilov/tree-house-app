import React from "react";

import styles from "./Info.module.scss";

import short from "./images/short.svg";
import shortTwo from "./images/short-2.svg";
import sky from "./images/sky.svg";

const Info: React.FC = () => {
  return (
    <section className={styles.info}>
      <div className="container" style={{ position: "relative" }}>
        <img src={sky} alt="sky" className={styles.sky} />
        <div className={styles.body}>
          <div className={styles.image}>
            <img src={require("./images/mom.jpg")} alt="mother" />
          </div>
          <div className={styles.content}>
            <h2 className="title">Привет!</h2>
            <h3 className="sub-title">Просто информация о нас</h3>
            <div className={styles.whoWeAre}>
              <img src={short} alt="short" className={styles.short} />
              <img src={shortTwo} alt="short" className={styles.shortTwo} />
              <div className={styles.title}>
                <h2>
                  Who we are. <br />
                </h2>
                <h2>
                  Our vision. <br />
                </h2>
                <h2>
                  Our mission. <br />
                </h2>
              </div>
            </div>
            <div className={styles.text}>
              <p>
                Создано Анастасией, мамой со страстью к прогрессу, устойчивому развитию и этике. Treehouse – это не только
                вневременной и причудливый стиль, он также служит более глубокой цели, направленной на то, чтобы сделать лучше для
                нашей планеты, нашего общества и наших детей.
              </p>
              <p>
                Мы стремимся дать родителям возможность сделать осознанный выбор одежды для своих семей. Мы считаем, что
                Коллективный переход к более устойчивым практикам — единственный способ изменить ландшафт традиционной моды.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
