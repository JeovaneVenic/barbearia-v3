"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ModalLogin from '../components/ModalLogin/ModalLogin';
import estilos from '../Styles/Navbar.module.css';

const BarraDeNavegacao: React.FC = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);
  const mostrarTelaCadastro = () => setMostrarCadastro(true);
  const mostrarTelaLogin = () => setMostrarCadastro(false);

  return (
    <div>
      <nav className={estilos.navbar}>
        <div className={estilos.logo}>
          <img src="/logo.png" alt="Logo" className={estilos.logoImagem} />
        </div>
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
        <div className={estilos.contato}>
          <button className={estilos.botaoContato} onClick={abrirModal}>
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

export default BarraDeNavegacao;
