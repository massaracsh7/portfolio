import React from 'react';
import { FaNodeJs, FaReact, FaLaptopCode, FaBrain, FaUniversity } from 'react-icons/fa';
import { SiJavascript, SiHtml5 } from 'react-icons/si';
import styles from './Education.module.scss';

const Education: React.FC = () => {
  const educationList = [
    { title: 'Node.js (2024 Q1)', institution: 'RsSchool', icon: <FaNodeJs /> },
    { title: 'React (2023 Q4)', institution: 'RsSchool', icon: <FaReact /> },
    { title: 'JavaScript/Front-end (2023 Q1)', institution: 'RsSchool', icon: <SiJavascript /> },
    { title: 'JS/FE Pre-School (2022 Q4)', institution: 'RsSchool', icon: <SiHtml5 /> },
    { title: 'Responsive Web Design', institution: 'freeCodeCamp', icon: <FaLaptopCode /> },
    { title: 'ABA Therapist Education Program', institution: 'Applied Behavior Analysis', icon: <FaBrain /> },
    { title: 'Institute of Business and Management Technologies', institution: 'Belarusian State University', icon: <FaUniversity /> },
    { title: 'Faculty of History', institution: 'Belarusian State University', icon: <FaUniversity /> },
  ];

  return (
    <section className={styles.education} id="education">
      <h2 className={styles.education__title}>MY LEARNING JOURNEY</h2>
      <ul className={styles.education__list}>
        {educationList.map((item, index) => (
          <li key={index} className={styles.education__item}>
            <span className={styles.education__icon}>{item.icon}</span>
            <div className={styles.education__content}>
              <h3 className={styles.education__course}>{item.title}</h3>
              <p className={styles.education__institution}>{item.institution}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
