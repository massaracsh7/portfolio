import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>My Portfolio</h1>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li>
            <a href="#hero" aria-label="About me">About me</a>
          </li>
          <li>
            <a href="#projects" aria-label="My projects">Projects</a>
          </li>
          <li>
            <a href="#contacts" aria-label="Contact me">Contact</a>
          </li>
          <li>
            <a href="#skills" aria-label="My skills">Skills</a>
          </li>
          <li>
            <a href="#education" aria-label="My education">Education</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
