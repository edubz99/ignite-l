"use client";
import { usePathname } from "next/navigation";
import styles from "./ContactForm.module.css";
import Image from "next/image";

const ContactForm = () => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <section
      className={`${styles.contactSection} ${
        isContactPage ? styles.contactPageSection : ""
      }`}
      id="contact"
    >
      <div className={styles.formAndSignature}>
        <div className={styles.formWrapper}>
          <h3 className={styles.subtitle}>Contact Us</h3>
          <h3 className={styles.title}>
            Talk to the Inclusive and Compassionate Leadership expert
          </h3>

          <p className={styles.formDescription}>
            Committed to real culture change? Contact us to discover how our
            expertise in compassionate and inclusive leadership can help you
            build a high performing, inclusive organisation with tailored
            solutions.
          </p>

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
        </div>
        {isContactPage && (
          <div className={styles.signatureDetails}>
            <h3 className={styles.name}>Dr Thanda Mhlanga</h3>
            <Image
              src="/thanda-1.jpg"
              alt="Thanda portrait"
              width={250}
              height={360}
              className={styles.image}
            />
            <p className={styles.signatureTitle}>Director & Founder</p>
            <p className={styles.company}>Ignite Inclusive Leadership</p>
            <p className={styles.contactInfo}>
              <strong>Mobile:</strong>{" "}
              <a href="tel:+447932595374">07932 595 374</a>
            </p>
            <p className={styles.contactInfo}>
              <strong>Email:</strong>{" "}
              <a href="mailto:Thanda.Mhlanga@IgniteInclusiveLeadership.com">
                Thanda.Mhlanga@IgniteInclusiveLeadership.com
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
