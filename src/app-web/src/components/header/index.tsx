import Logo from "../../assets/Logo-rosa.svg";
import { MdAccountCircle, MdExpandMore } from "react-icons/md";
import "../../styles/components/Header.css";

const Header = () => {
  return (
    <header className="header-home">
      <div className="header-container-home">
        <img className="header-logo-home" src={Logo} alt="Logo MedMulher" />

        <nav className="header-menu-home">
          <ul className="header-menu-item-home">
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Agenda</a>
            </li>
            <li>
              <a href="#">Médicos</a>
            </li>
          </ul>

          <div className="nav-buttons-home">
            <MdAccountCircle color={"#8D4698"} />
            <MdExpandMore color={"#1E1E1E"} cursor="pointer"/>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
