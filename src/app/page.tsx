import React from 'react';
import styles from './page.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.imageContainer}>
        <img src="01.jpg" alt="Barbearia" className={styles.image} />
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.centeredText}>
          <div className={styles.mainText}>BARBEARIA DO SIRI</div>
          <div className={styles.subText}>Desperte a sua elegância com estilo!</div>
          <div className={styles.subText}>Conheça um pouco siri.</div>
          <a href="#" className={styles.button}>Sobre</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
