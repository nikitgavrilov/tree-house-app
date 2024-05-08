import React from "react";

import styles from "./ProductList.module.scss";

import img1 from "./images/cloth/summer/1.png";
import img2 from "./images/cloth/summer/2.png";
import img3 from "./images/cloth/summer/3.png";
import img4 from "./images/cloth/summer/4.png";
import img5 from "./images/cloth/summer/5.png";
import img6 from "./images/cloth/summer/6.png";
import img7 from "./images/cloth/summer/7.png";
import img8 from "./images/cloth/summer/8.png";
import img9 from "./images/cloth/summer/9.png";
import img10 from "./images/cloth/summer/10.png";
import img11 from "./images/cloth/summer/11.png";
import img12 from "./images/cloth/summer/12.png";
import img13 from "./images/cloth/summer/13.png";
import img14 from "./images/cloth/summer/14.png";

const PRODUCTS = [
  { id: 0, title: "Летняя одежда", price: 5400, image: img1 },
  { id: 1, title: "Летняя одежда", price: 5400, image: img2 },
  { id: 2, title: "Летняя одежда", price: 5400, image: img3 },
  { id: 3, title: "Летняя одежда", price: 5400, image: img4 },
  { id: 4, title: "Летняя одежда", price: 5400, image: img5 },
  { id: 5, title: "Летняя одежда", price: 5400, image: img6 },
  { id: 6, title: "Летняя одежда", price: 5400, image: img7 },
  { id: 7, title: "Летняя одежда", price: 5400, image: img8 },
  { id: 8, title: "Летняя одежда", price: 5400, image: img9 },
  { id: 9, title: "Летняя одежда", price: 5400, image: img10 },
  { id: 10, title: "Летняя одежда", price: 5400, image: img11 },
  { id: 11, title: "Летняя одежда", price: 5400, image: img12 },
  { id: 12, title: "Летняя одежда", price: 5400, image: img13 },
  { id: 13, title: "Летняя одежда", price: 5400, image: img14 },
];

const ProductList: React.FC = () => {
  return (
    <div className={styles.body}>
      {PRODUCTS.map((product) => {
        return (
          <div key={product.id} className={styles.column}>
            <div className={styles.item}>
              <div className={styles.image}>
                <img src={product.image} alt={product.title} />
              </div>
              <h3 className="sub-title">{product.title}</h3>
              <div className={styles.reviews}>
                <p>2 отзыва</p>
              </div>
              <h2 className={styles.price}>{product.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;