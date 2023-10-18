import "../../styles/Login.css";
import Logo from "../../assets/Logo-rosa.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const log = async () => {
    const auth = await getUsers();
  };

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
            <input
              onChange={(ev) => setEmail(ev.target.value)}
              type="text"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="input-box">
            <label htmlFor="password">Senha</label>
            <input
              onChange={(ev) => setPassword(ev.target.value)}
              type="password"
              placeholder="Digite sua senha"
            />
            <a className="forgot-password" href="#">
              Esqueceu sua senha?
            </a>
          </div>

          <button onClick={log} type="submit">
            Entrar
          </button>

          <div className="line-container">
            <div className="line"></div>
            <div className="or-text">ou</div>
            <div className="line"></div>
          </div>

          <div className="register">
            <span>
              Ainda não tem conta? Faça o seu <a href="#">cadastro</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
