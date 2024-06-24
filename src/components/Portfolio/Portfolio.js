import React, { useState, useEffect } from "react";

import Head from "next/head";
import styles from "./Portfolio.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const calculateCoords = (
  originalWidth,
  originalHeight,
  newWidth,
  newHeight,
  coords
) => {
  const [x1, y1, x2, y2] = coords.split(",").map(Number);
  const scaleX = newWidth / originalWidth;
  const scaleY = newHeight / originalHeight;

  return [
    Math.round(x1 * scaleX),
    Math.round(y1 * scaleY),
    Math.round(x2 * scaleX),
    Math.round(y2 * scaleY),
  ].join(",");
};

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const originalSize = { width: 600, height: 600 };

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 150 });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      const imgElement = document.querySelector(".responsive-image");
      if (imgElement) {
        setImageSize({
          width: imgElement.offsetWidth,
          height: imgElement.offsetHeight,
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    const resizeTimeout = setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const coords = [
    {
      original: isMobile ? "0,0,600,170" : "0,40,290,210",
      alt: "React",
      href: "https://fr.legacy.reactjs.org/",
    },
    {
      original: isMobile ? "0,420,290,180" : "65,225,290,600",
      alt: "React Native",
      href: "https://reactnative.dev/",
    },
    {
      original: isMobile ? "600,420,310,180" : "535,0,310,370",
      alt: "Firebase",
      href: "https://firebase.google.com/",
    },
    {
      original: isMobile ? "0,430,600,600" : "310,400,600,560",
      alt: "Figma",
      href: "https://www.figma.com/fr-fr/design/",
    },
  ];

  return (
    <div className={styles.MainContainer}>
      <Head>
        <title>Portfolio | Anthony Casares - Développeur Freelance</title>
        <meta
          name="description"
          content="Découvrez le portfolio d'Anthony Casares, développeur web et mobile freelance. Parcourez mes projets réalisés en React, React Native, Firebase, et Figma."
        />
        <meta
          property="og:title"
          content="Portfolio | Anthony Casares - Développeur Freelance"
        />
        <meta
          property="og:description"
          content="Découvrez le portfolio d'Anthony Casares, développeur web et mobile freelance. Parcourez mes projets réalisés en React, React Native, Firebase, et Figma."
        />
        <meta property="og:image" content="/images/PortfolioImage.png" />
        <meta property="og:url" content="https://lindow.fr/#portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Portfolio | Anthony Casares - Développeur Freelance"
        />
        <meta
          name="twitter:description"
          content="Découvrez le portfolio d'Anthony Casares, développeur web et mobile freelance. Parcourez mes projets réalisés en React, React Native, Firebase, et Figma."
        />
        <meta name="twitter:image" content="/images/PortfolioImage.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Portfolio d'Anthony Casares",
            creator: {
              "@type": "Person",
              name: "Anthony Casares",
            },
            description:
              "Découvrez le portfolio d'Anthony Casares, développeur web et mobile freelance. Parcourez mes projets réalisés en React, React Native, Firebase, et Figma.",
            url: "https://lindow.fr/#portfolio",
          })}
        </script>
      </Head>
      <div className={styles.SkillContainer}>
        <div className={styles.SkillContainerLeft}>
          <h2 className={styles.subtitle}>MES COMPÉTENCES</h2>
          <h1 className={styles.title}>
            Développement Web et Mobile de Qualité
          </h1>
          <p className={styles.description}>
            En tant que développeur passionné et expérimenté, je mets à votre
            disposition mon savoir-faire pour créer des solutions web et mobiles
            innovantes. Ensemble, nous donnerons vie à vos projets avec
            professionnalisme et créativité.
          </p>
        </div>
        <div className={styles.SkillContainerRight}>
          {isMobile ? (
            <>
              <img
                className="responsive-image"
                src="/images/PortfolioMobile.png"
                alt="Illustration des technologies utilisées par Anthony Casares pour le développement web et mobile"
                useMap="#techmap"
                style={{ width: "100%", height: "auto" }}
                data-aos="fade-up"
              />
              <map name="techmap">
                {coords.map((area, index) => (
                  <area
                    key={index}
                    shape="rect"
                    coords={calculateCoords(
                      originalSize.width,
                      originalSize.height,
                      imageSize.width,
                      imageSize.height,
                      area.original
                    )}
                    alt={area.alt}
                    href={area.href}
                    target="_blank"
                  />
                ))}
              </map>
            </>
          ) : (
            <>
              <img
                className="responsive-image"
                src="/images/PortfolioWeb.png"
                alt="Illustration des technologies utilisées par Anthony Casares pour le développement web et mobile"
                useMap="#techmap"
                style={{ width: "90%", height: "auto" }}
                data-aos="fade-up"
              />
              <map name="techmap">
                {coords.map((area, index) => (
                  <area
                    key={index}
                    shape="rect"
                    coords={calculateCoords(
                      originalSize.width,
                      originalSize.height,
                      imageSize.width,
                      imageSize.height,
                      area.original
                    )}
                    alt={area.alt}
                    href={area.href}
                    target="_blank"
                  />
                ))}
              </map>
            </>
          )}
        </div>
      </div>
      <div className={styles.portfolioContainer}>
        <h1 className={styles.titlePortfolio}>PORTFOLIO</h1>
        <div className={styles.portfolioItem}>
          <div className={styles.portfolioItemLeft}>
            <a href="https://lecoinnippon.com/" target="_blank">
              <img
                src="/images/Portfolio5.png"
                alt="Projet de site web pour Le Coin Nippon"
                className={`${styles.PortfolioImg1} aos-init aos-animate`}
                data-aos="fade-up"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.cerclesocrate.maisonm.gay.mobile"
              target="_blank"
            >
              <img
                src="/images/Portfolio3.png"
                alt="Projet d'application mobile pour Cercle Socrate"
                className={`${styles.PortfolioImg2} aos-init aos-animate`}
                data-aos="fade-up"
              />
            </a>
          </div>
          <div className={styles.portfolioItemRight}>
            <a
              href="https://play.google.com/store/apps/details?id=com.PersoTraining.client.app&pcampaignid=web_share"
              target="_blank"
            >
              <img
                src="/images/Portfolio2.png"
                alt="Projet d'application mobile pour Perso Training"
                className={`${styles.PortfolioImg3} aos-init aos-animate`}
                data-aos="fade-up"
              />
            </a>
            <div className={styles.portfolioItemRightBottom}>
              <a
                href="https://lindow-n.github.io/Sushiman---Food-Landing-Pages/"
                target="_blank"
              >
                <img
                  src="/images/Portfolio4.png"
                  alt="Projet de landing page pour Sushiman"
                  className={`${styles.PortfolioImg4} aos-init aos-animate`}
                  data-aos="fade-up"
                />
              </a>
              <div style={{ margin: "0 10px" }}></div>
              <a
                href="https://play.google.com/store/apps/details?id=com.kami.japonais&pcampaignid=web_share"
                target="_blank"
              >
                <img
                  src="/images/Portfolio1.png"
                  alt="Projet d'application mobile pour Kami Japonais"
                  className={`${styles.PortfolioImg4} aos-init aos-animate`}
                  data-aos="fade-up"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
