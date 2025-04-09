import React from "react";
import styles from "./Popup.module.css";
import { useTranslation } from "react-i18next";

const Popup = ({ product, onClose }) => {
  const { i18n, t } = useTranslation();

  if (!product) return null;

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>
          ×
        </button>
        <img
          src={product.image}
          alt={product.name[i18n.language] || "Product"}
          className={styles.popupImage}
        />
        <h3 className={styles.popupProductName}>
          {product.name[i18n.language] || t("homePage.homeData.defaultName")}
        </h3>
        <p className={styles.popupProductDescription}>
          {product.description[i18n.language] ||
            t("homePage.homeData.defaultDescription")}
        </p>
        <p className={styles.popupProductPrice}>
          {t("homePage.homeData.price")}: {product.price} $
        </p>
      </div>
    </div>
  );
};

export default Popup;
