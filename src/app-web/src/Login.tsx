import './Login.css';
import Logo from "./assets/Logo-rosa.svg"

const Login = () => {
  return (
    <div className="Login">

      <div className="header">
        <img className="header-logo" src={Logo} alt="Logo do MedMulher" />
      </div>

      <div className="container">
        <div className="input-group">
          <div className="title">
            <h1>Fazer Login</h1>
          </div>

          <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder="Digite seu e-mail" />
          </div>

          <div className="input-box">
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite sua senha" />
            <a className="forgot-password" href="#">Esqueceu sua senha?</a>
          </div>

          <button type="submit">Entrar</button>

          <div className="line-container">
            <div className="line"></div>
            <div className="or-text">ou</div>
            <div className="line"></div>
          </div>

          <div className="register">
            <span>Ainda não tem conta? Faça o seu <a href="#">cadastro</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;