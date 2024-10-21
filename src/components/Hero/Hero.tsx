import React from 'react';
import styles from './Hero.module.scss';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>My name is Katsiaryna, and I am a Frontend Developer who enjoys building nice and user-friendly websites. With a background in history and additional education in web design programming, I have transitioned from content management to tutoring, where I have honed my skills in communication and problem-solving. I enjoy tackling challenges, continuously improving my technical skills, and staying curious about the latest developments in technology.</p>
      <button className={styles.ctaButton}>View My Work</button>
    </section>
  );
};

export default HeroSection;
