import React from "react";

import styles from "./Vision.module.scss";

const Vision: React.FC = () => {
  return (
    <section className={styles.vision}>
      <div className="container" style={{ position: "relative" }}>
        <img src="/images/general/leaf.svg" alt="leaf" className={styles.bigLeaf} />
        <img src="/images/general/leaf.svg" alt="leaf" className={styles.leaf} />
        <div className={styles.body}>
          <div className={styles.left}>
            <h3 className="sub-title">устойчивость и уважение</h3>
            <h2 className="title">Наш взгляд</h2>
            <h3 className="sub-title">Мы обещаем вам прозрачность и прогресс, а не совершенство.</h3>
          </div>
          <div className={styles.center}>
            <p>
              Treehouse представляет собой мир, в котором осознанная жизнь и ответственная практика являются нормой,
              поддерживаемой сообществом, которое отдает приоритет продуманному дизайну.
            </p>
            <p>
              Посредством простых гендерно-нейтральных капсульных коллекций только предметов первой необходимости и прозрачной
              цепочки поставок мы создаем долговечные изделия, которые выдержат испытание временем и доставят удовольствие
              братьям, сестрам и друзьям.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
