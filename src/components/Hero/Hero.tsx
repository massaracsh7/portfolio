import React from 'react';
import styles from './Hero.module.scss';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>I am a Frontend Developer with a passion for creating beautiful and functional web applications.</p>
      <button className={styles.ctaButton}>View My Work</button>
    </section>
  );
};

export default HeroSection;
