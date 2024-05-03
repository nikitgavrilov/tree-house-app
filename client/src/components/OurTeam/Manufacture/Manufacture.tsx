import React from "react";

import styles from "./Manufacture.module.scss";

import arrow from "./../../../assets/images/arrow-green.svg";

const Manufacture: React.FC = () => {
  return (
    <section className={styles.manufacture}>
      <div className="container">
        <div className={styles.body}>
          <h3 className="sub-title">Inquiry Before Creation: Crafting Conscious Clothing</h3>
          <h3 className="sub-title">
            <img src={arrow} alt="arrow" />
            Посмотрите, где мы производим одежду
          </h3>
        </div>
        <div className={styles.video}>
          <iframe
            src="https://www.youtube.com/embed/WypyTb-Rw-k?si=CgzphL0138EKJPBh"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Manufacture;
