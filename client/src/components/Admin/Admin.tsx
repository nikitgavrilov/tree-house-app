import React from "react";

import styles from "./Admin.module.scss";

import { useDeleteProductMutation, useGetProductsQuery } from "../../store/api/productsApi";
import { useCheckUserStatus } from "../../hooks/useCheckUserStatus";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

const Admin: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const userStatus = useCheckUserStatus();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!isLoading) {
      if (userStatus.login && userStatus.login !== "admin") {
        navigate("/");
      }
    }
  }, [isLoading, userStatus]);

  const { data } = useGetProductsQuery(null);
  const [deleteProduct] = useDeleteProductMutation();

  const [isModalActive, setIsModalActive] = React.useState(false);

  return (
    <section className={styles.admin}>
      <Modal mode="add" isModalActive={isModalActive} setIsModalActive={setIsModalActive} />
      <div className="container">
        <div className={styles.add}>
          <button onClick={() => setIsModalActive(true)}>Добавить продукт</button>
        </div>
      </div>
      <div className={styles.table}>
        <ul className={styles.list}>
          <h2 className={styles.title}>Номер</h2>
          {data?.map((item, index) => (
            <li key={item.id} className={styles.item}>
              {index + 1}
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          <h2 className={styles.title}>Заголовок</h2>
          {data?.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.title}
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          <h2 className={styles.title}>Описание</h2>
          {data?.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.description}
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          <h2 className={styles.title}>Цена</h2>
          {data?.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          <h2 className={styles.title}>Изображение</h2>
          {data?.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.image}
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          <h2 className={styles.title}>Коллекция</h2>
          {data?.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.collection === "spring" ? "Весна" : "Лето"}
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          <h2 className={styles.title}>Категория</h2>
          {data?.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.category === "top" ? "Верхняя одежда" : item.category === "bottom" ? "Нижняя одежда" : "Головные уборы"}
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          <h2 className={styles.title}>Размеры</h2>
          {data?.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.size}
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          <h2 className={styles.title}>Материал</h2>
          {data?.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.material === "linen" ? "Шерсть" : "Хлопок"}
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          <h2 className={styles.title}>&nbsp;</h2>
          {data?.map((item) => (
            <li key={item.id} className={`${styles.item} ${styles.delete}`}>
              <button onClick={() => deleteProduct(item.id)} className={styles.delete}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          <h2 className={styles.title}>&nbsp;</h2>
          {data?.map((item) => (
            <li key={item.id} className={`${styles.item} ${styles.edit}`}>
              <button className={styles.edit}>Редактировать</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Admin;
