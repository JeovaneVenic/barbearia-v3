import React from 'react';
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
  if (!isOpen) return null;

  const fecharModalAoClicarFora = (evento: React.MouseEvent<HTMLDivElement>) => {
    if (evento.target === evento.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={estilos.modalOverlay} onClick={fecharModalAoClicarFora}>
      <div className={estilos.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={estilos.closeButton} onClick={onClose}>
          &times;
        </button>
        {isCadastro ? (
          <>
            <h2>Crie sua conta</h2>
            <form>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required />

              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required />

              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" name="senha" placeholder="********" required />

              <button type="submit" className={estilos.loginButton}>Cadastrar</button>
            </form>
            <div className={estilos.notRegistered}>
              <p>
                Já tem uma conta? 
                <button onClick={switchToLogin} className={estilos.switchModalLink}>
                  Entrar aqui
                </button>
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className={estilos.centralizarTitulo}>Entrar na plataforma</h2>
            <form>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required />

              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" name="senha" placeholder="********" required />

              <div className={estilos.rememberMeContainer}>
                <input type="checkbox" id="lembrar" name="lembrar" />
                <label htmlFor="lembrar">Lembrar de mim</label>
              </div>

              <button type="submit" className={estilos.loginButton}>Entrar</button>
              <div className={estilos.forgotPassword}>
                <a href="#">Esqueceu a senha?</a>
              </div>
            </form>
            <div className={estilos.notRegistered}>
              <p>
                Não tem uma conta? 
                <button onClick={switchToCadastro} className={estilos.switchModalLink}>
                  Cadastre-se aqui
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalLogin;
