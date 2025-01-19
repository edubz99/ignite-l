import styles from "./LandingHero.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <h3 className={styles.subtitle}>
          A Leading Consultant in Inclusive and Compassionate Leadership
        </h3>
        <p className={styles.description}>
          I am Dr Thanda Mhlanga and was raised under the guiding philosophy of
          <strong> ubuntu</strong>, a Nguni term that holds deep personal
          significance. Ubuntu embodies the essence of humanity towards others -
          being present, affirming, and supportive.
        </p>
        <p className={styles.description}>
          It is rooted in values such as social justice, fairness, duty of care,
          compassion, allyship, goodwill, civility, respect, and dignity. These
          principles are vital for cultivating a compassionate, inclusive, and
          just organisational culture - one where every employee is visible,
          celebrated, and empowered to be their authentic self, regardless of
          their background.
        </p>
        <a href="/about" className={styles.link}>
          Read my full story here →
        </a>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/dr-thanda-presenting-2.png"
          alt="Dr Thanda Mhlanga"
          width={600}
          height={400}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default HeroSection;
