import React from "react";
import styles from "./about.module.css";
import { FaLeaf, FaHandHoldingHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t("aboutPage.title")}</h1>
        <p className={styles.subtitle}>{t("aboutPage.subtitle")}</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("aboutPage.mission.title")}</h2>
        <p className={styles.sectionDescription}>
          {t("aboutPage.mission.description")}
        </p>
        <FaLeaf className={styles.icon} />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("aboutPage.vision.title")}</h2>
        <p className={styles.sectionDescription}>
          {t("aboutPage.vision.description")}
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("aboutPage.values.title")}</h2>
        <ul className={styles.valuesList}>
          <li>
            <FaHandHoldingHeart /> {t("aboutPage.values.health")}
          </li>
          <li>
            <FaLeaf /> {t("aboutPage.values.natural")}
          </li>
          <li>
            <FaHandHoldingHeart /> {t("aboutPage.values.customerSatisfaction")}
          </li>
        </ul>
      </div>

      <div className={styles.contactSection}>
        <h2 className={styles.contactTitle}>{t("aboutPage.contact.title")}</h2>
        <p className={styles.contactDescription}>
          {t("aboutPage.contact.description")}
        </p>
      </div>
    </div>
  );
};

export default About;
