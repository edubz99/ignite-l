import styles from "./LandingHero.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <h3 className={styles.subtitle}>
          A Leading Consultant in Inclusive and Compassionate Leadership
        </h3>
        <h1 className={styles.title}>Unlock Your True Leadership Potential</h1>
        <p className={styles.description}>
          To ignite Inclusive and Compassionate Leadership in organisations.
        </p>
        <p className={styles.description}>
          Unmasking organisational behaviour and structural inequalities that
          favour certain social groups and disadvantage others.
        </p>
        <a href="#contact" className={styles.button}>
          LET&apos;S GET STARTED &rarr;
        </a>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/thanda-presenting.png"
          alt="Thanda"
          width={500}
          height={600}
          className={styles.image}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
