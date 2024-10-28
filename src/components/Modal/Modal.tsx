import { Project } from '../../types';
import styles from './Modal.module.scss';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiWebpack, SiTypescript, SiSass, SiRedux, SiVite, SiJest } from 'react-icons/si';

const techIcons = {
  HTML5: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  SCSS: <SiSass />,
  JavaScript: <FaJs />,
  Webpack: <SiWebpack />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  Redux: <SiRedux />,
  Git: <FaGitAlt />,
  Vite: <SiVite />,
  Jest: <SiJest />,
} as const;

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => (
  <div className={styles.modal}>
    <div className={styles.modal__content}>
      <button onClick={onClose} className={styles.modal__close}>
        &times;
      </button>
      <h2 className={styles.modal__title}>{project.title}</h2>
      <img
        src={new URL(`../../assets/images/${project.image}?w=800&format=webp`, import.meta.url).href}
        alt={project.title}
        className={styles.modal__image}
      />
      <p className={styles.modal__description}>{project.description}</p>
      <p className={styles.modal__details}>
        <span>Technologies:</span>
        <ul className={styles.modal__techList}>
          {project.details.map((tech, index) => (
            <li key={index} className={styles.modal__techItem}>
              <span className={styles.modal__techIcon}>{techIcons[tech]}</span>
              {tech}
            </li>
          ))}
        </ul>
      </p>
      <div className={styles.modal__links}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.modal__link}>
          GitHub
        </a>
        <a href={project.deploy} target="_blank" rel="noopener noreferrer" className={styles.modal__link}>
          Live Demo
        </a>
      </div>
    </div>
    <div className={styles.modal__backdrop} onClick={onClose}></div>
  </div>
);

export default Modal;
