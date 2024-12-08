"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ModalLogin from '../components/ModalLogin/ModalLogin'; // Certifique-se de ajustar o caminho conforme necessário
import mobileEstilos from '../Styles/NavbarMobile.module.css';

interface BarraDeNavegacaoMobileProps {
  fecharMenuMobile: () => void;
}

const BarraDeNavegacaoMobile: React.FC<BarraDeNavegacaoMobileProps> = ({ fecharMenuMobile }) => {
  const [modalAberto, setModalAberto] = useState(false);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);
  const mostrarTelaCadastro = () => setMostrarCadastro(true);
  const mostrarTelaLogin = () => setMostrarCadastro(false);

  return (
    <div>
      <nav className={mobileEstilos.navbarMobile}>
        <button className={mobileEstilos.botaoFechar} onClick={fecharMenuMobile}>X</button>
        <ul className={mobileEstilos.menuMobile}>
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
        <div className={mobileEstilos.contatoMobile}>
          <button className={mobileEstilos.botaoContato} onClick={abrirModal}>
          Entrar / Cadastre-se
          </button>
        </div>
      </nav>

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

export default BarraDeNavegacaoMobile;
