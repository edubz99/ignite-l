import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <h3 className={styles.subtitle}>Contact Us</h3>
      <h3 className={styles.title}>
        Talk to the Inclusive and Compassionate Leadership expert
      </h3>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">*First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="lastName">*Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label htmlFor="company">*Company</label>
            <input
              type="text"
              id="company"
              placeholder="Enter your company name"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="jobTitle">*Job Title</label>
            <input
              type="text"
              id="jobTitle"
              placeholder="Enter your job title"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">*Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber">*Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className={styles.textAreaGroup}>
          <label htmlFor="needs">*Tell us more about your needs</label>
          <textarea id="needs" rows={4}></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Contact Us
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
