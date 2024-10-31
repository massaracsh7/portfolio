import React, { ReactNode } from 'react';
import styles from './MainLayout.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
