import { useState, useEffect } from "react";
import styles from "./styles/index.module.css";
import NavBar from "@/components/navbar/NavBar";
import NavBarMobile from "@/components/navbar/NavBarMobile";

import Home from "@/components/Home/Home";
import Services from "@/components/Services/Services";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";

export default function Index() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.1,
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

  const handleClick = () => {
    const sectionElement = document.getElementById("contact");
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.MainContainer}>
      {isMobile ? (
        <NavBarMobile
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      ) : (
        <NavBar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      )}
      <section id="accueil">
        <Home handleClick={handleClick} />
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
