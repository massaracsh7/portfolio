import React from 'react';
import styles from './Contacts.module.scss';

const Contacts: React.FC = () => {
  const contacts = [
    { label: 'Email', value: 'fatum7@egmail.com', href: 'fatum7@egmail.com' },
    { label: 'Discord', value: 'Katsiaryna2284', href: 'https://discordapp.com/users/katsiaryna2284' },
    { label: 'GitHub', value: 'massaracsh7', href: 'https://github.com/massaracsh7' },
  ];

  return (
    <section className={styles.contacts} id="contacts">
      <h2 className={styles.contacts__title}>Contact Me</h2>
      <ul className={styles.contacts__list}>
        {contacts.map((contact, index) => (
          <li key={index} className={styles.contacts__item}>
            {contact.label}: <a href={contact.href}>{contact.value}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contacts;
