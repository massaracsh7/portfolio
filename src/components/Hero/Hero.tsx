import React from 'react';
import styles from './Hero.module.scss';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <h2 className={styles.hero__title}> I am a Frontend Developer</h2>
      <p className={styles.hero__text}>who enjoys building nice and user-friendly websites.I enjoy tackling challenges, continuously improving my technical skills, and staying curious about the latest developments in technology.</p>
    </section>
  );
};

export default HeroSection;
