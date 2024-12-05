import React from 'react';
import Link from 'next/link';
import estilos from '../Styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
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
        <button>Entrar / Cadastre-se</button>
      </div>
    </nav>
  );
};

export default Navbar;
