import React from 'react';
import { FaJs, FaReact, FaFigma, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiSass, SiAdobephotoshop } from 'react-icons/si';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'SCSS', icon: <SiSass /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop /> },
  ];

  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.skills__title}>My Skills</h2>
      <ul className={styles.skills__list}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skills__item}>
            <span className={styles.skills__icon}>{skill.icon}</span>
            <span className={styles.skills__name}>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
