import React, { useEffect, useState } from 'react';
import styles from './Project.module.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
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
      <ul className={styles.projects_list}>
        {projects.map((project) => (
          <li key={project.id} className={styles.projects__card}>
            <img
              src={`/images/${project.image}?w=400&h=300&format=webp`}
              alt={project.title}
              className={styles.projects__image}
            />
            <h3 className={styles.projects__title}>{project.title}</h3>
            <p className={styles.projects__text}>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
