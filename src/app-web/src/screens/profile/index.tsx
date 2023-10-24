import { MdEdit } from "react-icons/md";
import { FilterSection, Header, ProfileSection } from "../../components";
import "../../styles/Profile.css";
import { calendar } from "../../utils/calendary";

const Profile = () => {
  const teste = new Date().getDate();

  return (
    <>
      <Header />

      <main className="page">
        <ProfileSection />
        <FilterSection />

        <section className="schedulles">
          <div className="schedulle-day">
            <h3 className="day">03 de Outubro</h3>
            <button className="secundary" type="button">
              <MdEdit />{" "}
            </button>
          </div>

          <div className="schedulle-cards">
            <div className="schedulle-card">
              <p className="hour">09:00</p>
              <div className="patient">
                <h4 className="dr-name">Dr. Fulano de Tal</h4>
                <p className="patient-name">Paciente: Zé do Caixão</p>
              </div>
              <div className="ellipsis">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="schedulle-card">
              <p className="hour">10:00</p>
              <div className="patient">
                <h4 className="dr-name">Dr. Fulano de Tal</h4>
                <p className="patient-name">Paciente: Zé do Caixão</p>
              </div>
              <div className="ellipsis">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="schedulle-card">
              <p className="hour">11:00</p>
              <div className="patient">
                <h4 className="dr-name">Dr. Fulano de Tal</h4>
                <p className="patient-name">Paciente: Zé do Caixão</p>
              </div>
              <div className="ellipsis">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="schedulle-card">
              <p className="hour">12:00</p>
              <div className="patient">
                <h4 className="dr-name">Dr. Fulano de Tal</h4>
                <p className="patient-name">Paciente: Zé do Caixão</p>
              </div>
              <div className="ellipsis">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
