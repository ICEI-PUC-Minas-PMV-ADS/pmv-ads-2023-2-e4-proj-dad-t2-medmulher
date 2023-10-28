import { useEffect, useCallback } from "react";
import { MdEdit } from "react-icons/md";
import { FilterSection, Header, ProfileSection } from "../../components";
import "../../styles/Profile.css";
import { getDoctorID } from "../../services/doctorAPI";

const Profile = () => {
  const doctor = useCallback(async () => {
    const response = await getDoctorID("651dff0a87078d5ab3ece1d7");

    if (response) {
      let sch = response.consultation_date.map((item: any) => item);
      let schedulles: any = [];
      for (let i = 0; i < sch.length; i++) {
        const sch2 = sch.filter(
          (item: any) => item.schedulle_date === sch[i].schedulle_date
        );

        schedulles.push({
          day: sch[i].schedulle_date,
          hours: sch2.map((item: any) => item.hours[0].hour),
        });

        sch = sch.filter(
          (item: any) => item.schedulle_date !== sch[i].schedulle_date
        );
      }

      console.log(schedulles);
      return schedulles;
    }

    return [];
  }, []);

  useEffect(() => {
    doctor();
  }, []);

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
