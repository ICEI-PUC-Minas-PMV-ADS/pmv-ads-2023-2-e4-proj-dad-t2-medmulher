import "../../styles/HomePage.css";
import Welcome from "./assets/calendar-img.svg";
import Header from "../../components/header";

const Home = () => {
  return (
    <div className="Home">
      <Header />

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

export default Home;
