import { useState } from "react";
import styles from "./NavBarMobile.module.css";

export default function NavBarMobile({ activeSection, setActiveSection }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setDrawerOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${drawerOpen ? styles.navbaropen : ""}`}>
      <div className={styles.hamburgerMenu}>
        <div className={styles.logo}>
          <img src="/icons/Logo.png" alt="Logo" className={styles.logoImage} />
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
      <div className={`${styles.drawer} ${drawerOpen ? styles.open : ""}`}>
        <a
          href="#accueil"
          onClick={() => handleNavClick("accueil")}
          className={styles.drawerItem}
        >
          Accueil
        </a>
        <a
          href="#services"
          onClick={() => handleNavClick("services")}
          className={styles.drawerItem}
        >
          Services
        </a>
        <a
          href="#portfolio"
          onClick={() => handleNavClick("portfolio")}
          className={styles.drawerItem}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={() => handleNavClick("contact")}
          className={styles.drawerItem}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
