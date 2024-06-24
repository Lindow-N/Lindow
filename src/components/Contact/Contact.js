import React, { useState } from "react";
import Head from "next/head";
import styles from "./Contact.module.css";
import SharedButton from "../Button/sharedButton";
import { sendEmail } from "../../utils/emailService";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleClick = () => {
    sendEmail(formData, clearForm);
  };

  return (
    <div className={styles.MainContainer}>
      <Head>
        <title>Contact | Anthony Casares - Développeur Freelance</title>
        <meta
          name="description"
          content="Contactez Anthony Casares, développeur web et mobile freelance, pour discuter de vos projets numériques. Ensemble, nous donnerons vie à vos idées."
        />
        <meta
          property="og:title"
          content="Contact | Anthony Casares - Développeur Freelance"
        />
        <meta
          property="og:description"
          content="Contactez Anthony Casares, développeur web et mobile freelance, pour discuter de vos projets numériques. Ensemble, nous donnerons vie à vos idées."
        />
        <meta property="og:image" content="/images/ContactImage.png" />
        <meta property="og:url" content="https://lindow.fr/#contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact | Anthony Casares - Développeur Freelance"
        />
        <meta
          name="twitter:description"
          content="Contactez Anthony Casares, développeur web et mobile freelance, pour discuter de vos projets numériques. Ensemble, nous donnerons vie à vos idées."
        />
        <meta name="twitter:image" content="/images/ContactImage.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Page de Contact d'Anthony Casares",
            url: "https://lindow.fr/#contact",
            description:
              "Contactez Anthony Casares, développeur web et mobile freelance, pour discuter de vos projets numériques. Ensemble, nous donnerons vie à vos idées.",
            creator: {
              "@type": "Person",
              name: "Anthony Casares",
              url: "https://lindow.fr/",
              email: "anthony.casares@lindow.fr",
              telephone: "06 80 36 40 23",
            },
          })}
        </script>
      </Head>
      <h1 className={styles.titleContact}>
        Voyons comment je peux vous aider !
      </h1>
      <h2 className={styles.subtitleContact}>CONTACTEZ-MOI</h2>
      <div className={styles.contactContainer}>
        <div className={styles.contactContainerLeft}>
          <div className={styles.phoneContainer}>
            <img
              src="/icons/phone.png"
              alt="Téléphone"
              className={styles.Icon}
            />
            <p className={styles.Text}>06 80 36 40 23</p>
          </div>
          <div className={styles.emailContainer}>
            <img src="/icons/email.png" alt="Email" className={styles.Icon} />
            <p className={styles.Text}>anthony.casares@lindow.fr</p>
          </div>
        </div>
        <div className={styles.contactContainerRight}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Nom
            </label>
            <input
              type="text"
              id="name"
              className={styles.formInput}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.formInput}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Message
            </label>
            <textarea
              id="message"
              className={styles.formtextarea}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className={styles.btnContainer}>
            <SharedButton onClick={handleClick}>Envoyer</SharedButton>
          </div>
        </div>
      </div>
    </div>
  );
}
