import styles from "./AboutFactSection.module.css";

const FactsSection = () => {
  const facts = [
    "Unmasking organisational behaviour and structural inequalities that favour certain social groups and disadvantage others. ",
    "Facilitating understanding in organisations about how one’s social identity or background can be a source of social power and privilege or disadvantage and marginalisation.",
    "Supporting organisations by identifying and dismantling structures that incubate and perpetuate inequalities in their workforce.",
    "Enhancing organisational effectiveness through improving the functioning of individuals and teams.",
  ];

  return (
    <section className={styles.factsSection}>
      <div className={styles.innerFactsSection}>
        <div className={styles.header}>
          <h3 className={styles.subtitle}>Mission Statement</h3>
          <h2 className={styles.title}>
            To ignite Inclusive and Compassionate Leadership in organisations.
            We will achieve this through:
          </h2>
        </div>
        <div className={styles.factsGrid}>
          {facts.map((fact, index) => (
            <div key={index} className={styles.factCard}>
              <span className={styles.icon}>✔</span>
              <p>{fact}</p>
            </div>
          ))}
        </div>
        <div className={styles.ctaContainer}>
          <a href="#contact" className={styles.ctaButton}>
            LET&apos;S BRING CHANGE IN YOU &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
