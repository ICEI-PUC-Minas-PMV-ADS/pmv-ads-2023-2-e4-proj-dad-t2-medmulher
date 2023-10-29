import "../../styles/Login.css";
import Logo from "../../assets/Logo-rosa.svg";
import { useState } from "react";
import { loginUser } from "../../services/userAPI";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const auth = await loginUser(email, password);

    if (auth && auth.token) {
      window.location.href = '/inicio'; 
      return localStorage.setItem("token", auth.token);
    }

    return "Usuário não encontrado!";
  };

  return (
    <div className="Login">
      <div className="header-login">
        <img className="header-logo" src={Logo} alt="Logo do MedMulher" />
      </div>

      <div className="container-login">
        <div className="input-group-login">
          <div className="title-login">
            <h1>Fazer Login</h1>
          </div>

          <div className="input-box-login">
            <label htmlFor="email">E-mail</label>
            <input
              onChange={(ev) => setEmail(ev.target.value)}
              type="text"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="input-box-login">
            <label htmlFor="password">Senha</label>
            <input
              onChange={(ev) => setPassword(ev.target.value)}
              type="password"
              placeholder="Digite sua senha"
            />
            <Link className="forgot-password-login" to="/redefinicao-de-senha">Recuperar senha</Link>
          </div>

          <Link to="/inicio">
          <button className="create" onClick={login} type="submit">
            Entrar
          </button>
          </Link>

          <div className="line-container-login">
            <div className="line"></div>
            <div className="or-text">ou</div>
            <div className="line"></div>
          </div>

          <Link className="register-login" to="/cadastro-paciente">Cadastrar novo administrador</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;