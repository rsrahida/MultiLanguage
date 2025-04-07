import React, { useEffect, useState } from "react";
import styles from "./HomeData.module.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeData = () => {
  const { i18n, t } = useTranslation();
  const [products, setProducts] = useState([]);

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
            >
              <div className={styles.product}>
                <img
                  src={product.image}
                  alt={product.name[i18n.language]}
                  className={styles.productImage}
                />
                <h3 className={styles.productName}>
                  {product.name[i18n.language]}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default HomeData;
