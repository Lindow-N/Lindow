import React, { useState, useEffect } from "react";
import styles from "./Portfolio.module.css";

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
      href: "https://reactjs.org",
    },
    {
      original: isMobile ? "0,420,290,180" : "65,225,290,600",
      alt: "React Native",
      href: "https://reactnative.dev",
    },
    {
      original: isMobile ? "600,420,310,180" : "535,0,310,370",
      alt: "Firebase",
      href: "https://firebase.google.com",
    },
    {
      original: isMobile ? "0,430,600,600" : "310,400,600,560",
      alt: "Figma",
      href: "https://www.figma.com",
    },
  ];

  return (
    <div className={styles.MainContainer}>
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
                alt="Technologies"
                useMap="#techmap"
                style={{ width: "100%", height: "auto" }}
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
                alt="Technologies"
                useMap="#techmap"
                style={{ width: "90%", height: "auto" }}
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
            <img
              src="/images/Portfolio1.png"
              alt="Portfolio1"
              className={styles.PortfolioImg1}
            />
            <img
              src="/images/Portfolio3.png"
              alt="Portfolio3"
              className={styles.PortfolioImg2}
            />
          </div>

          <div className={styles.portfolioItemRight}>
            <img
              src="/images/Portfolio2.png"
              alt="Portfolio2"
              className={styles.PortfolioImg3}
            />
            <img
              src="/images/Portfolio4.png"
              alt="Portfolio4"
              className={styles.PortfolioImg4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
