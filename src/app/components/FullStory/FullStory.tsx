import styles from "./FullStory.module.css";

const FullStory = () => {
  return (
    <section className={styles.fullStorySection} id="full-story">
      <div className={styles.header}></div>
      <div className={styles.storyContent}>
        <div className={styles.bulletSection}>
          <h2 className={styles.title}>Areas of Expertise</h2>
          <ul className={styles.bulletPoints}>
            <li>
              Leveraging Organisational Development principles, Thanda has
              successfully led and managed change in organisations with over
              5,000 employees, driving impactful transformation.
            </li>
            <li>
              A passionate advocate for Equality, Diversity, and Inclusion
              (EDI), he is committed to building organisations that are more
              humane, rational, and just.
            </li>
            <li>
              Extensive experience in reviewing, developing, and implementing
              organisation-wide EDI strategies, ensuring they are aligned with
              organisational goals and values.
            </li>
            <li>
              Expertise in leading cultural transformation and embedding
              compassionate, inclusive leadership at all levels.
            </li>
            <li>
              With a global leadership background spanning Africa, the Middle
              East, and Europe, Thanda applies emotional and cultural
              intelligence to help organisations understand how culture shapes
              inclusion and exclusion, and why an effective strategy is vital
              for cultivating an inclusive environment.
            </li>
            <li>
              Thanda is a certified Executive Coach and Mentor with the
              Institute of Leadership and Management (ILM), specialising in
              executive development and leadership guidance.
            </li>
            <li>
              With deep expertise in diagnosing organisational challenges,
              Thanda designs bespoke interventions that motivate and develop the
              workforce, enhance team functioning, and drive organisational
              efficiency.
            </li>
            <li>
              A proven exceptional leader, Thanda has successfully led large,
              complex organisations, managing diverse stakeholders with
              competing priorities and fostering consensus in challenging
              environments.
            </li>
            <li>
              As a critical policy analyst, Thanda is dedicated to unmasking and
              challenging organisational cultures, practices, and policies that
              perpetuate systemic favouritism, privilege, and inequality.
            </li>
            <li>
              A respected leader, Thanda understands that inclusion,
              particularly anti-racist discourse, is often uncomfortable and
              challenging. He approaches these conversations with truth, grace,
              and civility, promoting justice by encouraging executives and
              leaders to confront difficult truths and commit to fostering an
              inclusive and anti-racist organisational culture.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FullStory;
