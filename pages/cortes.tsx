import React, { useState } from "react";
import styles from "../Styles/cortes.module.css";
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

  // Lógica para avançar o carrossel
  const avancarCarrossel = () => {
    setIndiceAtual((prev) => (prev + 1) % imagensCarrossel.length);
  };

  // Lógica para voltar o carrossel
  const voltarCarrossel = () => {
    setIndiceAtual((prev) =>
      prev === 0 ? imagensCarrossel.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.containerPagina}>
      <Navbar />

      {/* Imagem de Fundo */}
      <div className={styles.containerImagem}>
        <img
          src="images/01.jpg"
          alt="Imagem de Fundo"
          className={styles.imagemPrincipal}
        />

        {/* Carrossel de Imagens */}
        <div className={styles.boxCarrossel}>
          <h2 className={styles.tituloCarrossel}>Nossos Cortes</h2>

          <div className={styles.containerCarrossel}>
            {/* Botão Esquerdo */}
            <button className={styles.botaoCarrossel} onClick={voltarCarrossel}>
              &#10094;
            </button>

            {/* Imagens do Carrossel */}
            <div className={styles.carrossel}>
              {imagensCarrossel.map((imagem, index) => (
                <img
                  key={index}
                  src={imagem}
                  alt={`Corte ${index + 1}`}
                  className={`${styles.imagemCarrossel} ${
                    index === indiceAtual ? styles.imagemAtiva : ""
                  }`}
                  style={{
                    transform: `translateX(${(index - indiceAtual) * 110}%)`,
                  }}
                />
              ))}
            </div>

            {/* Botão Direito */}
            <button className={styles.botaoCarrossel} onClick={avancarCarrossel}>
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cortes;
