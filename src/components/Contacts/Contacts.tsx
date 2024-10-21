import React from 'react';
import { FaEnvelope, FaDiscord, FaGithub } from 'react-icons/fa'; 
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
      icon: <FaDiscord className={styles.contacts__icon} />, // Add icon
    },
    {
      label: 'GitHub',
      value: 'massaracsh7',
      href: 'https://github.com/massaracsh7',
      icon: <FaGithub className={styles.contacts__icon} />, // Add icon
    },
  ];

  return (
    <section className={styles.contacts} id="contacts">
      <h2 className={styles.contacts__title}>Contact Me</h2>
      <ul className={styles.contacts__list}>
        {contacts.map((contact, index) => (
          <li key={index} className={styles.contacts__item}>
            {contact.icon} {/* Display the icon */}
            <span className={styles.contacts__label}>{contact.label}:</span>
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
