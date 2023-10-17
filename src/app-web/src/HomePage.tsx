import './HomePage.css';
import Logo from "./assets/Logo-rosa.svg"
import { MdAccountCircle, MdExpandMore } from "react-icons/md";

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
    </div>
  );
};

export default HomePage;