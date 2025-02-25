import React from "react";

import styles from "./about.module.css"
import Cursor from "E:\\portfolio\\portfolio\\assets\\about\\cursorIcon.png"
import Server from "E:\\portfolio\\portfolio\\assets\\about\\serverIcon.png"
import AboutImg from "E:\\portfolio\\portfolio\\assets\\about\\aboutImage.png"
import Machine from "E:\\portfolio\\portfolio\\assets\\about\\serverIcon.png"

export const About = () => {
    return (
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src={AboutImg}
            alt="Myself Working"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={Cursor} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building responsive
                  and optimized sites
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={Server} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimised back-end systems
                  and APIs
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={Machine} alt="UI icon" />
              <div className={styles.aboutItemText}>
                <h3>ML Practitioner</h3>
                <p>
                I build efficient and scalable machine learning models 
                that turn data into actionable insights.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  };