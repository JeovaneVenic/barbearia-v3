import React from 'react';
import styles from './page.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.containerRolagem}>
      <div className={styles.containerImagem}>
        <img src="images/01.jpg" alt="Barbearia" className={styles.imagemPrincipal} />
        <div className={styles.containerLogo}>
          <img src="images/logo.png" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.textoCentralizado}>
          <div className={styles.textoPrincipal}>BARBEARIA DO SIRI</div>
          <div className={styles.subTexto}>Desperte a sua elegância com estilo!</div>
          <div className={styles.subTexto}>Conheça um pouco siri.</div>
          <a href="#" className={styles.botao}>Sobre</a>
        </div>
      </div>
      <div className={styles.novaTela}>
        <h2 className={styles.tituloImagem}>Conheça os nossos serviços</h2>
        <img src="images/36.png" alt="Imagem 36" className={styles.imagem} />
        <div className={styles.containerQuadrados}>
          <div className={styles.containerItem}>
            <img src="images/cortes.png" alt="Cortes" className={styles.imagemQuadrado} />
            <h3 className={styles.nome}>CORTES</h3>
            <div className={styles.quadrado}>
              <p className={styles.textoQuadrado}>Cortes que combinam estilo e personalidade, do clássico ao moderno!</p>
            </div>
          </div>
          <div className={styles.containerItem}>
            <img src="images/barba.png" alt="Barba" className={styles.imagemQuadrado} />
            <h3 className={styles.nome}>BARBA</h3>
            <div className={styles.quadrado}>
              <p className={styles.textoQuadrado}>Aparo e modelagem para uma barba impecável.</p>
            </div>
          </div>
          <div className={styles.containerItem}>
            <img src="images/tratamento.png" alt="Tratamento Capilar" className={styles.imagemQuadrado} />
            <h3 className={styles.nome}>TRATAMENTO CAPILAR</h3>
            <div className={styles.quadrado}>
              <p className={styles.textoQuadrado}>Hidratação e cuidados especiais para um cabelo saudável.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.informacoesMobile}>
        <p>Cortes que combinam estilo e personalidade, do clássico ao moderno!</p>
        <p>Aparo e modelagem para uma barba impecável.</p>
        <p>Hidratação e cuidados especiais para um cabelo saudável.</p>
      </div>
    </div>
  );
};

export default HomePage;
