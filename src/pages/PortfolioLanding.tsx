import React from 'react';
import Contacts from "../components/Contacts/Contacts";
import Education from "../components/Education/Education";
import Hero from "../components/Hero/Hero";
import Project from "../components/Project/Project";
import Skills from "../components/Skills/Skills";
import MainLayout from "../layouts/MainLayout/MainLayout";
import styles from './PortfolioLanding.module.scss'; // SCSS file for styles

const PortfolioLanding: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div id="hero">
            <Hero />
          </div>
          <div id="projects">
            <Project />
          </div>
          <div id="education">
            <Education />
          </div>
        </div>
        <aside className={styles.sidebar}>
          <div id="skills">
            <Skills />
          </div>
          <div id="contacts">
            <Contacts />
          </div>
        </aside>
      </div>
    </MainLayout>
  );
};

export default PortfolioLanding;
