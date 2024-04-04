import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I specialize in creating engaging user interfaces with HTML,
                CSS, and JavaScript frameworks like React.js. From pixel-perfect
                designs to seamless interactions, I strive to craft beautiful
                and intuitive experiences that delight users.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I excel in architecting server-side solutions that are both
                scalable and performant. From handling data storage to crafting
                APIs, I'm passionate about building the backbone of web
                applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Technical Support</h3>
              <p>
                I specialize in troubleshooting and resolving user issues
                efficiently. Whether it's providing guidance or implementing
                solutions, I'm dedicated to delivering outstanding technical
                support that ensures user satisfaction.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Personal Interests</h3>
              <p>
                In my free time, I'm constantly honing my skills by working on
                mini projects that allow me to explore new technologies and
                methodologies. From building web applications to experimenting
                with new programming languages, I'm always seeking out
                opportunities to leverage my skills and push the boundaries of
                what's possible. Apart from this, I also have a passion for
                music, soccer, cooking, gaming, art and traveling.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
