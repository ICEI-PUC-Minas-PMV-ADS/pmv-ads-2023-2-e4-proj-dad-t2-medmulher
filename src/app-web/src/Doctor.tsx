import "./Doctor.css";
import Logo from "./assets/Logo-rosa.svg";
import { MdAccountCircle, MdAdd, MdExpandMore } from "react-icons/md";

const Doctor = () => {
    return (
      <div className="Doctor">
        <div className="header-container">
          <img className="header-logo" src={Logo} alt="Logo MedMulher" />
  
          <nav className="header-menu">
            <a className="header-menu-item" href="#">
              Início
            </a>
            <a className="header-menu-item" href="#">
              Agenda
            </a>
            <a className="header-menu-item" href="#">
              Médicos
            </a>
  
            <div className="nav-buttons">
              <a className="navbar-icons1" href="#">
                  <MdAccountCircle />
              </a>
              <a href="#" className="navbar-icons2">
                  <MdExpandMore />
              </a>
            </div>
          </nav>
          </div>
  

          <div className="page">
            <div className="title">
              <h1>Central de Médicos</h1>
            </div>
            </div>

            <div className= "button-search">
            <button style={{ background: 'white', color: 'black', border: '1px solid black', marginRight: '30px'}} type="submit">Especialidade <a href="#" className="navbar-icons3">
                  <MdExpandMore />
              </a></button>
            <button style={{ background: '8D4698', color: 'white', border: '1px solid black', marginRight: '250px'}} type="submit">Cadastrar médico <a href="#" className="navbar-icons4">
                  <MdAdd /> 
              </a></button>
            </div>

            <div className="card1">
            <div className="container">
             <div className="input-group">
            <h1>Dr Beatriz Silva</h1>
            <h2>Ginecologista</h2>
            </div>
          </div>

            <div className="container">
             <div className="input-group">
            <h1>Dr Beatriz Silva</h1>
            <h2>Ginecologista</h2>
            </div>
          </div>

          <div className="container">
          <div className="input-group">
            <h1>Dr Beatriz Silva</h1>
            <h2>Ginecologista</h2>
            </div>
          </div>

          <div className="container">
          <div className="input-group">
            <h1>Dr Beatriz Silva</h1>
            <h2>Ginecologista</h2>
            </div>
          </div>
          </div>

          <div className="card2">
          <div className="container">
          <div className="input-group">
            <h1>Dr Beatriz Silva</h1>
            <h2>Ginecologista</h2>
          </div>
          </div>

          <div className="container">
          <div className="input-group">
            <h1>Dr Beatriz Silva</h1>
            <h2>Ginecologista</h2>
          </div>
          </div>

          <div className="container">
          <div className="input-group">
            <h1>Dr Beatriz Silva</h1>
            <h2>Ginecologista</h2>
          </div>
          </div>
          </div>
            
        </div> 
    );
  };
  
  export default Doctor;  