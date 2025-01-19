import styles from "./VisionStatement.module.css";

const VisionStatement = () => {
  return (
    <section className={styles.visionSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Vision Statement</h2>
        <p className={styles.description}>
          Our vision is to be a global leader in helping organisations embrace
          diversity and build inclusive cultures. We are driven by a deep belief
          that fostering more inclusive, compassionate, and humane
          organisational environments is not just a goal, but a moral
          imperative.
        </p>
      </div>
    </section>
  );
};

export default VisionStatement;
