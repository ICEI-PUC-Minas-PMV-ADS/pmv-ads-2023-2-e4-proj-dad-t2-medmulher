import '../../styles/Register.css';
import Logo from "../../assets/Logo-rosa.svg"
import { useState } from "react";
import { registrar } from "../../services/userAPI";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  
  var URL = "http://localhost:3000/users/";
 
  
/*
  const Register = async () => {
    const cadastrado = await registrar(email, password, name, cpf);

    

    if (cadastrado) {
    
      alert("cadastrado ");
      
    }

    return "Usuário não cadastrado!";
  };
*/
  const Register = () => {
  

    
    var user = {
      name: name,
      password: password,
      email: email,
      cpf:cpf,
      //nascimento:nascimento
    };
  
  if(password==confirmacao){
    
    alert(JSON.stringify(user));
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then((data) => {alert(data)})
    .catch((error) => {alert(error)})

  }
  else{
    alert("Senha e a confirmação não coincidem!");
  }
      // axios.post(URL, users)
      //   .then((res : any)  => console.log(res.data))
      //   .catch((error: any) => {
      //     console.log(error)
      //   })
      // console.log(`${nameMedico}    ${selectedEspecialidade}      ${crm}  `);
  };
  
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
            <input type="text" name="email" id="email" onChange={(ev) => setEmail(ev.target.value)}  placeholder="Digite seu melhor e-mail" />
          </div>

          <div className="input-box">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" onChange={(ev) => setPassword(ev.target.value)} placeholder="Crie uma senha" />        
          </div>

          <div className="input-box">
            <label htmlFor="password-conf">Confirmar Senha</label>
            <input type="password"  onChange={(ev) => setConfirmacao(ev.target.value)} placeholder="Digite a senha novamente" />
            <br></br> 
          </div>

          <div className="input-box">
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" onChange={(ev) => setName(ev.target.value)} placeholder="Digite seu nome" />
          </div>

          <div className="input-box">
            <label htmlFor="nascimento">Data de Nascimento</label>
            <input type="date"  onChange={(ev) => setNascimento(ev.target.value)} placeholder="DD/MM/AAAA" />
          </div>

          <div className="input-box">
            <label htmlFor="cpf">CPF</label>
            <input type="text" onChange={(ev) => setCpf(ev.target.value)} placeholder="000.000.000-00" />
          </div>

          <button onClick={Register} type="submit">Cadastrar</button>

          </div>
        </div>
      </div>
  );
};

export default Register;