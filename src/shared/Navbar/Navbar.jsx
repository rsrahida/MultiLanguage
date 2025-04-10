import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.jpg";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import az from "../../assets/images/Flag_of_Azerbaijan.svg.png";
import en from "../../assets/images/Flag_of_the_United_Kingdom_(1-2).svg.webp";
import ru from "../../assets/images/Flag_of_Russia.svg.webp";

const { Option } = Select;

const Navbar = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  const handleLangChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarStart}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.navbarMiddle}>
        <Link
          to="/"
          className={`${styles.link} ${
            location.pathname === "/" ? styles.active : ""
          }`}
        >
          {i18n.t("homePage.navbar.home")}
        </Link>
        <Link
          to="/about"
          className={`${styles.link} ${
            location.pathname === "/about" ? styles.active : ""
          }`}
        >
          {i18n.t("homePage.navbar.about")}
        </Link>
        <Link
          to="/gallery"
          className={`${styles.link} ${
            location.pathname === "/gallery" ? styles.active : ""
          }`}
        >
          {i18n.t("homePage.navbar.gallery")}
        </Link>
      </div>
      <div className={styles.navbarEnd}>
        <Link to="/basket" className={styles.basket}>
          <i className="fa-solid fa-basket-shopping"></i>
        </Link>
        <Select
          defaultValue={i18n.language}
          style={{ width: 72, height: 32 }}
          onChange={handleLangChange}
          className={styles.languageSelect}
        >
          <Option value="az">
            <img
              src={az}
              style={{ width: "30px", height: "25px", paddingTop: "8px" }}
            />
          </Option>
          <Option value="en">
            <img
              src={en}
              style={{ width: "30px", height: "25px", paddingTop: "8px" }}
            />
          </Option>
          <Option value="ru">
            <img
              src={ru}
              style={{ width: "30px", height: "25px", paddingTop: "8px" }}
            />
          </Option>
        </Select>
      </div>
    </div>
  );
};

export default Navbar;
