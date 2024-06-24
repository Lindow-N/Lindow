import Head from "next/head";
import styles from "./Home.module.css";
import SharedButton from "../Button/sharedButton";

export default function Home({ handleClick }) {
  return (
    <div className={styles.MainContainer}>
      <Head>
        <title>Accueil | Anthony Casares - Développeur Freelance</title>
        <meta
          name="description"
          content="Bienvenue sur la page d'accueil d'Anthony Casares, développeur web et mobile freelance. Avec plusieurs années d'expérience, je transforme vos idées en projets performants. Contactez-moi pour donner vie à vos projets numériques."
        />
        <meta
          property="og:title"
          content="Accueil | Anthony Casares - Développeur Freelance"
        />
        <meta
          property="og:description"
          content="Bienvenue sur la page d'accueil d'Anthony Casares, développeur web et mobile freelance. Avec plusieurs années d'expérience, je transforme vos idées en projets performants. Contactez-moi pour donner vie à vos projets numériques."
        />
        <meta property="og:image" content="/images/ProfilPicture.png" />
        <meta property="og:url" content="https://lindow.fr/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accueil | Anthony Casares - Développeur Freelance"
        />
        <meta
          name="twitter:description"
          content="Bienvenue sur la page d'accueil d'Anthony Casares, développeur web et mobile freelance. Avec plusieurs années d'expérience, je transforme vos idées en projets performants. Contactez-moi pour donner vie à vos projets numériques."
        />
        <meta name="twitter:image" content="/images/ProfilPicture.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Anthony Casares",
            jobTitle: "Développeur web / mobile freelance",
            url: "https://lindow.fr/",
            image: "/images/ProfilPicture.png",
            description:
              "Avec plusieurs années d'expérience, je transforme vos idées en projets performants. Contactez-moi pour donner vie à vos projets numériques.",
          })}
        </script>
      </Head>
      <div className={styles.HomeContainer}>
        <div className={styles.HomeContainerLeft}>
          <h1 className={styles.Title}>
            Je suis <span className={styles.Name}>Anthony Casares</span>,
            Développeur web / mobile
          </h1>

          <p className={styles.Description}>
            Fort de plusieurs années d&apos;expérience en développement web et
            mobile, je suis prêt à concrétiser vos idées en projets réussis.
            N&apos;hésitez pas à me contacter pour discuter de vos besoins
            numériques.
          </p>

          <SharedButton onClick={handleClick}>Contactez-moi</SharedButton>
        </div>
        <img
          src="/images/ProfilPicture.png"
          alt="Photo de profil d'Anthony Casares"
          className={styles.ProfilImage}
        />
      </div>
    </div>
  );
}
