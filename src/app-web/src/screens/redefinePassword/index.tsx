import "../../styles/RedefinePassword.css";
import Logo from "../../assets/Logo-rosa.svg";
import { resetPassword } from "../../services/userAPI";
import { useState } from "react";


const RedefinePassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      const response = await resetPassword(email, newPassword);

      if (response.auth) {
        alert("Senha redefinida com sucesso!");
      } else {
        alert("Erro ao redefinir a senha: " + response.message);
      }
    } catch (error) {
      console.error("Erro ao redefinir a senha: " + error);
    }
  };

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
            <input
              type="text"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div className="input-box">
            <label htmlFor="newPassword">Nova senha</label>
            <input
              type="password"
              placeholder="Crie uma nova senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
  
          <div className="input-box">
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              type="password"
              placeholder="Digite a nova senha novamente"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
  
          <button type="button" onClick={handleResetPassword}>
            Recuperar senha
          </button>
        </div>
      </div>
    </div>
  );
  };

  export default RedefinePassword;
