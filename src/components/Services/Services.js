import Head from "next/head";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.MainContainer}>
      <Head>
        <title>Services | Anthony Casares - Développeur Freelance</title>
        <meta
          name="description"
          content="Découvrez les services proposés par Anthony Casares, développeur web et mobile freelance. Du développement de sites web à la création d'applications mobiles, je vous accompagne dans tous vos projets numériques."
        />
        <meta
          property="og:title"
          content="Services | Anthony Casares - Développeur Freelance"
        />
        <meta
          property="og:description"
          content="Découvrez les services proposés par Anthony Casares, développeur web et mobile freelance. Du développement de sites web à la création d'applications mobiles, je vous accompagne dans tous vos projets numériques."
        />
        <meta property="og:image" content="/images/ServicesImage.png" />
        <meta property="og:url" content="https://lindow.fr/#services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Services | Anthony Casares - Développeur Freelance"
        />
        <meta
          name="twitter:description"
          content="Découvrez les services proposés par Anthony Casares, développeur web et mobile freelance. Du développement de sites web à la création d'applications mobiles, je vous accompagne dans tous vos projets numériques."
        />
        <meta name="twitter:image" content="/images/ServicesImage.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Services de Développement Web et Mobile",
            provider: {
              "@type": "Person",
              name: "Anthony Casares",
            },
            description:
              "Découvrez les services proposés par Anthony Casares, développeur web et mobile freelance. Du développement de sites web à la création d'applications mobiles, je vous accompagne dans tous vos projets numériques.",
            url: "https://lindow.fr/services",
          })}
        </script>
      </Head>
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
          alt="Illustration du développement web avec un ordinateur et un site web en cours de développement"
          className={styles.servicesImage}
        />
        <img
          src="/images/Group2.png"
          alt="Maquette d'application mobile pour présenter le développement mobile"
          className={styles.servicesImage}
        />
        <img
          src="/images/Group3.png"
          alt="Illustration d'un site de support pour les activités sportives"
          className={styles.servicesImage}
        />
      </div>
    </div>
  );
}
