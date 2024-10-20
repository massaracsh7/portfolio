import React from 'react';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
  const skills = ['JavaScript', 'React', 'TypeScript', 'Redux', 'SCSS'];

  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.skills__title}>My Skills</h2>
      <ul className={styles.skills__list}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skills__item}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
