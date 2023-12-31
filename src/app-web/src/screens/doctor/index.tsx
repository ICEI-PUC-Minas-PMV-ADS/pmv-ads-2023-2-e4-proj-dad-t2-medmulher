import "../../styles/Doctor.css";
import { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import Vector from "../../assets/jam_medical.jpg";
import { Link } from "react-router-dom";
import { getDoctors } from "../../services/doctorAPI";
import Header from "../../components/header";
import { useDoctorContext } from "../../contexts/doctorContext";
import Profile from "../profile";

const Doctor = () => {
  const { setDr } = useDoctorContext();
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const handleDoctor = (doctor: []) => {
    setDr(doctor);
  };

  const fetchDoctors = async () => {
    try {
      const doctorData = await getDoctors();
      setDoctors(doctorData);
    } catch (error) {
      console.error("Erro ao buscar médicos:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="Doctor">
      <Header />

      <div className="page-doctor">
        <div className="title-doctor">
          <h1>Central de Médicos</h1>
        </div>

        <div className="button-search">
          <Link to="/cadastro-medico">
            <button
              style={{
                background: "purple",
                color: "white",
                border: "1px solid black",
                marginRight: "60px",
              }}
              type="submit"
              className="buttons-icons"
            >
              Cadastrar médico{" "}
              <a href="#" className="navbar-icons4">
                <MdAdd />
              </a>
            </button>
          </Link>
        </div>

        <div className="cards">
          {doctors.map((doctor) => (
            <div className="card" key={doctor._id}>
              <header>
                <img src={Vector} alt="Imagem de capa médicos" />
              </header>
              <main>
                <h2>{doctor.name}</h2>
                <p>{doctor.specialty}</p>
              </main>
              <footer>
                <Link to="/perfil-medico" onClick={() => handleDoctor(doctor)}>
                  <button>Ir para agenda</button>
                </Link>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
