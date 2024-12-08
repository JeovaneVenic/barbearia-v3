import React, { useState, useEffect } from 'react';
import styles from '../Styles/agendamento.module.css';
import Navbar from "../src/app/components/navbar"; 
import "../src/app/Styles/globals.css";

const Agendamento: React.FC = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');  
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [isCadastroCompleto, setIsCadastroCompleto] = useState(false);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('users') || '[]');
    if (usuario.length > 0) {
      setNome(usuario[0].username); 
      setEmail(usuario[0].email); 
      setIsCadastroCompleto(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Dados do agendamento:', { nome, email, data, horario });
  };

  return (
    <div className={styles.containerRolagem}>
      <Navbar />

      <div className={styles.containerImagem}>
        <img src="images/01.jpg" alt="Barbearia" className={styles.imagemPrincipal} />

        <div className={styles.boxAgendamento}>
          <h2 className={styles.tituloAgendamento}>Agende um horário</h2>
          
          {!isCadastroCompleto ? (
            <p className={styles.mensagemAviso}>
              Você precisa se cadastrar antes de agendar um horário.
            </p>
          ) : null}

          <form className={styles.formAgendamento} onSubmit={handleSubmit}>
            <label htmlFor="nome" className={styles.label}>Nome Completo:</label>
            <input 
              type="text" 
              id="nome" 
              name="nome" 
              className={styles.input} 
              value={nome} 
              readOnly 
              disabled={!isCadastroCompleto} 
            />

            <label htmlFor="email" className={styles.label}>E-mail:</label> 
            <input 
              type="email" 
              id="email" 
              name="email" 
              className={styles.input} 
              value={email} 
              readOnly 
              disabled={!isCadastroCompleto} 
            />

            <label htmlFor="data" className={styles.label}>Data:</label>
            <input 
              type="date" 
              id="data" 
              name="data" 
              className={styles.input} 
              value={data} 
              onChange={(e) => setData(e.target.value)} 
              disabled={!isCadastroCompleto} 
            />

            <label htmlFor="horario" className={styles.label}>Horário:</label>
            <select 
              id="horario" 
              name="horario" 
              className={styles.input} 
              value={horario} 
              onChange={(e) => setHorario(e.target.value)}
              disabled={!isCadastroCompleto} 
            >
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
            </select>

            <button type="submit" className={styles.botaoAgendar} disabled={!isCadastroCompleto}>Agendar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Agendamento;
