import React, { useEffect, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import styles from "./Basket.module.css";
import { useTranslation } from "react-i18next";

const Basket = () => {
  const { i18n, t } = useTranslation();
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const basketData = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(basketData);
  }, []);

  const handleRemoveFromBasket = (productId) => {
    const updatedBasket = basket.filter((product) => product.id !== productId);
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedBasket = basket.map((product) => {
      if (product.id === productId) {
        product.quantity += 1;
      }
      return product;
    });
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedBasket = basket.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        product.quantity -= 1;
      }
      return product;
    });
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const calculateTotalPrice = () => {
    return parseFloat(
      basket.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0)
    ).toFixed(2);
  };

  return (
    <div className={styles.basketPage}>
      <h2 className={styles.pageTitle}>{t("basket.title")}</h2>
      {basket.length === 0 ? (
        <div className={styles.emptyBasket}>
          <FaShoppingBasket className={styles.emptyIcon} />
          <p className={styles.emptyMessage}>{t("basket.emptyMessage")}</p>
        </div>
      ) : (
        <div className={styles.basketItems}>
          {basket.map((product) => (
            <div key={product.id} className={styles.basketItem}>
              <img
                src={product.image}
                alt={
                  product.name[i18n.language] ||
                  t("homePage.homeData.defaultName")
                }
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <h3 className={styles.productName}>
                  {product.name[i18n.language] ||
                    t("homePage.homeData.defaultName")}
                </h3>
                <p className={styles.productPrice}>{product.price} $</p>
              </div>
              <div className={styles.productQuantity}>
                <button
                  onClick={() => handleDecreaseQuantity(product.id)}
                  className={styles.quantityButton}
                >
                  -
                </button>
                <span className={styles.quantity}>{product.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(product.id)}
                  className={styles.quantityButton}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveFromBasket(product.id)}
                className={styles.removeButton}
              >
                {t("basket.remove")}
              </button>
            </div>
          ))}
        </div>
      )}
      {basket.length > 0 && (
        <div className={styles.totalPrice}>
          <p>{t("basket.totalPrice")}:</p>
          <p className={styles.totalAmount}>{calculateTotalPrice()} $</p>
        </div>
      )}
    </div>
  );
};

export default Basket;
