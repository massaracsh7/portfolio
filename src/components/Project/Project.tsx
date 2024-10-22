import React, { useEffect, useState } from 'react';
import styles from './Project.module.scss';
import { Project } from '../../types';
import Modal from '../Modal/Modal';

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // Для модального окна

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project); 
  };

  const closeModal = () => {
    setSelectedProject(null); 
  };

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.projects__title}>WHAT I'VE BUILT</h2>
      <ul className={styles.projects__list}>
        {projects.map((project) => (
          <li key={project.id} className={styles.projects__card} onClick={() => handleCardClick(project)}>
            <img
              src={new URL(`../../assets/images/${project.image}?w=500&format=webp`, import.meta.url).href}
              alt={project.title}
              className={styles.projects__image}
            />
            <h3 className={styles.projects__name}>{project.title}</h3>
          </li>
        ))}
      </ul>

      {/* Модальное окно */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default ProjectsSection;