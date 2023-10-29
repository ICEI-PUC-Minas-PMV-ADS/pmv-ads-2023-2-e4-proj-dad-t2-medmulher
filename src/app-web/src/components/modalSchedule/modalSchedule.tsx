import { useState, useCallback, FormEvent, useEffect } from "react";
import "../../styles/components/ModalSchedule.css";
import { AxiosResponse } from "axios";
import { apiBase } from "../../services/api";
import { hoursConst } from "../../utils/constants";
import { useDoctorContext } from "../../contexts/doctorContext";
import { getDoctors } from "../../services/doctorAPI";

interface IModal {
  isOpen: boolean;
  setOpenModal: (isOpen: boolean) => void;
}

interface InfoShedulle {
  crm: string;
  name: string;
  availability: {
    day: string;
    hours: string[];
  };
}

export function Modal({ isOpen, setOpenModal }: IModal) {
  const { dr } = useDoctorContext();
  const [selectMedicos, setSelectMedicos] = useState<any>([]);

  //OPTION DO SELECT DIAS
  const selectDaySchedulle = [
    { value: "", label: "Selecione o dia" },
    { value: "Monday", label: "Segunda" },
    { value: "Tuesday", label: "Terça" },
    { value: "Wednesday", label: "Quarta" },
    { value: "Thursday", label: "Quinta" },
    { value: "Friday", label: "Sexta" },
  ];

  //MENSAGEM DE SUCESSO/ERRO
  const [addSucesso, setAddSucesso] = useState(false);

  //REQUISIÇÃO POST
  const postSchedulleDoctor = async (id: string, data: InfoShedulle) => {
    try {
      const response: AxiosResponse = await apiBase.patch(
        `/doctors/${id}`,
        data
      );

      if (response.status === 200) {
        setAddSucesso(true);
        return response.data;
      }
    } catch (erro) {
      console.error("Erro ao enviar dados:", erro);
      return erro;
    }
  };

  //DADOS DO FORMULÁRIO
  const [formState, setFormState] = useState<InfoShedulle>({
    crm: "",
    name: "",
    availability: {
      day: "",
      hours: [],
    },
  });

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      //const element = event.target as HTMLFormElement;
      const value = JSON.parse(event.target.selectmedicos.value);

      const newCrm = dr.length > 0 && dr._id ? dr.crm : value.crm;
      const newName = dr.length > 0 && dr._id ? dr.name : value.name;
      const infoShedulle: InfoShedulle = {
        crm: newCrm,
        name: newName,
        availability: {
          day: formState.availability?.day || "",
          hours: formState.availability?.hours || [],
        },
      };

      const id = dr && dr._id ? dr._id : value.id;

      try {
        await postSchedulleDoctor(id, infoShedulle);
      } catch (erro) {
        console.error("Erro ao enviar dados:", erro);
      }
    },
    [formState]
  );

  if (addSucesso) {
    //add modal de sucesso
    return (
      <div>
        <p>Cadatrado com sucesso!</p>
      </div>
    );
  }

  const getDct = async () => {
    const response = await getDoctors();

    if (response) {
      return setSelectMedicos(response);
    }

    return [];
  };

  useEffect(() => {
    if (dr.length === 0) {
      getDct();
    }
  }, []);

  //ESTRUTURA DO MODAL CADASTRO DE AGENDA
  if (isOpen) {
    return (
      <div className="modalBg">
        <div className="cadastroMed-container">
          <button
            className="btn-fecharModal secundary"
            onClick={() => setOpenModal(!isOpen)}
          >
            X
          </button>
          <h1>Editar agenda</h1>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="selectMed-container">
              <label htmlFor="Selectmedicos">
                Médico{dr.length === 0 ? "" : `s`}
              </label>
              <select
                name="selectmedicos"
                id="selectmedicos"
                className="select-medicos"
                required
                value={formState.name}
                onChange={(event) => {
                  setFormState({
                    ...formState,
                    name: event.currentTarget?.value || "",
                  });
                }}
              >
                {dr.length !== 0 ? (
                  <option
                    key={dr.crm}
                    value={JSON.stringify({
                      id: dr._id,
                      crm: dr.crm,
                      name: dr.name,
                    })}
                  >
                    {dr.name}
                  </option>
                ) : (
                  selectMedicos.map((option, index) => (
                    <option
                      key={index}
                      value={JSON.stringify({
                        id: option._id,
                        crm: option.crm,
                        name: option.name,
                      })}
                    >
                      {option.name}
                    </option>
                  ))
                )}
              </select>
            </div>

            <div className="selectDias-container">
              <label htmlFor="">Selecione os dias da semana</label>
              <select
                name="selectDias"
                id="selectDias"
                className="select-dias"
                required
                value={formState.availability.day}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    availability: {
                      ...formState.availability,
                      day: event.currentTarget?.value || "",
                    },
                  })
                }
              >
                {selectDaySchedulle.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="selectHoras-container">
              <label htmlFor="">Selecione os horários de atendimento</label>
              <div className="select-horas">
                {hoursConst.map((hr, index) => (
                  <>
                    <input
                      type="checkbox"
                      name="hoursSchedulle"
                      id={hr.name}
                      value={hr.value}
                      checked={formState.availability.hours.includes(hr.value)}
                      onChange={(event) =>
                        setFormState((prevState) => ({
                          ...prevState,
                          availability: {
                            ...prevState.availability,
                            hours: event.target.checked
                              ? [...prevState.availability.hours, hr.value]
                              : prevState.availability.hours.filter(
                                  (hour) => hour !== hr.value
                                ),
                          },
                        }))
                      }
                    />
                    <label htmlFor={hr.name}>{hr.value}</label>
                  </>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-addAgenda">
              Adicionar agenda
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
