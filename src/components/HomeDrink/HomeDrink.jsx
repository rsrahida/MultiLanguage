import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./HomeDrink.module.css";
import juiceImage from "../../assets/images/juice.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomeDrink = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.homeDrink}>
      <img
        src={juiceImage}
        className={styles.image}
        data-aos="fade-right"
        alt="Smoothie"
      />
      <p className={styles.text}>
        <i>{t("homePage.homeDrink.titleDrink")} 🍸</i>
      </p>
      <span className={styles.drinkDescription}>
        <strong>{t("homePage.homeDrink.strongText")}</strong>
        <br />
        {t("homePage.homeDrink.aboutDrink")}
        <Link to="/basket">
          <button className={styles.button}>
            <i>{t("homePage.home.button")}</i>
          </button>
        </Link>
      </span>
    </div>
  );
};

export default HomeDrink;
