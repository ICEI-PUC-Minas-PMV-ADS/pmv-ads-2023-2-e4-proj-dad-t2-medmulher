import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { FilterSection, Header, ProfileSection } from "../../components";
import "../../styles/Profile.css";
import { getDoctorID } from "../../services/doctorAPI";
import { useDoctorContext } from "../../contexts/doctorContext";
import {
  deleteSchedulle,
  getSchedulles,
  updateSchedulle,
} from "../../services/schedulleAPI";
import { days, meses } from "../../utils/constants";

const Profile = () => {
  const { dr } = useDoctorContext();
  const [cards, setCards] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMark, setIsOpenMark] = useState(false);
  const [newHour, setNewHour] = useState("");

  const doctor = async () => {
    const response = await getDoctorID(dr._id);
    const agender = await getSchedulles();
    if (response) {
      let sch = response.consultation_date.map((item: any) => item);
      let schedulles: any = [];
      let hora = "";

      for (let i = 0; i < sch.length; i++) {
        let horarios: any = [];

        if (hora !== sch[i].schedulle_date) {
          const sch2 = sch.filter(
            (item: any) => item.schedulle_date === sch[i].schedulle_date
          );

          hora = sch[i].schedulle_date;

          for (let l = 0; l < sch2.length; l++) {
            const id_schedule = agender.filter(
              (el) =>
                el.doctor_id === dr._id &&
                el.schedulle_date === sch[i].schedulle_date &&
                el.hour === sch2[l].hours[0].hour
            );
            horarios.push({
              hour: sch2[l].hours[0].hour,
              patient_name: sch2[l].hours[0].patient_name,
              id: id_schedule[0]._id,
            });
          }

          schedulles.push({
            date: sch[i].schedulle_date,
            day: sch[i].day,
            hours: horarios,
          });
        }
      }

      return setCards(schedulles);
    }

    return [];
  };

  const removeSchedulle = async (id: string) => {
    const response = await deleteSchedulle(id);

    if (response) {
      alert("Agendamento deletado com sucesso!");
      setIsOpen(!isOpen);
      return doctor();
    }

    alert("Ocorreu um erro, tente novamente mais tarde!");
  };

  const updtSchedulle = async (
    id: string,
    schedulle_date: string,
    day: string,
    patient_name: string
  ) => {
    const response = await updateSchedulle(id, {
      hour: newHour,
      schedulle_date,
      day,
      patient_name,
    });

    if (response) {
      alert("Agendamento alterado com sucesso!");
      setIsOpenMark(!isOpenMark);
      return doctor();
    }

    alert("Ocorreu um erro, tente novamente mais tarde!");
  };

  const conversor = (date: string) => {
    let day = "";
    let month = "";

    for (let l = 1; l <= 31; l++) {
      if (date.indexOf(`-0${l}`) !== -1 || date.indexOf(`-${l}`) !== -1) {
        day = days[l - 1];
      }
    }

    for (let i = 1; i <= 12; i++) {
      if (date.indexOf(`-0${i}-`) !== -1 || date.indexOf(`-${i}-`) !== -1) {
        month = meses[i - 1];
      }
    }

    return `${day} de ${month}`;
  };

  useEffect(() => {
    if (dr.length === 0) {
      window.location.href = "/doutor";
    }
    doctor();
  }, [dr]);

  return (
    <>
      <Header />

      <main className="page-doctor">
        <ProfileSection />
        {/* <FilterSection /> */}

        <section className="schedulles">
          {cards.length > 0 ? (
            cards.map((item: any, index: number) => (
              <div key={index}>
                <div className="schedulle-day">
                  <h3 className="day">{conversor(item.date)}</h3>
                  <button className="secundary" type="button">
                    <MdEdit />{" "}
                  </button>
                </div>
                <div className="schedulle-cards">
                  {item.hours.map((hour: any, i: number) => (
                    <>
                      <div key={i} className="schedulle-card">
                        <p
                          className="hour"
                          onClick={() => setIsOpenMark(!isOpenMark)}
                        >
                          {hour.hour}
                        </p>
                        <div className="patient">
                          <h4 className="dr-name">Dr. {dr.name}</h4>
                          <p className="patient-name">
                            Paciente: {hour.patient_name}
                          </p>
                        </div>
                        <button
                          className="ellipsis"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          <span>.</span>
                          <span>.</span>
                          <span>.</span>
                        </button>
                      </div>
                      {isOpen && (
                        <div className="modal">
                          <div className="modal-container">
                            <div className="modal-content">
                              <h1>Desmarcar essa consulta?</h1>
                              <div className="actions">
                                <button
                                  className="secundary"
                                  onClick={() => removeSchedulle(hour.id)}
                                >
                                  Desmarcar
                                </button>
                                <button
                                  className="primary"
                                  onClick={() => setIsOpen(!isOpen)}
                                >
                                  Cancelar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {isOpenMark && (
                        <div className="modal">
                          <div className="modal-container">
                            <div className="modal-content">
                              <h1>Alterar horário da consulta?</h1>
                              <select
                                className="hr"
                                defaultValue={hour.hour}
                                onChange={(el) => setNewHour(el.target.value)}
                              >
                                <option value="08:00">08:00</option>
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                              </select>

                              <div className="actions">
                                <button
                                  className="secundary"
                                  onClick={() =>
                                    updtSchedulle(
                                      hour.id,
                                      item.date,
                                      item.day,
                                      hour.patient_name
                                    )
                                  }
                                >
                                  Remarcar
                                </button>
                                <button
                                  className="primary"
                                  onClick={() => setIsOpenMark(!isOpenMark)}
                                >
                                  Cancelar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <h1>Médico não possui agendamento marcado!</h1>
          )}
        </section>
      </main>
    </>
  );
};

export default Profile;
