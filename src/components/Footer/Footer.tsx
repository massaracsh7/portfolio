import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p className={styles.footer__copy}>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className={styles.footer__list}>
          <a className={styles.footer__link} href="https://github.com/massaracsh7" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className={styles.footer__link} href="mailto:fatum7@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
          <a className={styles.footer__link} href="https://discordapp.com/users/katsiaryna2284" target="_blank" rel="noopener noreferrer">Discord</a>
          <a className={styles.footer__link} href="https://t.me/massaracsh" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

