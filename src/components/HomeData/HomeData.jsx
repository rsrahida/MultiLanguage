import React, { useEffect, useState } from "react";
import styles from "./HomeData.module.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../../components/Popup/Popup";

const HomeData = () => {
  const { i18n, t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleShowPopup = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAddToBasket = (product) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    const existingProductIndex = basket.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      basket[existingProductIndex].quantity += 1;
    } else {
      basket.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("basket", JSON.stringify(basket));
  };

  return (
    <div className={styles.homeData}>
      <p className={styles.title}>{t("homePage.homeData.titleData")}</p>
      <div className={styles.productContainer}>
        {products.length > 0 ? (
          products.map((product) => (
            <div
              className={styles.products}
              key={product.id}
              data-aos="fade-up"
              onClick={() => handleShowPopup(product)}
            >
              <div className={styles.product}>
                <img
                  src={product.image}
                  alt={product.name[i18n.language] || "Default Image"}
                  className={styles.productImage}
                />
                <h3 className={styles.productName}>
                  {product.name[i18n.language] || "Default Name"}
                </h3>
                <button
                  className={styles.addToBasketButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToBasket(product);
                  }}
                >
                 {t("homePage.homeData.addToBasket")}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      {showPopup && selectedProduct && (
        <Popup product={selectedProduct} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default HomeData;
