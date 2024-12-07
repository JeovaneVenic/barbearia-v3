import React, { useState } from 'react';
import estilos from '../../Styles/RecuperarSenha.module.css';

interface RecuperarSenhaProps {
  isAberto: boolean; // Indica se o modal está aberto
  aoFechar: () => void; // Função para fechar o modal
}

const RecuperarSenha: React.FC<RecuperarSenhaProps> = ({ isAberto, aoFechar }) => {
  const [email, setEmail] = useState(''); // Estado para armazenar o e-mail inserido
  const [mensagem, setMensagem] = useState(''); // Estado para exibir mensagens ao usuário

  // Função chamada ao enviar o formulário
  const aoEnviarFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    // Simulação de envio da solicitação de recuperação de senha
    setMensagem('Se um e-mail válido foi inserido, você receberá instruções de recuperação de senha.');
  };

  // Se o modal não estiver aberto, não renderiza nada
  if (!isAberto) return null;

  return (
    <div className={estilos.sobreposicaoModal} onClick={aoFechar}>
      {/* Conteúdo do modal */}
      <div className={estilos.conteudoModal} onClick={(e) => e.stopPropagation()}>
        <button className={estilos.botaoFechar} onClick={aoFechar}>
          &times;
        </button>
        <h2>Recuperar Senha</h2>
        <form onSubmit={aoEnviarFormulario}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do e-mail
            placeholder="seuemail@exemplo.com"
            required
          />
          <button type="submit" className={estilos.botaoEnviar}>Enviar</button>
        </form>
        {/* Exibe a mensagem, se tiver */}
        {mensagem && <p className={estilos.mensagem}>{mensagem}</p>}
      </div>
    </div>
  );
};

export default RecuperarSenha;
