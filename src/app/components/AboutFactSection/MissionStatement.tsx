import styles from "./MissionStatement.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faLightbulb,
  faHammer,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const MissionStatement = () => {
  const points = [
    {
      icon: faEye,
      title: "Unmasking Inequities",
      description:
        "Exposing behaviors and structural inequalities that privilege certain groups while disadvantaging others.",
    },
    {
      icon: faLightbulb,
      title: "Cultivating Awareness",
      description:
        "Helping organisations understand how social identity and background can confer privilege or perpetuate marginalisation.",
    },
    {
      icon: faHammer,
      title: "Dismantling Barriers",
      description:
        "Identifying and breaking down systemic structures that foster and perpetuate workforce inequalities.",
    },
    {
      icon: faChartLine,
      title: "Driving Excellence",
      description:
        "Enhancing organisational effectiveness by empowering individuals and teams to thrive collaboratively and inclusively.",
    },
  ];

  return (
    <section className={styles.missionSection}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>Mission Statement</h3>
        <h2 className={styles.title}>
          Transforming Organisations through Inclusive and Compassionate
          Leadership
        </h2>
        <p className={styles.description}>
          Our mission is to ignite Inclusive and Compassionate Leadership that
          transforms organisations into equitable, high-performing environments.
          We achieve this by:
        </p>
      </div>
      <div className={styles.pointsGrid}>
        {points.map((point, index) => (
          <div key={index} className={styles.pointCard}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={point.icon} className={styles.icon} />
            </div>
            <h3 className={styles.pointTitle}>{point.title}</h3>
            <p className={styles.pointDescription}>{point.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <p>
          Through this work, we empower organisations to lead with authenticity,
          inclusivity, fairness, compassion, and transformative impact.
        </p>
      </div>
    </section>
  );
};

export default MissionStatement;
