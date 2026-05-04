import { useState } from "react";
import './style.css';

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !email || !senha) {
      setMensagem("");
      return;
    }

    setMensagem(`Bem-vindo, ${nome}! Email: ${email} Senha: ${senha}`);
  }

  return (
    <div>
      <h2>Cadastro</h2>

      <form onSubmit={handleSubmit} id="box">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <br /><br />

        <button type="submit">Enviar</button>
      </form>

      <p>{mensagem}</p>
    </div>
  );
}


function Exemplo(){
  return (
    <div>
      <Button>
      Safada
      </Button>

      <h1>
      Gostosa delicia
      </h1>

      <p>(1 or 12)</p>

      <Button> 
        hold me
       </Button>
       </div>
      );
}

