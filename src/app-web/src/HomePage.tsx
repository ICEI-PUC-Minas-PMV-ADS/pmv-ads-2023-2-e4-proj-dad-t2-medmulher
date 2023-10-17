import './HomePage.css';
import Logo from "./assets/Logo-rosa.svg"
import { MdAccountCircle, MdExpandMore } from "react-icons/md";
import Welcome from "./assets/calendar-img.svg"

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="header-container">
        <img className="header-logo" src={Logo} alt="Logo MedMulher" />

        <nav className="header-menu">
          <a className="header-menu-item" href="#">Início</a>
          <a className="header-menu-item" href="#">Agenda</a>
          <a className="header-menu-item" href="#">Médicos</a>

          <div className="nav-buttons">
            <a href="#" className="navbar-icons1">
              <MdAccountCircle />
            </a>

            <a href="#" className="navbar-icons2">
              <MdExpandMore />
            </a>
          </div>
        </nav>
      </div>

      <div className="container">
        <div className="main-content">
          <div className="welcome-text">
            <h1>Boas vindas Colaborador(a)!</h1>
            <p>
              Bem vindos ao MedMulher, um sistema que foi pensado para facilitar o gerenciamento
              de médicos e de suas agendas de consultas.<br></br><br></br> Aqui você pode cadastrar novos médicos,
              adicionar horários e dias a suas agendas, ver quais consultas os médicos terão no dia,
              assim como fazer alterações.
            </p>
          </div>

          <div className="welcome-img">
            <img src={Welcome} alt="imagem de boas vindas" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
