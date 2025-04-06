import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  const location = useLocation();

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
          Home
        </Link>
        <Link
          to="/about"
          className={`${styles.link} ${
            location.pathname === "/about" ? styles.active : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/gallery"
          className={`${styles.link} ${
            location.pathname === "/gallery" ? styles.active : ""
          }`}
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className={`${styles.link} ${
            location.pathname === "/contact" ? styles.active : ""
          }`}
        >
          Contact Us
        </Link>
      </div>
      <div className={styles.navbarEnd}>
        <Link to="/basket" className={styles.basket}>
          <i className="fa-solid fa-basket-shopping"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
