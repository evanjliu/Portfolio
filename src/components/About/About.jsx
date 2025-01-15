import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/scienceIcon.png")} alt="Science icon" />
            <div className={styles.aboutItemText}>
              <h3>Clincal Research Expertise</h3>
              <p>
              As a Senior Research Analyst in pharmaceutical clinical trials, 
              I honed skills in data analysis, procedure development, and leadership. 
              providing a strong foundation for problem-solving and collaboration in 
              software development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
              I specialize in have experience in building front-end designs and 
              robust back-end systems using modern technologies like React and Node.js to create 
              user-centric applications that are not only functional but also enjoyable to use.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Lifelong Learner</h3>
              <p>
              From mastering the latest web development tools to deepening my expertise in bioanalysis, 
              I am always eager to learn, grow, and take on new challenges.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Critical Thinker</h3>
              <p>
              Whether it's analyzing clinical trial data or debugging complex code, I approach
              every challenge with a thoughtful and methodical mindset to deliver impactful results.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
