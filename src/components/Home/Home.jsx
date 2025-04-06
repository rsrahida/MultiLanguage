import React from "react";
import styles from "./Home.module.css";
import image from "../../assets/images/content-image-1.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <img src={image} className={styles.image} alt="Smoothie" />
      <h1 className={styles.title}>
        <i>{t("homePage.home.title")}</i>
      </h1>
      <p className={styles.text}>
        <i>{t("homePage.home.text")}</i>
      </p>
      <Link to="/basket">
        <button className={styles.button}>
          <i>{t("homePage.home.button")}</i>
        </button>
      </Link>
    </div>
  );
};

export default Home;
