"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./ServicePillars.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faMagnifyingGlass,
  faArrowUp,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";

const ServicePillars = () => {
  const pathname = usePathname();
  const isServicesPages = pathname === "/services";
  const [activeTab, setActiveTab] = useState("Workforce Composition");
  const [showHint, setShowHint] = useState(true);

  const services = [
    {
      title: "Workforce Composition",
      icon: faUsers,
      description:
        "We will help you ensure that your workforce composition mirrors your business clientele, and that executive leadership reflects the diversity of your workforce. This alignment is crucial for fostering authenticity, building trust, and driving organisational effectiveness while cultivating a truly inclusive culture. By aligning leadership and workforce diversity, your organisation will strengthen client connections, enhance decision-making with diverse perspectives, and showcase a genuine, actionable commitment to equity and representation at every level.",
    },
    {
      title: "Inclusive Recruitment",
      icon: faMagnifyingGlass,
      description:
        "Getting inclusive recruitment right is essential to building a fair and high-performing organisation. In many companies, recruitment processes disadvantage candidates from traditionally marginalised backgrounds, perpetuating systemic inequities. Ensuring fairness at every stage of hiring not only levels the playing field but also unlocks diverse talent, drives innovation, and strengthens organisational integrity. Inclusive recruitment is not just an ethical imperative—it’s a strategic advantage. We will support you get it right!",
    },
    {
      title: "Career Progression and Internal Promotions",
      icon: faArrowUp,
      description:
        "In most organisations, equal opportunities for career progression remain elusive, particularly for staff from traditionally marginalised backgrounds. Internal promotion processes are often unclear and riddled with systemic inequalities. We will support you confront these barriers head-on and dismantle them, brick by brick, fostering a culture where talent and potential are the true drivers of success. We will support you create enduring change.",
    },
    {
      title: "Just and Restorative Culture",
      icon: faBalanceScale,
      description:
        "We will empower your leadership and management teams with the tools to build a just and restorative culture - an essential foundation for cultivating trust, accountability, and equity across your organisation. This culture emphasizes fairness, addresses harm proactively, and ensures every individual feels valued, respected, and heard. By embedding restorative practices, your organisation can mend relationships, strengthen collaboration, and create an environment where both individuals and teams thrive.",
    },
  ];

  return (
    <section className={styles.Services}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>Services</h3>
        <h2 className={styles.title}>
          What services does Ignite Inclusive Leadership offer?
        </h2>
        <div className={styles.descriptionGrid}>
          <p className={styles.description}>
            Our inclusive leadership services empower senior leaders and their
            organisations to thrive in today’s fast-paced, ever-evolving
            landscape. We guide them in embedding diversity and inclusion at the
            core of their workforce strategy and creating a culture that
            mirrors, values, and celebrates the diversity of their client base.
          </p>
          <p className={styles.description}>
            Organisations that attract and retain top talent from diverse
            backgrounds, ensure equitable treatment, amplify every voice, and
            foster a sense of belonging will unlock the full potential of their
            people. This leads to a high-performing, engaged workforce deeply
            committed to achieving organisational goals.
          </p>
        </div>
      </div>

      <div className={styles.tabsContainer}>
        {services.map((service) => (
          <button
            key={service.title}
            className={`${styles.tabButton} ${
              activeTab === service.title ? styles.activeTab : ""
            }`}
            onClick={() => {
              setActiveTab(service.title);
              setShowHint(false); // Hide hint after interaction
            }}
          >
            <FontAwesomeIcon icon={service.icon} className={styles.icon} />
            {service.title}
          </button>
        ))}
        {showHint && (
          <div className={styles.hint}>
            <span>Click a service to learn more</span>
            <div className={styles.hintArrow}></div>
          </div>
        )}
      </div>

      <div className={styles.content}>
        {services
          .filter((service) => service.title === activeTab)
          .map((service) => (
            <div key={service.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
      </div>

      {!isServicesPages ? (
        <div className={styles.ctaContainer}>
          <a href="/services" className={styles.ctaButton}>
            Find out more &rarr;
          </a>
        </div>
      ) : null}
    </section>
  );
};

export default ServicePillars;
