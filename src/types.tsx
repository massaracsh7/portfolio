type Technology = 'HTML5' | 'CSS' | 'SCSS' | 'JavaScript' | 'Webpack' | 'TypeScript' | 'React' | 'Git' | 'Vite' | 'Jest';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  deploy: string;
  details: Technology[];
}