import React from 'react';
import Image from 'next/image';
import styles from '../Styles/Rodape.module.css';

const Rodape: React.FC = () => {
  return (
    <footer className={styles.rodape}>
      <Image src="/logoblack.png" alt="Logo" className={styles.logo} width={50} height={50} />
      <p className={styles.texto}>
        &copy; 2024 MonkeyBits, Todos os direitos reservados.
      </p>
      <p className={styles.texto}>
        MonkeyBits é uma marca registrada e marca de serviço da VenicCode.
      </p>
    </footer>
  );
};

export default Rodape;