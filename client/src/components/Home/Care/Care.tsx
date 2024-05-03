import React from "react";

import styles from "./Care.module.scss";

import stickStar from "./../../../assets/images/stick-star.svg";
import svgGirl from "./images/svg-girl.svg";
import one from "./images/one.svg";
import two from "./images/two.svg";
import three from "./images/three.svg";
import four from "./images/four.svg";

const Care: React.FC = () => {
  return (
    <section className={styles.care}>
      <div className="container" style={{ position: "relative" }}>
        <div className={styles.star}>
          <img src={stickStar} alt="star" />
        </div>
        <div className={styles.body}>
          <div className={styles.left}>
            <h3 className="sub-title">Наши заботы</h3>
            <h2 className="title">Приоритет - ваше спокойствие.</h2>
            <div className={styles.description}>
              <div className={styles.item}>
                <h2 className={styles.label}>
                  <img src={one} alt="first" />
                  Экономия вашего времени
                </h2>
                <p className={styles.text}>
                  Каждый предмет нашей коллекции идеально сочетается с другим. Инвестируйте в несколько штук или всю линию, чтобы
                  получить Сезонные варианты одежды, рассчитанные на то, чтобы прослужить долго и понравиться другим, когда ваш
                  малыш вырастет.
                </p>
              </div>
              <div className={styles.item}>
                <h2 className={styles.label}>
                  <img src={two} alt="second" />
                  этичное производство
                </h2>
                <p className={styles.text}>
                  Наша приверженность этичному производству — это не просто риторика. Мы ставим благополучие работников и
                  окружающую среду на первое место на переднем крае принятия решений. Всегда.
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <img src={require("./images/hands.jpg")} alt="hands" />
              <img src={svgGirl} alt="svgGirl" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.image}>
              <img src={require("./images/girls.jpg")} alt="girls" />
            </div>
            <div className={styles.description}>
              <div className={styles.item}>
                <h2 className={styles.label}>
                  <img src={three} alt="three" />
                  Высочайшее качество
                </h2>
                <p className={styles.text}>
                  Мы используем только экологически чистые ткани высочайшего качества, включая сертифицированный GOTS органический
                  хлопок и OEKO-TEX. Белье STANDARD 100 для заботы о нежной коже вашего ребенка.
                </p>
              </div>
              <div className={styles.item}>
                <h2 className={styles.label}>
                  <img src={four} alt="four" />
                  этичное производство
                </h2>
                <p className={styles.text}>
                  Выбирая нас, вы поддерживаете этичный и устойчивый малый бизнес. Мы не разбрасываемся словами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Care;
