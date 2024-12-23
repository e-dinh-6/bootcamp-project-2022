import React from "react";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <div>
      <div className={styles.project}>
        <img
          src="images/website_sc.png"
          alt="description"
          className="project-image"
        />
        <div className={styles.projectBox}>
          <p className={styles.projectName}>Personal Website</p>
          <p className={styles.projectDetails}>
            With the Hack4Impact starter pack as my guide, I developed a
            five-page website that demonstrates my skills in web development and
            Git source control. This platform not only showcases my progress in
            website building but also serves as a hub for my projects.
          </p>
        </div>
      </div>

      <div className={styles.project}>
        <a href="https://users.csc.calpoly.edu/~ddang13/Gastronomy%20Galaxy/">
          <img
            src="images/gastronomyGalaxy.png"
            alt="description"
            className="project-image"
          />
        </a>
        <div className={styles.projectBox}>
          <p className={styles.projectName}>Gastronomy Galaxy</p>
          <p className={styles.projectDetails}>
            "Galaxy Gastronomy" is a 2D smoothie simulator that invites players
            to blend delicious smoothies for quirky alien customers in a vibrant
            space setting. Developed collaboratively by Emi Dinh, Danny Dang,
            and Kasey Liu, the game features three engaging levels with
            randomized orders, emphasizing a relaxing single-player experience.
            Inspired by titles like "Overcooked" and "Papa’s Freezeria," it
            combines elements of time management and customer engagement while
            focusing on calm gameplay. Despite facing challenges with game
            mechanics and controls, we successfully implemented core features
            such as blending, cleaning, and distributing smoothies to customers
            .
          </p>
        </div>
      </div>
    </div>
  );
}
