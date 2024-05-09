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
import { useActions } from "../../../../hooks/useActions";
import { useAppSelector } from "../../../../hooks/redux";
import { IProduct } from "../../../../models/IProduct";

const PRODUCTS = [
  {
    id: 0,
    title: "Весенняя рубашка",
    price: 3400,
    image: img1,
    collection: "spring",
    category: "top",
    size: "9-10",
    material: "cotton",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 1,
    title: "Летняя Майка",
    price: 2400,
    image: img2,
    collection: "summer",
    category: "top",
    size: "7-8",
    material: "cotton",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 2,
    title: "Летнее поло",
    price: 2800,
    image: img3,
    collection: "summer",
    category: "top",
    size: "6-7",
    material: "cotton",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 3,
    title: "Обычная майка",
    price: 1200,
    image: img4,
    collection: "summer",
    category: "top",
    size: "5-6",
    material: "cotton",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 4,
    title: "Рубашка красная",
    price: 2600,
    image: img5,
    collection: "summer",
    category: "top",
    size: "4-6",
    material: "cotton",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 5,
    title: "Комбинезон синий",
    price: 5300,
    image: img6,
    collection: "summer",
    category: "top",
    size: "2-3",
    material: "linen",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 6,
    title: "Юбка летняя",
    price: 2200,
    image: img7,
    collection: "summer",
    category: "bottom",
    size: "3-4",
    material: "cotton",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 7,
    title: "Штаны весенние",
    price: 2990,
    image: img8,
    collection: "spring",
    category: "bottom",
    size: "5-6",
    material: "linen",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 8,
    title: "Спортивные штаны",
    price: 1490,
    image: img9,
    collection: "summer",
    category: "bottom",
    size: "4-5",
    material: "cotton",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 9,
    title: "Брюки для школы",
    price: 5400,
    image: img10,
    collection: "summer",
    category: "bottom",
    size: "9-10",
    material: "cotton",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 10,
    title: "Шорты летние",
    price: 2100,
    image: img11,
    collection: "summer",
    category: "bottom",
    size: "7-8",
    material: "cotton",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 11,
    title: "Шорты красивые",
    price: 1990,
    image: img12,
    collection: "summer",
    category: "bottom",
    size: "6-7",
    material: "cotton",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 12,
    title: "Шорты белые",
    price: 2490,
    image: img13,
    collection: "summer",
    category: "bottom",
    size: "7-8",
    material: "cotton",
    reviews: {
      total: 2,
      messages: [],
    },
  },
  {
    id: 13,
    title: "Шляпа зеленая",
    price: 1000,
    image: img14,
    collection: "summer",
    category: "hat",
    size: "7-8",
    material: "cotton",
    reviews: {
      total: 2,
      messages: [],
    },
  },
];

const ProductList: React.FC = () => {
  const { setProducts } = useActions();
  const { products, selectedCategories } = useAppSelector((state) => state.productsReducer);

  React.useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  const filterProducts = (products: IProduct[], selectedCategories: string[]): IProduct[] => {
    return products.filter((product) =>
      selectedCategories.some(
        (category) =>
          product.collection === category ||
          product.category === category ||
          product.size === category ||
          product.material === category
      )
    );
  };

  const filteredProducts = selectedCategories.length > 0 ? filterProducts(products, selectedCategories) : products;

  return (
    <div className={styles.body}>
      {filteredProducts.map((product) => {
        return (
          <div key={product.id} className={styles.column}>
            <div className={styles.item}>
              <div className={styles.image}>
                <img src={product.image} alt={product.title} />
              </div>
              <h3 className="sub-title">{product.title}</h3>
              <div className={styles.reviews}>
                <p>Количество отзывов:{product.reviews.total}</p>
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
