"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./ContactForm.module.css";
import Image from "next/image";

const ContactForm = () => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    needs: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          jobTitle: "",
          email: "",
          phoneNumber: "",
          needs: "",
        });
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setMessage(`Something went wrong. ${error}`);
    } finally {
      setLoading(false);
    }
  };

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
            build a high-performing, inclusive organisation with tailored
            solutions.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="firstName">*First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="lastName">*Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="company">*Company</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="jobTitle">*Job Title</label>
                <input
                  type="text"
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Enter your job title"
                  required
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">*Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phoneNumber">*Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div className={styles.textAreaGroup}>
              <label htmlFor="needs">*Tell us more about your needs</label>
              <textarea
                id="needs"
                value={formData.needs}
                onChange={handleChange}
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? "Sending..." : "Contact Us"}
            </button>

            {message && <p className={styles.formMessage}>{message}</p>}
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
