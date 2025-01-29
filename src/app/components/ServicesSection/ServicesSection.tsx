import styles from "./ServicesSection.module.css";
import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      title: "Contracting",
      description: "Defining clear outcomes upfront.",
      image: "/business-collaboration.jpg",
    },
    {
      title: "Data Collection",
      description:
        "Conducting principled research via surveys, focus groups, and individual meetings.",
      image: "/workplace-meeting.jpg",
    },
    {
      title: "Data Analysis",
      description:
        "Triangulating insights from diverse stakeholder perspectives.",
      image: "/group-of-friends-laughing.jpg",
    },
    {
      title: "Feedback Report",
      description:
        "Offering an objective outsider’s perspective as a trusted consultant.",
      image: "/team-members-having-a-discussion.jpg",
    },
    {
      title: "Intervention Planning",
      description: "Strategically designing targeted solutions.",
      image: "/workplace-group-exercise.jpg",
    },
    {
      title: "Implementation",
      description: "Delivering workshops, coaching, and mentoring.",
      image: "/group-session.jpg",
    },
    {
      title: "Evaluation",
      description: "Independently assessing progress toward goals.",
      image: "/collaborating.jpg",
    },
    {
      title: "Conclusion",
      description: "Evaluating outcomes and closing the contract.",
      image: "/candidate-accepting-an-offer.jpg",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>About Us</h3>
        <h2 className={styles.title}>Our Consultant-Client System</h2>
        <p className={styles.description}>
          Our relationships are grounded in trust, authenticity, transparency,
          and mutuality. We earn the privilege to support organisations through
          a disciplined, results-driven approach. This method ensures alignment,
          accountability, and measurable impact.
        </p>
      </div>
      <div className={styles.cardContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
