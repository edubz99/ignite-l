"use client";
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
  const isServicesPage = pathname === "/services";

  console.log({ isServicesPage });

  const benefits = [
    {
      title: "Workforce Composition",
      description:
        "Analyze and develop a diverse and balanced workforce to foster inclusivity and innovation.",
      icon: faUsers,
    },
    {
      title: "Recruitment",
      description:
        "Enhance recruitment processes to attract and retain top talent from diverse backgrounds.",
      icon: faMagnifyingGlass,
    },
    {
      title: "Career Progression and Internal Promotions",
      description:
        "Support equitable career growth and internal promotion practices for all employees.",
      icon: faArrowUp,
    },
    {
      title: "Just and Inclusive Culture",
      description:
        "Build a culture where fairness and inclusion drive disciplinary processes and grievance handling.",
      icon: faBalanceScale,
    },
  ];

  return (
    <section className={styles.Services}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>Services</h3>
        <h2 className={styles.title}>
          What services does Ignite Inclusive Leadership offer?
        </h2>
        <p className={styles.description}>
          We aim to ignite compassionate and inclusive leadership through these
          four pillars, helping organizations create more humane, rational, and
          just workplaces.
        </p>
      </div>
      <div className={styles.benefitsContainer}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={benefit.icon} className={styles.icon} />
            </div>
            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
            <p className={styles.benefitDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
      {!isServicesPage && (
        <div className={styles.ctaContainer}>
          <a href="/services" className={styles.ctaButton}>
            VIEW ALL SERVICES &rarr;
          </a>
        </div>
      )}
    </section>
  );
};

export default ServicePillars;
