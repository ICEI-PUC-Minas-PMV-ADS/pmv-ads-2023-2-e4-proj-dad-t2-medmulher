import { MdDelete, MdEdit } from "react-icons/md";
import "../../styles/components/ProfileSection.css";
import { useDoctorContext } from "../../contexts/doctorContext";
import { useState } from "react";
import { deleteDoctor } from "../../services/doctorAPI";

const ProfileSection = () => {
  const medicalIcon = (
    <svg
      width="71"
      height="76"
      viewBox="0 0 71 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="71" height="76" rx="5" fill="#E6CCFB" />
      <path
        d="M30.699 42.6672V43.6C30.699 45.5096 31.4576 47.3409 32.8079 48.6912C34.1581 50.0414 35.9895 50.8 37.899 50.8C39.8086 50.8 41.6399 50.0414 42.9902 48.6912C44.3405 47.3409 45.099 45.5096 45.099 43.6V40.928C44.031 40.5506 43.1309 39.8077 42.5576 38.8307C41.9844 37.8537 41.775 36.7056 41.9665 35.5891C42.158 34.4727 42.738 33.4599 43.604 32.7298C44.47 31.9997 45.5663 31.5992 46.699 31.5992C47.8318 31.5992 48.928 31.9997 49.794 32.7298C50.66 33.4599 51.24 34.4727 51.4315 35.5891C51.623 36.7056 51.4136 37.8537 50.8404 38.8307C50.2672 39.8077 49.367 40.5506 48.299 40.928V43.6C48.299 46.3583 47.2033 49.0035 45.2529 50.9539C43.3026 52.9043 40.6573 54 37.899 54C35.1408 54 32.4955 52.9043 30.5451 50.9539C28.5947 49.0035 27.499 46.3583 27.499 43.6V42.6672C25.2621 42.2884 23.2315 41.1299 21.7672 39.397C20.3028 37.6641 19.4993 35.4688 19.499 33.2V25.2C19.499 24.3513 19.8362 23.5374 20.4363 22.9373C21.0364 22.3371 21.8503 22 22.699 22H24.299C24.7234 22 25.1303 22.1686 25.4304 22.4686C25.7305 22.7687 25.899 23.1757 25.899 23.6C25.899 24.0243 25.7305 24.4313 25.4304 24.7314C25.1303 25.0314 24.7234 25.2 24.299 25.2H22.699V33.2C22.699 34.8974 23.3733 36.5253 24.5735 37.7255C25.7738 38.9257 27.4016 39.6 29.099 39.6C30.7964 39.6 32.4243 38.9257 33.6245 37.7255C34.8247 36.5253 35.499 34.8974 35.499 33.2V25.2H33.899C33.4747 25.2 33.0677 25.0314 32.7677 24.7314C32.4676 24.4313 32.299 24.0243 32.299 23.6C32.299 23.1757 32.4676 22.7687 32.7677 22.4686C33.0677 22.1686 33.4747 22 33.899 22H35.499C36.3477 22 37.1616 22.3371 37.7618 22.9373C38.3619 23.5374 38.699 24.3513 38.699 25.2V33.2C38.6987 35.4688 37.8952 37.6641 36.4309 39.397C34.9665 41.1299 32.9359 42.2884 30.699 42.6672ZM46.699 38C47.1234 38 47.5303 37.8314 47.8304 37.5314C48.1305 37.2313 48.299 36.8243 48.299 36.4C48.299 35.9757 48.1305 35.5687 47.8304 35.2686C47.5303 34.9686 47.1234 34.8 46.699 34.8C46.2747 34.8 45.8677 34.9686 45.5677 35.2686C45.2676 35.5687 45.099 35.9757 45.099 36.4C45.099 36.8243 45.2676 37.2313 45.5677 37.5314C45.8677 37.8314 46.2747 38 46.699 38Z"
        fill="#7E3989"
      />
    </svg>
  );
  const { dr } = useDoctorContext();
  const [isOpen, setIsOpen] = useState(false);

  const removeDoctor = async () => {
    const response = await deleteDoctor(dr._id);

    if(response.status === 200){
      alert("Médico deletado com sucesso!")
      return window.location.href = "/doutor"
    }

    alert("Ocorreu um erro, tente novamente mais tarde!")
  };

  return (
    <section className="doctor-infos">
      <div className="doctor">
        <div className="info">
          {medicalIcon}
          <div className="personal">
            <h2 className="doctor-name">Dr {dr.name}</h2>
            <span className="doctor-specialty">{dr.specialty}</span>
          </div>
        </div>
        <hr className="separator"></hr>
        <div className="credentials">
          <p className="crm">CRM:</p>
          <span className="crm-code">{dr.crm}</span>
        </div>
      </div>

      <div className="doctor-options">
        <button className="primary" onClick={() => setIsOpen(!isOpen)}>
          <MdDelete />
          Deletar médico
        </button>
        <button className="secundary">
          <MdEdit />
          Editar médico
        </button>
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <h1>Deletar esse médico?</h1>
              <span>Se você deletar esse médico, todas as informações de cadastro e agenda dele serão apagadas</span>
              <div className="actions">
                <button className="secundary"  onClick={removeDoctor}>Deletar</button>
                <button className="primary"  onClick={() => setIsOpen(!isOpen)}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfileSection;
