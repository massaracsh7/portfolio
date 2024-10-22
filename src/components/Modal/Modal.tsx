import { Project } from '../../types';
import styles from './Modal.module.scss';


interface ModalProps {
  project: Project;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  return (
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
        <p className={styles.modal__description}>{project.details}</p>
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
};

export default Modal;
