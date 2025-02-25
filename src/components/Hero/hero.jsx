import React from "react";

import styles from "./hero.module.css";
import HeroImg from "E:\\portfolio\\portfolio\\assets\\hero\\heroImage.png"

export const Hero= () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am D.Bharath</h1>
                <p className={styles.description}>
                I'm a student with expertise in the MERN stack, 
                machine learning, and competitive programming. 
                Reach out if you'd like to learn more!
                </p>
                <a href="mailto:bharath622005@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img src={HeroImg}
            alt="Hero Image of Me"
            className={styles.heroImage}
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur} />
        </section>
    )
}


