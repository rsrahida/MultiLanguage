import React from "react";
import styles from "./Footer.module.css";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HomeSlider />
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.contact}>
            <h3 className={styles.title}>{t("homePage.footer.contactUs")}</h3>
            <p className={styles.text}>{t("homePage.footer.addressNY")}</p>
            <p className={styles.text}>{t("homePage.footer.addressLondon")}</p>
            <p className={styles.text}>{t("homePage.footer.email")}</p>
            <p className={styles.text}>{t("homePage.footer.phone")}</p>
          </div>

          <div className={styles.usefulLinks}>
            <h3 className={styles.title}>{t("homePage.footer.usefulLinks")}</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  {t("homePage.footer.home")}
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {t("homePage.footer.about")}
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  to="/gallery"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {t("homePage.footer.gallery")}
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {t("homePage.footer.contact")}
                </Link>
              </li>
              <li className={styles.listItem}>
                {t("homePage.footer.privacyPolicy")}
              </li>
            </ul>
          </div>

          <div className={styles.followUs}>
            <h3 className={styles.title}> {t("homePage.footer.followUs")}</h3>
            <ul className={styles.socialLinks}>
              <li className={styles.socialLink}>
                {t("homePage.footer.facebook")}
              </li>
              <li className={styles.socialLink}>
                {t("homePage.footer.twitter")}
              </li>
              <li className={styles.socialLink}>
                {t("homePage.footer.instagram")}
              </li>
              <li className={styles.socialLink}>
                {t("homePage.footer.dribbble")}
              </li>
            </ul>
          </div>

          <div className={styles.subscribe}>
            <h3 className={styles.title}>{t("homePage.footer.subscribe")}</h3>
            <input
              type="email"
              placeholder={t("homePage.footer.placeholderEmail")}
              className={styles.subscribeInput}
            />
            <button className={styles.subscribeBtn}>
              {t("homePage.footer.subscribeBtn")}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
