import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/massaracsh7" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:fatum7@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
          <a href="https://discordapp.com/users/katsiaryna2284" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://t.me/massaracsh" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

