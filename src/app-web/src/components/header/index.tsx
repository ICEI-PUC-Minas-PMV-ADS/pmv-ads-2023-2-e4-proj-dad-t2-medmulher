import Logo from "../../assets/Logo-rosa.svg";
import { MdAccountCircle, MdClose, MdExpandMore } from "react-icons/md";
import "../../styles/components/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuItems, setMenuItems] = useState<boolean>(false);
  const isMobile = window.innerWidth < 480;
  return (
    <header className="header-home">
      <div className="header-container-home">
        <img className="header-logo-home" src={Logo} alt="Logo MedMulher" />

        <nav className="header-menu-home">
          {!isMobile && (
            <ul className="header-menu-item-home">
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to={"/perfil-medico"}>Agenda</Link>
              </li>
              <li>
                <Link to={"/doutor"}> Médicos</Link>
              </li>
            </ul>
          )}

          <div className="nav-buttons-home">
            <MdAccountCircle color={"#8D4698"} />
            <MdExpandMore
              color={"#1E1E1E"}
              cursor="pointer"
              onClick={() => setMenuItems(!menuItems)}
            />

            {menuItems && isMobile ? (
              <aside className="drawer">
                <MdClose
                  className="close"
                  onClick={() => setMenuItems(!menuItems)}
                />
                <img
                  className="header-logo-home"
                  src={Logo}
                  alt="Logo MedMulher"
                />
                <ul>
                  <li>
                    <Link to="/">Início</Link>
                  </li>
                  <li>
                    <Link to={"/perfil-medico"}>Agenda</Link>
                  </li>
                  <li>
                    <Link to={"/doutor"}> Médicos</Link>
                  </li>
                </ul>
                <p className="reserve-text">@MedMulher direitos reservados</p>
              </aside>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
