import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Бургер-меню с тремя линиями */}
      <div className={styles.burger} onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`${styles.burger__line} ${isMenuOpen ? styles.burger__line_open : ''}`} />
        <span className={`${styles.burger__line} ${isMenuOpen ? styles.burger__line_open : ''}`} />
        <span className={`${styles.burger__line} ${isMenuOpen ? styles.burger__line_open : ''}`} />
      </div>

      {/* Навигация, отображающаяся в зависимости от состояния isMenuOpen */}
      <nav className={`${styles.navigation} ${isMenuOpen ? styles.navigation_open : ''}`}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <a href="#hero" className={styles.navigation__link} aria-label="About me">Who am I?</a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#projects" className={styles.navigation__link} aria-label="My projects">What I've Built</a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#contacts" className={styles.navigation__link} aria-label="Contact me">Let's Connect</a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#skills" className={styles.navigation__link} aria-label="My skills">My Toolbox</a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#education" className={styles.navigation__link} aria-label="My education">My Learning Journey</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
