"use client";
import styles from "./PersonalStatement.module.css";
import Image from "next/image";
import { useState } from "react";

const PersonalStatement = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setIsScrolled(scrollTop > 0); // Set true if user has scrolled
  };

  return (
    <section className={styles.personalStatementSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Defining Leadership Through Expertise and Insight
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div
            className={`${styles.scrollableContent} ${
              isScrolled ? styles.scrolled : ""
            }`}
            onScroll={handleScroll}
          >
            <p className={styles.paragraph}>
              My academic foundation lies in Critical Management Studies (CMS),
              which positions management as a pivotal modern institution
              warranting rigorous scrutiny. CMS challenges the mainstream
              portrayal of management and organisations as inherently positive,
              exposing a hidden reality: these structures often systematically
              favour privileged groups while disadvantaging others. Dominant
              theories and conventional thinking fail to capture this imbalance,
              perpetuating a one-sided ideology of elite interests (Alvesson et
              al., 2009).
            </p>
            <p className={styles.paragraph}>
              This critical ethos shapes my approach. I recognise that
              contemporary organisations and leadership practices often produce
              unintended, yet significant, negative consequences for employees
              and society. Inequities are frequently embedded, propagated, and
              normalised through institutional structures and organisational
              cultures — especially in leadership teams lacking diversity.
              Monocultural leadership fosters groupthink and blind spots,
              perpetuating systemic inequalities.
            </p>
            <p className={styles.paragraph}>
              In many cases, leaders respond disingenuously to calls for equity,
              dismissing these concerns as overly ‘woke’ or unduly negative
              while gaslighting those who raise them. Some organisations focus
              on past progress, using it as a shield to deny the ongoing work
              still required. This resistance highlights the challenges of
              championing Inclusive Leadership: it is emotionally charged, often
              met with pushback, and demands a steadfast, long-term commitment.
            </p>
            <p className={styles.paragraph}>
              If your organisation is genuinely committed to igniting Inclusive
              Leadership, I am here to support you. Together, we will leverage
              strategic tools to drive meaningful, transformative change. With
              resilient and unwavering leadership, we can dismantle barriers,
              foster equity, and create workplaces where everyone thrives.
            </p>
          </div>
          {!isScrolled && (
            <div className={styles.scrollIndicator}>
              <span className={styles.arrowDown}>↓</span> Scroll
            </div>
          )}
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/thanda-leadership-presentation.png"
            alt="Leadership Presentation"
            width={500}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalStatement;
