"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ModalLogin from '../components/ModalLogin/ModalLogin'; 
import estilos from '../Styles/Navbar.module.css';
import BarraDeNavegacaoMobile from '../components/NavbarMobile'; 

const BarraDeNavegacao: React.FC = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);
  const mostrarTelaCadastro = () => setMostrarCadastro(true);
  const mostrarTelaLogin = () => setMostrarCadastro(false);
  const alternarMenuMobile = () => setMenuMobileAberto(!menuMobileAberto);
  const fecharMenuMobile = () => setMenuMobileAberto(false);

  return (
    <div>
      <nav className={estilos.navbar}>
        <div className={estilos.logoContainer}>
          <Link href="/" passHref>
            <div className={estilos.logo}>
              <img src="images/logo.png" alt="Logo" className={estilos.logoImagem} />
            </div>
          </Link>
        </div>
        <div className={estilos.menuContainer}>
          <ul className={estilos.menu}>
            <li>
              <Link href="/agendamento">Agendamento</Link>
            </li>
            <li>
              <Link href="/cortes">Cortes</Link>
            </li>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/localizacao">Localização</Link>
            </li>
          </ul>
        </div>
        <div className={estilos.contatoContainer}>
          <div className={estilos.contato}>
            <button className={estilos.botaoContato} onClick={abrirModal}>
              Entrar
            </button>
          </div>
          <div className={estilos.menuBtn} onClick={alternarMenuMobile}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {menuMobileAberto && <BarraDeNavegacaoMobile fecharMenuMobile={fecharMenuMobile} />}
      
      <ModalLogin 
        isOpen={modalAberto} 
        onClose={fecharModal} 
        isCadastro={mostrarCadastro}
        switchToCadastro={mostrarTelaCadastro}
        switchToLogin={mostrarTelaLogin}
      />
    </div>
  );
};

export default BarraDeNavegacao;
