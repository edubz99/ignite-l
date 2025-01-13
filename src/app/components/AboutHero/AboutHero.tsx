import styles from "./AboutHero.module.css";

const AboutHero = () => {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.contentBox}>
        <p className={styles.greeting}>Hey there!</p>
        <h1 className={styles.title}>I’m Thanda Mhlanga</h1>
        <p className={styles.description}>
          I use a variety of techniques, including mentoring, counseling, and
          training,
          <span className={styles.highlight}>
            to help clients build self-awareness, and develop strategies for
            success.
          </span>
        </p>
        <p className={styles.subDescription}>
          As a leadership coach, my goal is to help individuals and
          organizations develop the skills and knowledge they need to become
          more effective leaders. I work with clients from a wide range of
          industries and backgrounds, and my approach is tailored to meet their
          specific needs and goals.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
