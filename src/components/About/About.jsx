import React from "react";
import styles from "./about.module.css";
import { FaLeaf, FaHandHoldingHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>Biz Kimik?</h1>
        <p className={styles.subtitle}>
          Təbii meyvə şirələri ilə həyatınıza təzəlik qatırıq!
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Missiyamız</h2>
        <p className={styles.sectionDescription}>
          Şirkətimizin missiyası, hər kəsə təbii, sağlam və dadlı meyvə şirələri
          təqdim edərək, müştərilərimizin sağlamlıq və enerji dolu həyat tərzini
          dəstəkləməkdir.
        </p>
        <FaLeaf className={styles.icon} />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Vizyonumuz</h2>
        <p className={styles.sectionDescription}>
          Vizyonumuz, dünya çapında təbii və sağlam içkiləri populyarlaşdırmaq
          və hər bir insana sadə, təbii məhsullar təqdim etməkdir.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Dəyərlərimiz</h2>
        <ul className={styles.valuesList}>
          <li>
            <FaHandHoldingHeart /> Sağlamlıq: Təbiətdən gələn hər şey ən
            yaxşısıdır.
          </li>
          <li>
            <FaLeaf /> Təbii: Məhsullarımızda yalnız təbii maddələr istifadə
            olunur.
          </li>
          <li>
            <FaHandHoldingHeart /> Müştəri Məmnuniyyəti: Müştərilərimizin
            məmnuniyyəti bizim ən böyük prioritetimizdir.
          </li>
        </ul>
      </div>

      <div className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Bizimlə Əlaqə</h2>
        <p className={styles.contactDescription}>
          Daha ətraflı məlumat və ya suallar üçün bizimlə əlaqə saxlaya
          bilərsiniz.
        </p>
      </div>
    </div>
  );
};

export default About;
