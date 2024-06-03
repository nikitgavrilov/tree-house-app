import React from "react";

import styles from "./WeCommitted.module.scss";

import bg from "./images/bg.svg";
import kids from "./images/kids.svg";

const WeCommitted: React.FC = () => {
  return (
    <section className={styles.weCommitted}>
      <div className="container" style={{ position: "relative" }}>
        <img src={kids} alt="kids" className={styles.kids} />
        <img src="/images/general/leaf.svg" alt="leaf" className={styles.leaf} />
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.image}>
              <img src={bg} alt="bg" />
              <p className={styles.description}>
                Мы стремимся создать непредвзятое пространство, где вы сможете исследовать мир медленной моды. Наша цель —
                поддерживать вас на каждом этапе пути, отвечая на любые вопросы и вместе работая над коллективными изменениями.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeCommitted;
