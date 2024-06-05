// src/pages/index.js
import { useState, useEffect } from "react";
import styles from "./styles/index.module.css";
import NavBar from "@/components/navbar/NavBar";

import Home from "@/components/Home/Home";
import Services from "@/components/Services/Services";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";

export default function Index() {
  const [activeSection, setActiveSection] = useState("");
  console.log("Active Section:", activeSection);

  const handleClick = () => {
    const sectionElement = document.getElementById("contact");
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.1, // Change the threshold temporarily for testing
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(
          "Observed section:",
          entry.target.id,
          "isIntersecting:",
          entry.isIntersecting
        );
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      console.log("Observing section:", section.id); // Log sections being observed
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
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
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
