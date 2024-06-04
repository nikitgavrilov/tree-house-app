import React from "react";

import styles from "./Modal.module.scss";
import ModalDropdown from "../UI/ModalDropdown/ModalDropdown";
import { IProduct } from "../../models/IProduct";
import { useAddProductMutation } from "../../store/api/productsApi";

interface ModalAdd {
  mode: "add";
  isModalActive: boolean;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ModalEdit {
  mode: "edit";
  isModalActive: boolean;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

type ModalProps = ModalAdd | ModalEdit;

const DEFAULT_PRODUCT = {
  title: "",
  description: "",
  price: 0,
  image: "",
  collection: "",
  category: "",
  size: "",
  material: "",
  reviews: 0,
};

const Modal: React.FC<ModalProps> = (props) => {
  const isEdit = props.mode === "edit";

  const [isCollectionSelected, setIsCollectionSelected] = React.useState({
    spring: false,
    summer: false,
  });
  const [isCategorySelected, setIsCategorySelected] = React.useState({
    top: false,
    bottom: false,
    hats: false,
  });
  const [isSizeSelected, setIsSizeSelected] = React.useState({
    s23: false,
    s34: false,
    s45: false,
    s56: false,
    s67: false,
    s78: false,
    s89: false,
    s910: false,
  });
  const [isMaterialSelected, setIsMaterialSelected] = React.useState({
    cotton: false,
    linen: false,
  });

  const [product, setProduct] = React.useState<Omit<IProduct, "id">>(DEFAULT_PRODUCT);
  const [addProduct] = useAddProductMutation();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEdit) {
      console.log("edit");
    } else {
      addProduct(product);
      setProduct(DEFAULT_PRODUCT);
      props.setIsModalActive(false);
    }
  };

  return (
    <div
      className={props.isModalActive ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
      onClick={() => props.setIsModalActive(false)}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <h2 className={styles.title}>{isEdit ? "Редактировать товар" : "Добавить товар"}</h2>
          <div className={styles.field}>
            <p>Заголовок</p>
            <input
              value={product.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProduct({ ...product, title: e.target.value })}
              type="text"
              placeholder="title"
            />
          </div>
          <div className={styles.field}>
            <p>Описание</p>
            <textarea
              value={product.description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProduct({ ...product, description: e.target.value })}
              placeholder="description"
            ></textarea>
          </div>
          <div className={styles.field}>
            <p>Цена</p>
            <input
              value={product.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProduct({ ...product, price: Number(e.target.value) })}
              type="number"
              placeholder="price"
            />
          </div>
          <div className={styles.field}>
            <p>Изображение</p>
            <input
              value={product.image}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProduct({ ...product, image: e.target.value })}
              type="text"
              placeholder="image"
            />
          </div>
          <div className={styles.field}>
            <ModalDropdown title="Коллекция">
              <button
                className={isCollectionSelected.spring ? `${styles.active}` : ""}
                onClick={() => {
                  setIsCollectionSelected({ ...isCollectionSelected, spring: true, summer: false });
                  setProduct({ ...product, collection: "spring" });
                }}
                type="button"
              >
                Весна
              </button>
              <button
                className={isCollectionSelected.summer ? `${styles.active}` : ""}
                onClick={() => {
                  setIsCollectionSelected({ ...isCollectionSelected, spring: false, summer: true });
                  setProduct({ ...product, collection: "summer" });
                }}
                type="button"
              >
                Лето
              </button>
            </ModalDropdown>
          </div>
          <div className={styles.field}>
            <ModalDropdown title="Категория">
              <button
                className={isCategorySelected.top ? `${styles.active}` : ""}
                onClick={() => {
                  setIsCategorySelected({ ...isCategorySelected, top: true, bottom: false, hats: false });
                  setProduct({ ...product, category: "top" });
                }}
                type="button"
              >
                Верхняя одежда
              </button>
              <button
                className={isCategorySelected.bottom ? `${styles.active}` : ""}
                onClick={() => {
                  setIsCategorySelected({ ...isCategorySelected, top: false, bottom: true, hats: false });
                  setProduct({ ...product, category: "bottom" });
                }}
                type="button"
              >
                Нижняя одежда
              </button>
              <button
                className={isCategorySelected.hats ? `${styles.active}` : ""}
                onClick={() => {
                  setIsCategorySelected({ ...isCategorySelected, top: false, bottom: false, hats: true });
                  setProduct({ ...product, category: "hat" });
                }}
                type="button"
              >
                Головной убор
              </button>
            </ModalDropdown>
          </div>
          <div className={styles.field}>
            <ModalDropdown title="Размеры">
              <button
                className={isSizeSelected.s23 ? `${styles.active}` : ""}
                onClick={() => {
                  setIsSizeSelected({
                    ...isSizeSelected,
                    s23: true,
                    s34: false,
                    s45: false,
                    s56: false,
                    s67: false,
                    s78: false,
                    s89: false,
                    s910: false,
                  });
                  setProduct({ ...product, size: "2-3" });
                }}
                type="button"
              >
                2-3 года
              </button>
              <button
                className={isSizeSelected.s34 ? `${styles.active}` : ""}
                onClick={() => {
                  setIsSizeSelected({
                    ...isSizeSelected,
                    s23: false,
                    s34: true,
                    s45: false,
                    s56: false,
                    s67: false,
                    s78: false,
                    s89: false,
                    s910: false,
                  });
                  setProduct({ ...product, size: "3-4" });
                }}
                type="button"
              >
                3-4 года
              </button>
              <button
                className={isSizeSelected.s45 ? `${styles.active}` : ""}
                onClick={() => {
                  setIsSizeSelected({
                    ...isSizeSelected,
                    s23: false,
                    s34: false,
                    s45: true,
                    s56: false,
                    s67: false,
                    s78: false,
                    s89: false,
                    s910: false,
                  });
                  setProduct({ ...product, size: "4-5" });
                }}
                type="button"
              >
                4-5 лет
              </button>
              <button
                className={isSizeSelected.s56 ? `${styles.active}` : ""}
                onClick={() => {
                  setIsSizeSelected({
                    ...isSizeSelected,
                    s23: false,
                    s34: false,
                    s45: false,
                    s56: true,
                    s67: false,
                    s78: false,
                    s89: false,
                    s910: false,
                  });
                  setProduct({ ...product, size: "5-6" });
                }}
                type="button"
              >
                5-6 лет
              </button>
              <button
                className={isSizeSelected.s67 ? `${styles.active}` : ""}
                onClick={() => {
                  setIsSizeSelected({
                    ...isSizeSelected,
                    s23: false,
                    s34: false,
                    s45: false,
                    s56: false,
                    s67: true,
                    s78: false,
                    s89: false,
                    s910: false,
                  });
                  setProduct({ ...product, size: "6-7" });
                }}
                type="button"
              >
                6-7 лет
              </button>
              <button
                className={isSizeSelected.s78 ? `${styles.active}` : ""}
                onClick={() => {
                  setIsSizeSelected({
                    ...isSizeSelected,
                    s23: false,
                    s34: false,
                    s45: false,
                    s56: false,
                    s67: false,
                    s78: true,
                    s89: false,
                    s910: false,
                  });
                  setProduct({ ...product, size: "7-8" });
                }}
                type="button"
              >
                7-8 лет
              </button>
              <button
                className={isSizeSelected.s89 ? `${styles.active}` : ""}
                onClick={() => {
                  setIsSizeSelected({
                    ...isSizeSelected,
                    s23: false,
                    s34: false,
                    s45: false,
                    s56: false,
                    s67: false,
                    s78: false,
                    s89: true,
                    s910: false,
                  });
                  setProduct({ ...product, size: "8-9" });
                }}
                type="button"
              >
                8-9 лет
              </button>
              <button
                className={isSizeSelected.s910 ? `${styles.active}` : ""}
                onClick={() => {
                  setIsSizeSelected({
                    ...isSizeSelected,
                    s23: false,
                    s34: false,
                    s45: false,
                    s56: false,
                    s67: false,
                    s78: false,
                    s89: false,
                    s910: true,
                  });
                  setProduct({ ...product, size: "9-10" });
                }}
                type="button"
              >
                9-10 лет
              </button>
            </ModalDropdown>
          </div>
          <div className={styles.field}>
            <ModalDropdown title="Материал">
              <button
                className={isMaterialSelected.cotton ? `${styles.active}` : ""}
                onClick={() => {
                  setIsMaterialSelected({ ...isMaterialSelected, cotton: true, linen: false });
                  setProduct({ ...product, material: "cotton" });
                }}
                type="button"
              >
                Хлопок
              </button>
              <button
                className={isMaterialSelected.linen ? `${styles.active}` : ""}
                onClick={() => {
                  setIsMaterialSelected({ ...isMaterialSelected, cotton: false, linen: true });
                  setProduct({ ...product, material: "linen" });
                }}
                type="button"
              >
                Шерсть
              </button>
            </ModalDropdown>
          </div>
          <div className={styles.submit}>
            <button>Подтвердить</button>
          </div>
        </form>
        <div className={styles.close} onClick={() => props.setIsModalActive(false)}>
          <svg
            fill="#50735f"
            height="38px"
            width="38px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 484.271 484.271"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <g>
                    <path d="M39.938,0v49.923H0v434.348h434.348v-69.892h49.923V0H39.938z M419.348,469.271H15V64.923h404.348V469.271z M469.271,399.379h-34.923V49.923H54.938V15h414.333V399.379z"></path>{" "}
                    <path d="M90.234,355.359c0,4.692,1.817,9.093,5.117,12.393l21.167,21.166c3.3,3.301,7.7,5.118,12.393,5.118 s9.093-1.817,12.393-5.117l75.87-75.871l75.87,75.871c3.301,3.3,7.701,5.117,12.393,5.117s9.093-1.817,12.392-5.117 l21.169-21.167c6.833-6.833,6.833-17.952,0-24.785l-75.871-75.87l75.871-75.871c6.832-6.834,6.832-17.951,0-24.784 l-21.168-21.168c-6.832-6.83-17.95-6.833-24.784,0l-75.871,75.871l-75.87-75.871c-6.833-6.831-17.95-6.834-24.785,0.001 l-21.166,21.167c-3.301,3.3-5.118,7.7-5.118,12.393c0,4.691,1.817,9.092,5.117,12.393l75.871,75.87l-75.87,75.87 C92.052,346.267,90.234,350.667,90.234,355.359z M105.959,353.574l86.477-86.478l-86.477-86.478 c-0.631-0.63-0.725-1.389-0.725-1.785s0.094-1.155,0.725-1.786l21.167-21.167c0.967-0.969,2.604-0.969,3.57,0l86.478,86.477 l86.477-86.477c0.969-0.97,2.604-0.968,3.571,0l21.168,21.168c0.968,0.968,0.968,2.604,0,3.57l-86.477,86.478l86.477,86.478 c0.969,0.968,0.969,2.603,0.001,3.57l-21.169,21.168c-0.63,0.63-1.389,0.724-1.785,0.724s-1.155-0.094-1.785-0.725 l-86.478-86.477l-86.478,86.478c-0.63,0.63-1.389,0.724-1.785,0.724s-1.155-0.094-1.785-0.725l-21.168-21.167 c-0.63-0.63-0.724-1.389-0.724-1.785S105.328,354.204,105.959,353.574z"></path>{" "}
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;
