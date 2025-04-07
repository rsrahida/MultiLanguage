import React from "react";
import styles from "./HomeAbout.module.css";
import image from "../../assets/images/backgroundd.png";
import { useTranslation } from "react-i18next";

const HomeAbout = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.imageWrapper}>
      <img
        src={image}
        className={styles.image}
        alt="About section background"
      />
      <div className={styles.imageOverlay}></div>
      <div className={styles.textOverlay}>
        {t("homePage.homeAbout.detoxSmoothieRecipe")}
      </div>
      <span className={styles.avocado}>{t("homePage.homeAbout.avocado")}</span>
      <p className={styles.avocadoText}>
        {t("homePage.homeAbout.avocadoText")}
      </p>
      <span className={styles.apple}>{t("homePage.homeAbout.apple")}</span>
      <p className={styles.appleText}>{t("homePage.homeAbout.appleText")}</p>
      <span className={styles.lemon}>{t("homePage.homeAbout.lemon")}</span>
      <p className={styles.lemonText}>{t("homePage.homeAbout.lemonText")}</p>
      <span className={styles.freashWater}>
        {t("homePage.homeAbout.freshWater")}
      </span>
      <p className={styles.freashWaterText}>
        {t("homePage.homeAbout.freshWaterText")}
      </p>
    </div>
  );
};

export default HomeAbout;
