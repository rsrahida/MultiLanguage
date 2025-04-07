import React, { useEffect } from "react";
import styles from "./HomeBeverage.module.css";
import image from "../../assets/images/lemonJuice.jpg";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeBeverage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.HomeBeverage}>
      <div className={styles.HomeBeverageContainer}>
        <img
          src={image}
          className={styles.image}
          alt="Lemon Juice"
          data-aos="fade-left"
        />

        <div className={styles.textWrapper}>
          <span className={styles.title}>
            {t("homePage.homeBeverage.title")}
          </span>
          <p className={styles.description}>
            {t("homePage.homeBeverage.paragraphOne")}
          </p>
          <span className={styles.leafe}>
            {t("homePage.homeBeverage.leafDecor")}
          </span>
          <p className={styles.description}>
            {t("homePage.homeBeverage.paragraphTwo")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBeverage;
