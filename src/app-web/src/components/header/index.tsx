import Logo from "../../assets/Logo-rosa.svg";
import { MdAccountCircle, MdExpandMore } from "react-icons/md";
import "../../styles/components/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-home">
      <div className="header-container-home">
        <img className="header-logo-home" src={Logo} alt="Logo MedMulher" />

        <nav className="header-menu-home">
          <ul className="header-menu-item-home">
            <li>
              <Link to="/inicio">Início</Link>
            </li>
            <li>
              <Link to="/agenda">Agenda</Link>
            </li>
            <li>
              <Link to="/doutor">Médicos</Link>
            </li>
          </ul>

          <div className="nav-buttons-home">
            <MdAccountCircle color={"#8D4698"} />
            <Link to="/perfil"><MdExpandMore color={"#1E1E1E"} cursor="pointer"/></Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
