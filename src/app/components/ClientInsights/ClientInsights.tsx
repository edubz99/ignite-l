"use client";
import styles from "./ClientInsights.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faRoad,
  faShieldAlt,
  faSearch,
  faGavel,
  faUsers,
  faLightbulb,
  faHandshake,
  faArrowUp,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";

const ClientInsightsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const clients = [
    {
      icon: faRoad,
      title: "Urgency for Change",
      description:
        "Acknowledging the status quo is unsustainable and committing to forging a new path forward.",
    },
    {
      icon: faShieldAlt,
      title: "Courageous Commitment",
      description:
        "Confronting systemic and historic inequalities, embracing discomfort as part of meaningful change.",
    },
    {
      icon: faSearch,
      title: "Self-Reflection",
      description:
        "Facing realities, addressing identified issues, and taking responsibility for progress.",
    },
    {
      icon: faGavel,
      title: "Inclusive Justice",
      description:
        "Fostering a culture where fairness and equity are ingrained, regardless of background.",
    },
    {
      icon: faUsers,
      title: "Cultural Intelligence",
      description:
        "Enhancing inclusivity and compassion, leveraging diversity to gain a competitive edge.",
    },
    {
      icon: faLightbulb,
      title: "Awareness of Power Dynamics",
      description:
        "Understanding how privilege and social power shape workplace dynamics.",
    },
    {
      icon: faHandshake,
      title: "Building Allyship",
      description: "Creating communities of action and meaningful allyship.",
    },
    {
      icon: faArrowUp,
      title: "Leadership Transformation",
      description:
        "Recognising that inclusive leadership boosts morale, engagement, and performance.",
    },
    {
      icon: faBalanceScale,
      title: "Equity at the Core",
      description:
        "Viewing Equity, Diversity, and Inclusion not as tick boxes but as the essence of fairness.",
    },
  ];

  return (
    <div className={styles.clientSection}>
      <section className={styles.clientSectionInner}>
        <div className={styles.header}>
          <h3 className={styles.subtitle}>
            Who are Ignite Inclusive Leadership’s Typical Clients?
          </h3>
          <p className={styles.description}>
            For organisations ready to embrace change, equity, and inclusion at
            their core.
          </p>
        </div>
        <div className={styles.accordionContainer}>
          {clients.map((client, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.iconAndTitle}>
                  <FontAwesomeIcon icon={client.icon} className={styles.icon} />
                  <h4 className={styles.clientTitle}>{client.title}</h4>
                </div>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronUp : faChevronDown}
                  className={styles.chevron}
                />
              </div>
              {activeIndex === index && (
                <p className={styles.clientDescription}>{client.description}</p>
              )}
            </div>
          ))}
        </div>
        <div className={styles.insightsSection}>
          <h3 className={styles.insightsTitle}>
            Is your organisation willing to learn? See related insights …
          </h3>
          <div className={styles.insightsContent}>
            <div>
              <h4>The Parable of the Boiling Frog</h4>
              <p>
                Senge&apos;s ‘parable of the boiling frog’ illustrates how
                organisations often fail to respond to gradual changes in their
                environment. A frog placed in boiling water will immediately try
                to escape, but in slowly heated water, it becomes lethargic and
                unable to react, ultimately succumbing. This analogy highlights
                that both frogs and organisations are more attuned to sudden
                disruptions than to incremental shifts, which can be just as
                dangerous if left unaddressed.
              </p>
            </div>
            <div>
              <h4>Denial and Predisposition to Blame</h4>
              <p>
                In most failing companies, warning signs are abundant but
                ignored. Instead of addressing internal issues, there’s a
                tendency to shift blame externally (Senge, 2006: 17-19).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientInsightsAccordion;
