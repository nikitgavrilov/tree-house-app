import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import React from "react";

import styles from "./PerfectMatch.module.scss";

import arrow from "./images/arrow.svg";
import leaf from "./images/leaf.svg";

const outfits = [
  {
    id: 0,
    image: require("./images/bg/1.jpg"),
    description: "Уютный шик для детской площадки",
    top: require("./images/clothes/cloth01.png"),
    bottom: require("./images/clothes/cloth02.png"),
    price: 5800,
  },
  {
    id: 1,
    image: require("./images/bg/2.jpg"),
    description: "Легкий пляжный стиль",
    top: require("./images/clothes/cloth03.png"),
    bottom: require("./images/clothes/cloth04.png"),
    price: 4400,
  },
  {
    id: 2,
    image: require("./images/bg/3.jpg"),
    description: "Основы лесной школы",
    top: require("./images/clothes/cloth05.png"),
    bottom: require("./images/clothes/cloth06.png"),
    price: 5400,
  },
  {
    id: 3,
    image: require("./images/bg/4.jpg"),
    description: "Прогулка с друзьями",
    top: require("./images/clothes/cloth01.png"),
    bottom: require("./images/clothes/cloth02.png"),
    price: 3200,
  },
  {
    id: 4,
    image: require("./images/bg/5.jpg"),
    description: "Бездельничаем дома",
    top: require("./images/clothes/cloth03.png"),
    bottom: require("./images/clothes/cloth04.png"),
    price: 6600,
  },
];

const PerfectMatch: React.FC = () => {
  const [visibleIds, setVisibleIds] = React.useState<{ [key: number]: boolean }>({});

  const handleMouseEnter = (id: number) => {
    setVisibleIds((prevIds) => ({ ...prevIds, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setVisibleIds((prevIds) => ({ ...prevIds, [id]: false }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 622,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.perfectMatch}>
      <div className="container">
        <div className={styles.titles}>
          <h3 className="sub-title">твоя идеальная пара</h3>
          <h2 className="title">Купить образ</h2>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.body}>
          <div className="slider-container" style={{ position: "relative" }}>
            <div className={styles.leaf}>
              <img src={leaf} alt="leaf" />
            </div>
            <Slider {...settings}>
              {outfits.map((outfit) => (
                <div key={outfit.id} className={styles.item}>
                  <div
                    onMouseEnter={() => handleMouseEnter(outfit.id)}
                    onMouseLeave={() => handleMouseLeave(outfit.id)}
                    className={styles.image}
                  >
                    <img src={outfit.image} alt="outfit" />
                    <div className={visibleIds[outfit.id] ? `${styles.products} ${styles.visible}` : styles.products}>
                      <div className={styles.top}>
                        <img src={outfit.top} alt="top" />
                        <div className={styles.info}>
                          <p>T-shirt Hamra Trees Navy</p>
                          <p>{outfit.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}</p>
                          <button>Добавить в корзину</button>
                        </div>
                      </div>
                      <div className={styles.bottom}>
                        <img src={outfit.bottom} alt="bottom" />
                        <div className={styles.info}>
                          <p>T-shirt Hamra Trees Navy</p>
                          <p>{outfit.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}</p>
                          <button>Добавить в корзину</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className={styles.description}>{outfit.description}</p>
                  <div className={styles.view}>
                    <img src={arrow} alt="arrow" />
                    <p>Посмотреть продукт</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectMatch;
