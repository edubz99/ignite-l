"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/ignite-inclusive-leadership-logo.svg"
            alt="Ignite Inclusive Leadership Logo"
            width={50}
            height={80}
            priority
          />
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className={styles.socialIcons}>
        <a
          href="https://www.linkedin.com/in/dr-thanda-mhlanga-41625b8b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:thanda.mhlanga@igniteinclusiveleadership.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
