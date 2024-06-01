// src/components/NavBar/NavBar.js
import styles from "./NavBar.module.css";

export default function NavBar({ activeSection }) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li
          className={` ${
            activeSection === "accueil" ? styles.navItemActive : styles.navItem
          }`}
        >
          <a
            href="#accueil"
            className={` ${
              activeSection === "accueil"
                ? styles.navLinkActive
                : styles.navLink
            }`}
          >
            Accueil
          </a>
        </li>
        <li
          className={`${
            activeSection === "services" ? styles.navItemActive : styles.navItem
          }`}
        >
          <a
            href="#services"
            className={` ${
              activeSection === "services"
                ? styles.navLinkActive
                : styles.navLink
            }`}
          >
            Services
          </a>
        </li>
        <div className={styles.logo}>
          <img src="/images/Logo.png" alt="Logo" className={styles.logoImage} />
        </div>
        <li
          className={`${
            activeSection === "portfolio"
              ? styles.navItemActive
              : styles.navItem
          }`}
        >
          <a
            href="#portfolio"
            className={` ${
              activeSection === "portfolio"
                ? styles.navLinkActive
                : styles.navLink
            }`}
          >
            Portfolio
          </a>
        </li>
        <li
          className={`${
            activeSection === "contact" ? styles.navItemActive : styles.navItem
          }`}
        >
          <a
            href="#contact"
            className={` ${
              activeSection === "contact"
                ? styles.navLinkActive
                : styles.navLink
            }`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
