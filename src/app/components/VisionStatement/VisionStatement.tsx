import styles from "./VisionStatement.module.css";

const VisionStatement = () => {
  return (
    <section className={styles.visionSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Vision Statement</h2>
        <p className={styles.description}>
          To be one of the world’s leading consultancy firms in supporting
          organisations embrace diversity and an inclusive organisational
          culture. We believe passionately that contributing to the development
          of a more inclusive, compassionate, and humane organisational culture
          is a moral obligation.
        </p>
      </div>
    </section>
  );
};

export default VisionStatement;
