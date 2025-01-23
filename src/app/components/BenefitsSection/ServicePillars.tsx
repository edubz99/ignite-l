"use client";
import styles from "./ServicePillars.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faMagnifyingGlass,
  faArrowUp,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";

const ServicePillars = () => {
  const services = [
    {
      title: "Workforce Composition",
      icon: faUsers,
      description:
        "We help align your workforce and leadership diversity with your clientele, fostering trust, authenticity, and an inclusive culture. This alignment strengthens client relationships, enhances decision-making through diverse perspectives, and demonstrates a real commitment to equity and representation.",
    },
    {
      title: "Inclusive Recruitment",
      icon: faMagnifyingGlass,
      description:
        "Inclusive recruitment is key to building a fair, high-performing organisation. Traditional hiring often disadvantages marginalised groups, perpetuating inequities. By ensuring fairness, you unlock diverse talent, drive innovation, and boost integrity. It’s not just ethical - it’s strategic. Let us help you get it right!",
    },
    {
      title: "Career Progression and Internal Promotions",
      icon: faArrowUp,
      description:
        "Career progression often remains unequal, especially for marginalised groups, due to unclear and biased promotion processes. We’ll help you break these barriers and build a culture where talent drives success. Together, we’ll create lasting change.",
    },
    {
      title: "Just and Restorative Culture",
      icon: faBalanceScale,
      description:
        "We equip leaders to build a just, restorative culture that fosters trust, accountability, and equity. By embedding fairness and proactive practices, your organisation will mend relationships, boost collaboration, and help everyone thrive.",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>Our Services</h3>
        <h2 className={styles.title}>
          {" "}
          What services does Ignite Inclusive Leadership offer?
        </h2>
      </div>

      <div className={styles.descriptionGrid}>
        <p className={styles.description}>
          Services Our inclusive leadership services help leaders embed
          diversity and inclusion into workforce strategy, creating cultures
          that reflect and celebrate client diversity. By attracting diverse
          talent, ensuring equity, and fostering belonging, organisations unlock
          potential, drive engagement, and achieve high performance.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={service.icon} className={styles.icon} />
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePillars;
