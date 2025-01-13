import styles from "./AboutSection.module.css";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.contentContainer}>
        <div className={styles.imageGrid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/thanda-1.jpg"
              alt="Thanda portrait"
              width={300}
              height={450}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.textContent}>
          <h3 className={styles.greeting}>Hey there!</h3>
          <h2 className={styles.title}>I’m Thanda Mhlanga</h2>
          <p className={styles.description}>
            A Leadership and Management expert who views inclusive and
            compassionate leadership as a moral obligation.I have over 20 years
            of combined experience in{" "}
            <span className={styles.highlight}>
              Leadership and Management: Leading and Managing Change, Strategic
              Delivery, and Executive Coaching and Mentoring.
            </span>{" "}
          </p>
          <p className={styles.description}>
            I have successfully led and managed change in organisations of more
            than 5000 employees.
          </p>
          <a href="/about" className={styles.button}>
            READ MY FULL STORY &rarr;
          </a>
        </div>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <span className={styles.statNumber}>58+</span>
          <p>improve their leadership skills</p>
        </div>
        <div className={styles.statBox}>
          <span className={styles.statNumber}>200K+</span>
          <p>advance their careers</p>
        </div>
        <div className={styles.statBox}>
          <span className={styles.statNumber}>24+</span>
          <p>online support & guidance</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
