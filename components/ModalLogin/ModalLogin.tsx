import React, { useState } from 'react';
import estilos from '../../Styles/ModalLogin.module.css';

interface ModalLoginProps {
  isOpen: boolean;
  onClose: () => void;
  isCadastro: boolean;
  switchToCadastro: () => void;
  switchToLogin: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = ({
  isOpen,
  onClose,
  isCadastro,
  switchToCadastro,
  switchToLogin,
}) => {
  const [emRecuperacao, setEmRecuperacao] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const aoClicarFora = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const alternarParaRecuperacao = () => {
    setEmRecuperacao(true);
    setMensagem('');
  };

  const alternarParaLogin = () => {
    setEmRecuperacao(false);
    setMensagem('');
  };

  const handleCadastro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    setMensagem('Usuário cadastrado com sucesso!');
    onClose(); 
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);
    if (user) {
      setMensagem('Login bem-sucedido!');
      onClose(); if(1 == 1)
      alert('Seja bem-vindo!');
    } else {
      setMensagem('Nome de usuário ou senha incorretos.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={estilos.sobreposicaoModal} onClick={aoClicarFora}>
      <div className={estilos.conteudoModal} onClick={(e) => e.stopPropagation()}>
        <button className={estilos.botaoFechar} onClick={onClose}>
          &times;
        </button>
        <img src="/images/logo.png" alt="Logo" className={estilos.logoModal} />

        {emRecuperacao ? (
          <>
            <h2 className={estilos.tituloModal}>Recuperar Senha</h2>
            <form onSubmit={enviarFormulario}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required />
              <button type="submit" className={estilos.botaoEntrar}>Enviar</button>
            </form>
            {mensagem && <p className={estilos.mensagem}>{mensagem}</p>}
            <div className={estilos.naoRegistrado}>
              <p>Voltar para o <button onClick={alternarParaLogin} className={estilos.linkTrocaModal}>Login</button></p>
            </div>
          </>
        ) : isCadastro ? (
          <>
            <h2 className={estilos.tituloModal}>Crie sua conta</h2>
            <form onSubmit={handleCadastro}>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome completo"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className={estilos.botaoEntrar}>Cadastrar</button>
            </form>
            <div className={estilos.naoRegistrado}>
              <p>Já tem uma conta? <button onClick={switchToLogin} className={estilos.linkTrocaModal}>Entrar aqui</button></p>
            </div>
          </>
        ) : (
          <>
            <h1 className={estilos.tituloModal}>Bem-vindo de volta</h1>
            <small className={estilos.subtituloModal}>Entre para agendar um horário</small>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seuemail@exemplo.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className={estilos.containerLembrar}>
                <input type="checkbox" id="lembrar" name="lembrar" />
                <label htmlFor="lembrar">Lembrar de mim</label>
              </div>

              <button type="submit" className={estilos.botaoEntrar}>Entrar</button>
              <div className={estilos.esqueceuSenha}>
                <button onClick={alternarParaRecuperacao} className={estilos.linkTrocaModal}>Esqueceu a senha?</button>
              </div>
            </form>
            {mensagem && <p className={estilos.mensagem}>{mensagem}</p>}
            <div className={estilos.naoRegistrado}>
              <p>Não tem uma conta? <button onClick={switchToCadastro} className={estilos.linkTrocaModal}>Cadastre-se aqui</button></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalLogin;
