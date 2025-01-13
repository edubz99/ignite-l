import styles from "./ServicesSection.module.css";
import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      title: "One-on-One Coaching",
      description:
        "Helping clients to identify and set clear, measurable, and achievable goals that align with their values and aspirations.",
      image: "/business-collaboration.jpg",
    },
    {
      title: "Fitness Training",
      description:
        "Assisting clients in developing the knowledge, and abilities they need to be effective leaders, communication.",
      image: "/workplace-meeting.jpg",
    },
    {
      title: "Healthy Lifestyle",
      description:
        "Helping clients to identify and pursue career opportunities that align with their values, strengths, and interests.",
      image: "/group-of-friends-laughing.jpg",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>About Us</h3>
        <h2 className={styles.title}>How I Can Help You</h2>
        <p className={styles.description}>
          Help individuals achieve their life goals by providing them with the
          tools, support, and guidance they need to set and achieve their
          objectives.
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
