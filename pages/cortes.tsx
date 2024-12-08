import React, { useState } from 'react';
import styles from '../Styles/cortes.module.css';
import Navbar from "../src/app/components/navbar";
import "../src/app/Styles/globals.css";

const Cortes: React.FC = () => {
  const imagensCarrossel = [
    "images/degrade.jpg",
    "images/americano.jpg",
    "images/moicano.jpg",
    "images/social.jpg",
    "images/degradeR.jpg",
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  const avancarCarrossel = () => {
    setIndiceAtual((prevIndice) => (prevIndice + 1) % imagensCarrossel.length);
  };

  const voltarCarrossel = () => {
    setIndiceAtual((prevIndice) =>
      prevIndice === 0 ? imagensCarrossel.length - 1 : prevIndice - 1
    );
  };

  return (
    <div className={styles.containerRolagem}>
      <Navbar />

      {/* Imagem de fundo */}
      <div className={styles.containerImagem}>
        <img
          src="images/01.jpg"
          alt="Barbearia"
          className={styles.imagemPrincipal}
        />

        {/* Carrossel sobreposto */}
        <div className={styles.boxCarrossel}>
          <h2 className={styles.tituloCarrossel}>Nossos Cortes</h2>

          <div className={styles.carrossel}>
            <button
              onClick={voltarCarrossel}
              className={styles.botaoCarrossel}
            >
              &#10094;
            </button>

            <img
              src={imagensCarrossel[indiceAtual]}
              alt={`Corte ${indiceAtual + 1}`}
              className={styles.imagemCarrossel}
            />

            <button
              onClick={avancarCarrossel}
              className={styles.botaoCarrossel}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cortes;
