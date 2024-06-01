// src/pages/index.js
import { useState, useEffect } from "react";
import styles from "./styles/index.module.css";
import NavBar from "@/components/navbar/Navbar";

import Home from "@/components/Home/Home";
import Services from "@/components/Services/Services";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";

export default function Index() {
  const [activeSection, setActiveSection] = useState("");
  console.log(activeSection);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={styles.MainContainer}>
      <NavBar activeSection={activeSection} />
      <section id="accueil">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
