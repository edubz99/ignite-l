import Image from "next/image";
import styles from "./ServicesHero.module.css";

const ServicesHero = () => {
  return (
    <>
      <section className={styles.servicesHero}>
        <div className={styles.container}>
          <div className={styles.textBox}>
            <h1 className={styles.title}>Our Values and Commitment</h1>
            <p className={styles.description}>
              The name Ignite Inclusive Leadership (IIL) reflects our commitment
              to ubuntu and inclusive, compassionate leadership. Our logo
              embodies this vision: two hands of diverse backgrounds unite to
              cradle a warm flame, symbolising the collective effort to ignite
              inclusivity and spark transformative change. This powerful image
              conveys our belief in unity and shared purpose to drive lasting
              impact.
            </p>
            <a href="#contact" className={styles.button}>
              LET&apos;S GET STARTED &rarr;
            </a>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/ignite-inclusive-leadership-logo-blue.png"
              alt="Coaching session"
              width={450}
              height={600}
              className={styles.image}
            />
          </div>
        </div>
      </section>
      <div className={styles.quoteBox}>
        <blockquote>
          &quot;Motivation for change must be generated before change can occur.
          One must be helped to re-examine many cherished assumptions about
          oneself and one&apos;s relations to others.&quot;
        </blockquote>
        <p className={styles.quoteAuthor}>- Kurt Lewin</p>
      </div>
    </>
  );
};

export default ServicesHero;
