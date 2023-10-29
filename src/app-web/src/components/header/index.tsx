import Logo from "../../assets/Logo-rosa.svg";
import { MdAccountCircle, MdClose, MdExpandMore, MdLogout } from "react-icons/md";
import "../../styles/components/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  localStorage.removeItem("token");

  window.location.href = "/";
};

const Header = () => {
  const [menuItems, setMenuItems] = useState<boolean>(false);
  const isMobile = window.innerWidth < 480;

  const handleMenu = () => {
    setMenuItems(!menuItems);
  };

  return (
    <header className="header-home">
      <div className="header-container-home">
        <img className="header-logo-home" src={Logo} alt="Logo MedMulher" />

        <nav className="header-menu-home">
          <MdLogout color={"8D4698"} cursor="pointer" onClick={Logout} />
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
              onClick={handleMenu}
            />

            {menuItems && isMobile ? (
              <aside className="drawer">
                <MdClose className="close" onClick={handleMenu} />
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
