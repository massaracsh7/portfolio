import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li>
            <a href="#hero" aria-label="About me">Who am I?</a>
          </li>
          <li>
            <a href="#projects" aria-label="My projects">What I've Built</a>
          </li>
          <li>
            <a href="#contacts" aria-label="Contact me">Let's Connect</a>
          </li>
          <li>
            <a href="#skills" aria-label="My skills">My Toolbox</a>
          </li>
          <li>
            <a href="#education" aria-label="My education">My Learning Journey</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
