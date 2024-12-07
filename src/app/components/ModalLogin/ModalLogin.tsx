import React, { useState } from 'react';
import estilos from '../../Styles/ModalLogin.module.css';

interface ModalLoginProps {
  isOpen: boolean; // Indica se o modal está aberto
  onClose: () => void; // Função para fechar o modal
  isCadastro: boolean; // Indica se está na tela de cadastro
  switchToCadastro: () => void; // Alterna para o formulário de cadastro
  switchToLogin: () => void; // Alterna para o formulário de login
}

const ModalLogin: React.FC<ModalLoginProps> = ({
  isOpen,
  onClose,
  isCadastro,
  switchToCadastro,
  switchToLogin,
}) => {
  const [emRecuperacao, setEmRecuperacao] = useState(false); // Define se está na tela de recuperação de senha
  const [mensagem, setMensagem] = useState(''); // Mensagem de feedback para o usuário

  const aoClicarFora = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const alternarParaRecuperacao = () => {
    setEmRecuperacao(true);
    setMensagem(''); // Limpa mensagem ao alternar para recuperação de senha
  };

  const alternarParaLogin = () => {
    setEmRecuperacao(false);
    setMensagem(''); // Limpa mensagem ao retornar para o login
  };

  const enviarFormulario = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensagem('Se um e-mail válido foi inserido, você receberá instruções de recuperação de senha.');
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
            <form>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required />

              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required />

              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" name="senha" placeholder="********" required />

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
            <form>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required />

              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" name="senha" placeholder="********" required />

              <div className={estilos.containerLembrar}>
                <input type="checkbox" id="lembrar" name="lembrar" />
                <label htmlFor="lembrar">Lembrar de mim</label>
              </div>

              <button type="submit" className={estilos.botaoEntrar}>Entrar</button>
              <div className={estilos.esqueceuSenha}>
                <button onClick={alternarParaRecuperacao} className={estilos.linkTrocaModal}>Esqueceu a senha?</button>
              </div>
            </form>
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
