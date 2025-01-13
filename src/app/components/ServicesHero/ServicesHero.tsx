import Image from "next/image";
import styles from "./ServicesHero.module.css";

const ServicesHero = () => {
  return (
    <>
      <section className={styles.servicesHero}>
        <div className={styles.container}>
          <div className={styles.textBox}>
            <p className={styles.subtitle}>Let&apos;s get started</p>
            <h1 className={styles.title}>How Can I Help You</h1>
            <p className={styles.description}>
              Ignite Inclusive Leadership (IIL) is inspired by the Zulu
              philosophy of &apos;ubuntu,&apos; which emphasizes humanity,
              connection, and shared responsibility: &apos;I am because we
              are.&apos; IIL fosters compassionate and inclusive leadership to
              create more humane, rational, and just organizations, focusing on
              workforce composition, recruitment, career progression, and
              cultivating a just and inclusive workplace culture.
            </p>
            <a href="#contact" className={styles.button}>
              LET&apos;S GET STARTED &rarr;
            </a>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/thanda-presenting.png"
              alt="Coaching session"
              width={500}
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
