import styles from "./LandingHero.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>
          A Leading Consultant in Inclusive and Compassionate Leadership
        </h3>
        <p className={styles.description}>
          Dr. Thanda Mhlanga is a transformative leadership consultant with over
          20 years of expertise in driving cultural change, organisational
          development, and strategic excellence. Specialising in equalities,
          executive coaching, and mentoring, he is committed to fostering
          inclusive workplaces where every individual feels valued and
          empowered.
        </p>
        <p className={styles.description}>
          As a qualitative researcher, Thanda delves beyond surface-level data
          to reveal the social realities and power dynamics shaping
          organisational culture and employee experiences. Partner with Thanda
          to cultivate a workplace where authenticity thrives, diversity is
          celebrated, and performance excels - unlocking the full potential of
          your workforce while boosting morale and retaining top talent.
          Inclusive and Compassionate Leadership is a moral imperative.
        </p>
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
