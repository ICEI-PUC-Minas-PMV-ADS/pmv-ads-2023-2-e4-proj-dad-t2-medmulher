import "../../styles/RedefinePassword.css";
import Logo from "../../assets/Logo-rosa.svg";

const RedefinePassword = () => {
  return (
    <div className="RedefinePassword">
      <div className="header">
        <img className="header-logo" src={Logo} alt="Logo do MedMulher" />
      </div>

      <div className="container">
        <div className="input-group">
          <div className="title">
            <h1>Recuperar Senha</h1>
          </div>

          <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder="Digite seu e-mail" />
            <br></br>
          </div>

          <div className="input-box">
            <label htmlFor="password">Nova senha</label>
            <input type="password" placeholder="Crie uma nova senha" />
          </div>

          <div className="input-box">
            <label htmlFor="password">Confirmar senha</label>
            <input type="password" placeholder="Digite a nova senha novamente" />
          </div>

          <button className="create" type="submit">Recuperar senha</button>

        </div>
      </div>
    </div>
  );
};

export default RedefinePassword;