import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import Logo from "../../assets/checkmark-ppl-backgrund-white-mark.svg";
import RegisterSchedule from "../registerSchedule";
import { getDoctors } from "../../services/doctorAPI";
import { useDoctorContext } from "../../contexts/doctorContext";
import { Link } from "react-router-dom";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalText: string;
  crm: string;
}

const RegisterDoctorModalSuccess = ({ setIsOpen, modalText, crm }: IProps) => {
  const { setDr } = useDoctorContext();
  const [isOpenSchedulling, setIsOpenSchedulling] = useState(false);

  const redirectProfile = async () => {
    const response = await getDoctors();

    if (response) {
      const doutor = response.filter((dr) => dr.crm === crm);
      return setDr(doutor);
    }
  };

  return (
    <>
      <div>
        <div className="container-modal">
          <div className="group-modal">
            <div className="exit-button-div">
              <RiCloseLine
                onClick={() => setIsOpen(false)}
                class="exit-button-modal"
                type="button"
                style={{ width: "24px", marginBottom: "0px", padding: "0px" }}
              />
            </div>
            <div>
              <div>
                <img className="checkmark-logo" src={Logo} alt="" />
              </div>
              <div className="title">
                <h2>Cadastro Concluído</h2>
              </div>
            </div>
            <br />
            <div className="text-doctor">
              <p>O cadastro do novo médico foi concluído!</p>
              <p>Agora você pode conferir seu perfil e adicionar</p>
              <p>horários e agenda.</p>
            </div>
            <br />
            <div>
              <button className="button-form" onClick={() => setIsOpenSchedulling(!isOpenSchedulling)}>Adicionar agenda</button>
            </div>
            <br />
            <div>
              <Link to="/perfil-medico" onClick={() => redirectProfile}>
                <button className="button-form-inverse">Ir para perfil</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isOpenSchedulling && <RegisterSchedule open={isOpenSchedulling} />}
    </>
  );
};

export default RegisterDoctorModalSuccess;
