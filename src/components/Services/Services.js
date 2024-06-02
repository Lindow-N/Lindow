import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.MainContainer}>
      <h2 className={styles.subtitle}>MON EXPERTISE</h2>
      <h1 className={styles.title}>
        Transformez vos Idées en Réalité Digitale
      </h1>
      <h3 className={styles.description}>
        En tant que développeur passionné et expérimenté, je mets à votre
        disposition mon savoir-faire pour créer des solutions web et mobiles
        innovantes. Ensemble, nous donnerons vie à vos projets avec
        professionnalisme et créativité.
      </h3>

      <div className={styles.servicesContainer}>
        <img
          src="/images/Group1.png"
          alt="Group1"
          className={styles.servicesImage}
        />
        <img
          src="/images/Group2.png"
          alt="Group2"
          className={styles.servicesImage}
        />
        <img
          src="/images/Group3.png"
          alt="Group3"
          className={styles.servicesImage}
        />
      </div>
    </div>
  );
}
