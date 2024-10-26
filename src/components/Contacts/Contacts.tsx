import React from 'react';
import { FaEnvelope, FaDiscord, FaGithub, FaTelegram } from 'react-icons/fa';
import styles from './Contacts.module.scss';

const Contacts: React.FC = () => {
  const contacts = [
    {
      label: 'Email',
      value: 'fatum7@gmail.com',
      href: 'mailto:fatum7@gmail.com',
      icon: <FaEnvelope className={styles.contacts__icon} />,
    },
    {
      label: 'Discord',
      value: 'Katsiaryna2284',
      href: 'https://discordapp.com/users/katsiaryna2284',
      icon: <FaDiscord className={styles.contacts__icon} />,
    },
    {
      label: 'GitHub',
      value: 'massaracsh7',
      href: 'https://github.com/massaracsh7',
      icon: <FaGithub className={styles.contacts__icon} />,
    },
    {
      label: 'Telegram',
      value: 'massaracsh',
      href: 'https://t.me/massaracsh',
      icon: <FaTelegram className={styles.contacts__icon} />,
    },
  ];

  return (
    <section className={styles.contacts} id="contacts">
      <h2 className={styles.contacts__title}>LET'S CONNECT</h2>
      <ul className={styles.contacts__list}>
        {contacts.map((contact, index) => (
          <li key={index} className={styles.contacts__item}>
            {contact.icon}
            <span className={styles.contacts__label}>{contact.label}: &nbsp; </span>
            <a href={contact.href} className={styles.contacts__link}>
              {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contacts;
