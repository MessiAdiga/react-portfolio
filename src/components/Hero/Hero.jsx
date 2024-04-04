import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Arvind</h1>
        <p className={styles.description}>
          I&apos;m a Software Engineer with 5+ years of hands-on experience,
          with a knack for problem-solving and a passion for crafting digital
          solutions. Reach out to me & let&apos;s create something extraordinary
          together!
        </p>
        <a className={styles.contactBtn} href="mailto:adiga1993@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.profilePicture}
        src={getImageUrl("hero/profile.png")}
        alt="Hero image"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
