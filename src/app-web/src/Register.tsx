import './Register.css';
import Logo from "./assets/Logo-rosa.svg"

const Register = () => {
  return (
    <div className="Register">
      <div className="header">
        <img className="header-logo" src={Logo} alt="Logo do MedMulher" />
      </div>

      <div className="container">
        <div className="input-group">
          <div className="title">
            <h1>Cadastre-se</h1>
          </div>

          <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder="Digite seu melhor e-mail" />
          </div>

          <div className="input-box">
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Crie uma senha" />        
          </div>

          <div className="input-box">
            <label htmlFor="password">Confirmar Senha</label>
            <input type="password" placeholder="Digite a senha novamente" />
            <br></br> 
          </div>

          <div className="input-box">
            <label htmlFor="password">Nome Completo</label>
            <input type="password" placeholder="Digite seu nome" />
          </div>

          <div className="input-box">
            <label htmlFor="password">Data de Nascimento</label>
            <input type="password" placeholder="DD/MM/AAAA" />
          </div>

          <div className="input-box">
            <label htmlFor="password">CPF</label>
            <input type="password" placeholder="000.000.000-00" />
          </div>

          <button type="submit">Cadastrar</button>

          </div>
        </div>
      </div>
  );
};

export default Register;