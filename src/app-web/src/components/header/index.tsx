import Logo from "../../assets/Logo-rosa.svg";
import {
  MdAccountCircle,
  MdClose,
  MdExpandMore,
  MdLogout,
} from "react-icons/md";
import "../../styles/components/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterSchedule from "../../screens/registerSchedule";

const Logout = () => {
  localStorage.removeItem("token");

  window.location.href = "/";
};

const Header = () => {
  const [menuItems, setMenuItems] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = window.innerWidth < 480;

  const handleMenu = () => {
    if(!isMobile) return;
    setMenuItems(!menuItems);
  };

  return (
    <header className="header-home">
      <div className="header-container-home">
        <img className="header-logo-home" src={Logo} alt="Logo MedMulher" />

        <nav className="header-menu-home">
          {!isMobile && (
            <>
              <MdLogout className="loggout" color={"8D4698"} cursor="pointer" onClick={Logout} />
              <ul className="header-menu-item-home">
                <li>
                  <Link to="/inicio">Início</Link>
                </li>
                <li>
                  <Link to={"#"} onClick={() => setIsOpen(!isOpen)}>
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link to={"/doutor"}> Médicos</Link>
                </li>
              </ul>
            </>
          )}

          <div className="nav-buttons-home">
            <MdAccountCircle color={"#8D4698"} />
            <MdExpandMore
              color={"#1E1E1E"}
              cursor="pointer"
              onClick={handleMenu}
            />

            {menuItems ? (
              <aside className="drawer">
                <MdClose className="close" onClick={handleMenu} />
                <img
                  className="header-logo-home"
                  src={Logo}
                  alt="Logo MedMulher"
                />
                <ul>
                  <li>
                    <Link to="/inicio">Início</Link>
                  </li>
                  <li>
                    <Link to={"/perfil-medico"}>Agenda</Link>
                  </li>
                  <li>
                    <Link to={"/doutor"}> Médicos</Link>
                  </li>
                </ul>
                <MdLogout className="loggout" color={"8D4698"} cursor="pointer" onClick={Logout} />

                <p className="reserve-text">@MedMulher direitos reservados</p>
              </aside>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>

      {isOpen && <RegisterSchedule open={true} />}
    </header>
  );
};

export default Header;
