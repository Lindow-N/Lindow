import React, { useState } from "react";
import styles from "./Contact.module.css";
import SharedButton from "../Button/sharedButton";
import { sendEmail } from "../../utils/emailService";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Message: "",
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
      Message: "",
    });
  };

  const handleClick = () => {
    sendEmail(formData, clearForm);
  };

  return (
    <div className={styles.MainContainer}>
      <h1 className={styles.titleContact}>
        Voyons comment je peux vous aider !
      </h1>
      <h2 className={styles.subtitleContact}>CONTACTEZ-MOI</h2>

      <div className={styles.contactContainer}>
        <div className={styles.contactContainerLeft}>
          <div className={styles.phoneContainer}>
            <img src="/icons/phone.png" alt="phone" className={styles.Icon} />
            <p className={styles.Text}>06 80 36 40 23</p>
          </div>
          <div className={styles.emailContainer}>
            <img src="/icons/email.png" alt="email" className={styles.Icon} />
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
            <label htmlFor="Message" className={styles.formLabel}>
              Message
            </label>
            <textarea
              type="text"
              id="Message"
              className={styles.formtextarea}
              value={formData.Message}
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
