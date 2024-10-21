import React, { useEffect, useState } from 'react';
import styles from './Project.module.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  deploy: string;
}

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <section className={styles.projects} id="projects">
      <h2>My Projects</h2>
      <ul className={styles.projects__list}>
        {projects.map((project) => (
          <li key={project.id} className={styles.projects__card}>
            <img
              src={new URL(`../../assets/images/${project.image}?w=400&format=webp`, import.meta.url).href}
              alt={project.title}
              className={styles.projects__image}
            />
            <h3 className={styles.projects__title}>{project.title}</h3>
            <p className={styles.projects__text}>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projects__link}>
              GitHub
            </a>
            <a href={project.deploy} target="_blank" rel="noopener noreferrer" className={styles.projects__link}>
              Live Demo
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
