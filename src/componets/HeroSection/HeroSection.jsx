import React from 'react';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <img className={styles.photoGrid} src="/photo-grid.png" alt="Photo Grid" />
      <h1 className={styles.heroHeader}>Online Experiences</h1>
      <p className={styles.heroText}>
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  );
};
