import styles from "./Home.module.css";
import SharedButton from "../Button/sharedButton";

export default function Home({ handleClick }) {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.HomeContainer}>
        <div className={styles.HomeContainerLeft}>
          <h1 className={styles.Title}>
            Je suis <span className={styles.Name}>Anthony Casares</span>,
            Développeur web / mobile
          </h1>

          <p className={styles.Description}>
            Donec id sapien ac nisl viverra convallis. Ut placerat tellus nec
            bibendum lacinia. Curabitur tristique ultricies ultrices. Nulla
            lorem mi, vulputate interdum odio a, dignissim facilisis arcu.
          </p>
          <SharedButton onClick={handleClick}>Contactez-moi</SharedButton>
        </div>
        <img
          src="/images/ProfilPicture.png"
          alt="ProfilPicture"
          className={styles.ProfilImage}
        />
      </div>
    </div>
  );
}
