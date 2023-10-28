import { useState, useCallback, FormEvent } from 'react';
import '../../styles/components/ModalSchedule.css'
import { AxiosResponse } from "axios";
import { apiBase } from "../../services/api";

interface IModal {
    isOpen: boolean;
    setOpenModal: (isOpen: boolean) => void
}

interface InfoShedulle {
    nomeMedico: string;
    availability: {
        daySchedulle: string;
        hoursSchedulle: string[];
    };
}


export function Modal({ isOpen, setOpenModal }: IModal) {

    //OPTION DO SELECT MÉDICOS
    const selectNomeMedico = [
        { value: '', label: 'Selecione o médico' },
        //PUXAR NOME DOS MÉDICOS DO BANCO DE DADOS
        { value: 'Dra. Beatriz', label: 'Dra. Beatriz' },
        { value: 'Dra. Criatina', label: 'Dra. Criatina' }
    ];

    //OPTION DO SELECT DIAS
    const selectDaySchedulle = [
        { value: '', label: 'Selecione o dia' },
        { value: 'Segunda', label: 'Segunda' },
        { value: 'Terça', label: 'Terça' },
        { value: 'Quarta', label: 'Quarta' },
        { value: 'Quinta', label: 'Quinta' },
        { value: 'Sexta', label: 'Sexta' },
    ];



    //MENSAGEM DE SUCESSO/ERRO
    const [addSucesso, setAddSucesso] = useState(false);


    //REQUISIÇÃO POST
    const postSchedulleDoctor = async (data: InfoShedulle) => {
        try {
            const response: AxiosResponse = await apiBase.post('/doctors/', data);

            if (response.status === 200) {
                setAddSucesso(true);
                return response.data;
            }

        } catch (erro) {
            console.error('Erro ao enviar dados:', erro);
         }
    };


    //DADOS DO FORMULÁRIO
    const [formState, setFormState] = useState<InfoShedulle>({
        nomeMedico: "",
        availability: {
            daySchedulle: "",
            hoursSchedulle: [],
        },
    });

    const handleSubmit = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const element = event.target as HTMLFormElement;

            const infoShedulle: InfoShedulle = {
                nomeMedico: formState.nomeMedico || "",
                availability: {
                    daySchedulle: formState.availability?.daySchedulle || "",
                    hoursSchedulle: formState.availability?.hoursSchedulle || [],
                },
            };
            
            try {
                await postSchedulleDoctor(infoShedulle);
            } catch (erro) {

                console.error('Erro ao enviar dados:', erro);
            }

            setAddSucesso(true);
        },
        [formState]
    );

    console.log(formState)

    if (addSucesso) {
        //add modal de sucesso
        return (
            <div>
                <p>Cadatrado com sucesso!</p>
            </div>
        )
    }



    //ESTRUTURA DO MODAL CADASTRO DE AGENDA
    if (isOpen) {
        return (
            <div className="modalBg">
                <div className="cadastroMed-container">
                    <button className="btn-fecharModal" onClick={() => setOpenModal(!isOpen)}>X</button>
                    <h1>Editar agenda</h1>
                    <form action="" method="post" onSubmit={handleSubmit}>

                        <div className="selectMed-container">
                            <label htmlFor="Selectmedicos">Médicos</label>
                            <select
                                name="selectmedicos"
                                id="selectmedicos"
                                className="select-medicos"
                                required
                                value={formState.nomeMedico}
                                onChange={(event) => setFormState({
                                    ...formState,
                                    nomeMedico: event.currentTarget?.value || "",
                                })}
                            >
                                {/*PUXAR NOME DOS MÉDICOS DO BANCO DE DADOS*/}
                                {selectNomeMedico.map((option) => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="selectDias-container">
                            <label htmlFor="">Selecione os dias da semana</label>
                            <select
                                name="selectDias"
                                id="selectDias"
                                className="select-dias"
                                required
                                value={formState.availability.daySchedulle}
                                onChange={(event) => setFormState({
                                    ...formState,
                                    availability: {
                                        ...formState.availability,
                                        daySchedulle: event.currentTarget?.value || '',
                                    },
                                })
                                }
                            >
                                {selectDaySchedulle.map((option) => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="selectHoras-container">
                            <label htmlFor="">Selecione os horários de atendimento</label>
                            <div className="select-horas">
                                <input
                                    type="checkbox"
                                    name="hoursSchedulle"
                                    id="oitoHoras"
                                    value={"08:00"}
                                    checked={formState.availability.hoursSchedulle.includes("08:00")}
                                    onChange={(event) =>
                                        setFormState((prevState) => ({
                                            ...prevState,
                                            availability: {
                                                ...prevState.availability,
                                                hoursSchedulle: event.target.checked
                                                    ? [...prevState.availability.hoursSchedulle, "08:00"]
                                                    : prevState.availability.hoursSchedulle.filter(
                                                        (hour) => hour !== "08:00"
                                                    ),
                                            },
                                        }))
                                    }
                                />
                                <label htmlFor="oitoHoras">08:00</label>

                                <input
                                    type="checkbox"
                                    name="hoursSchedulle"
                                    id="noveHoras"
                                    value={"09:00"}
                                    checked={formState.availability.hoursSchedulle.includes("09:00")}
                                    onChange={(event) =>
                                        setFormState((prevState) => ({
                                            ...prevState,
                                            availability: {
                                                ...prevState.availability,
                                                hoursSchedulle: event.target.checked
                                                    ? [...prevState.availability.hoursSchedulle, "09:00"]
                                                    : prevState.availability.hoursSchedulle.filter(
                                                        (hour) => hour !== "09:00"
                                                    ),
                                            },
                                        }))
                                    }
                                />
                                <label htmlFor="noveHoras">09:00</label>

                                <input
                                    type="checkbox"
                                    name="hoursSchedulle"
                                    id="dezHoras"
                                    value={"10:00"}
                                    checked={formState.availability.hoursSchedulle.includes("10:00")}
                                    onChange={(event) =>
                                        setFormState((prevState) => ({
                                            ...prevState,
                                            availability: {
                                                ...prevState.availability,
                                                hoursSchedulle: event.target.checked
                                                    ? [...prevState.availability.hoursSchedulle, "10:00"]
                                                    : prevState.availability.hoursSchedulle.filter(
                                                        (hour) => hour !== "10:00"
                                                    ),
                                            },
                                        }))
                                    }
                                />
                                <label htmlFor="dezHoras">10:00</label>

                                <input
                                    type="checkbox"
                                    name="hoursSchedulle"
                                    id="onzeHoras"
                                    value={"11:00"}
                                    checked={formState.availability.hoursSchedulle.includes("11:00")}
                                    onChange={(event) =>
                                        setFormState((prevState) => ({
                                            ...prevState,
                                            availability: {
                                                ...prevState.availability,
                                                hoursSchedulle: event.target.checked
                                                    ? [...prevState.availability.hoursSchedulle, "11:00"]
                                                    : prevState.availability.hoursSchedulle.filter(
                                                        (hour) => hour !== "11:00"
                                                    ),
                                            },
                                        }))
                                    }
                                />
                                <label htmlFor="onzeHoras">11:00</label>

                                <input
                                    type="checkbox"
                                    name="hoursSchedulle"
                                    id="dozeHoras"
                                    value={"12:00"}
                                    checked={formState.availability.hoursSchedulle.includes("12:00")}
                                    onChange={(event) =>
                                        setFormState((prevState) => ({
                                            ...prevState,
                                            availability: {
                                                ...prevState.availability,
                                                hoursSchedulle: event.target.checked
                                                    ? [...prevState.availability.hoursSchedulle, "12:00"]
                                                    : prevState.availability.hoursSchedulle.filter(
                                                        (hour) => hour !== "12:00"
                                                    ),
                                            },
                                        }))
                                    }
                                />
                                <label htmlFor="dozeHoras">12:00</label>

                                <input
                                    type="checkbox"
                                    name="hoursSchedulle"
                                    id="trezeHoras"
                                    value={"13:00"}
                                    checked={formState.availability.hoursSchedulle.includes("13:00")}
                                    onChange={(event) =>
                                        setFormState((prevState) => ({
                                            ...prevState,
                                            availability: {
                                                ...prevState.availability,
                                                hoursSchedulle: event.target.checked
                                                    ? [...prevState.availability.hoursSchedulle, "13:00"]
                                                    : prevState.availability.hoursSchedulle.filter(
                                                        (hour) => hour !== "13:00"
                                                    ),
                                            },
                                        }))
                                    }
                                />
                                <label htmlFor="trezeHoras">13:00</label>

                                <input
                                    type="checkbox"
                                    name="hoursSchedulle"
                                    id="quatorzeHoras"
                                    value={"14:00"}
                                    checked={formState.availability.hoursSchedulle.includes("14:00")}
                                    onChange={(event) =>
                                        setFormState((prevState) => ({
                                            ...prevState,
                                            availability: {
                                                ...prevState.availability,
                                                hoursSchedulle: event.target.checked
                                                    ? [...prevState.availability.hoursSchedulle, "14:00"]
                                                    : prevState.availability.hoursSchedulle.filter(
                                                        (hour) => hour !== "14:00"
                                                    ),
                                            },
                                        }))
                                    }
                                />
                                <label htmlFor="quatorzeHoras">14:00</label>

                                <input
                                    type="checkbox"
                                    name="hoursSchedulle"
                                    id="quinzeHoras"
                                    value={"15:00"}
                                    checked={formState.availability.hoursSchedulle.includes("15:00")}
                                    onChange={(event) =>
                                        setFormState((prevState) => ({
                                            ...prevState,
                                            availability: {
                                                ...prevState.availability,
                                                hoursSchedulle: event.target.checked
                                                    ? [...prevState.availability.hoursSchedulle, "15:00"]
                                                    : prevState.availability.hoursSchedulle.filter(
                                                        (hour) => hour !== "15:00"
                                                    ),
                                            },
                                        }))
                                    }
                                />
                                <label htmlFor="quinzeHoras">15:00</label>

                                <input
                                    type="checkbox"
                                    name="hoursSchedulle"
                                    id="dezesseisHoras"
                                    value={"16:00"}
                                    checked={formState.availability.hoursSchedulle.includes("16:00")}
                                    onChange={(event) =>
                                        setFormState((prevState) => ({
                                            ...prevState,
                                            availability: {
                                                ...prevState.availability,
                                                hoursSchedulle: event.target.checked
                                                    ? [...prevState.availability.hoursSchedulle, "16:00"]
                                                    : prevState.availability.hoursSchedulle.filter(
                                                        (hour) => hour !== "16:00"
                                                    ),
                                            },
                                        }))
                                    }
                                />
                                <label htmlFor="dezesseisHoras">16:00</label>

                                <input
                                    type="checkbox"
                                    name="hoursSchedulle"
                                    id="dezesseteHoras"
                                    value={"17:00"}
                                    checked={formState.availability.hoursSchedulle.includes("17:00")}
                                    onChange={(event) =>
                                        setFormState((prevState) => ({
                                            ...prevState,
                                            availability: {
                                                ...prevState.availability,
                                                hoursSchedulle: event.target.checked
                                                    ? [...prevState.availability.hoursSchedulle, "17:00"]
                                                    : prevState.availability.hoursSchedulle.filter(
                                                        (hour) => hour !== "17:00"
                                                    ),
                                            },
                                        }))
                                    }
                                />
                                <label htmlFor="dezesseteHoras">17:00</label>

                                <input
                                    type="checkbox"
                                    name="hoursSchedulle"
                                    id="dezoitoHoras"
                                    value={"18:00"}
                                    checked={formState.availability.hoursSchedulle.includes("18:00")}
                                    onChange={(event) =>
                                        setFormState((prevState) => ({
                                            ...prevState,
                                            availability: {
                                                ...prevState.availability,
                                                hoursSchedulle: event.target.checked
                                                    ? [...prevState.availability.hoursSchedulle, "18:00"]
                                                    : prevState.availability.hoursSchedulle.filter(
                                                        (hour) => hour !== "18:00"
                                                    ),
                                            },
                                        }))
                                    }
                                />
                                <label htmlFor="dezoitoHoras">18:00</label>
                            </div>
                        </div>

                        <button type="submit" className="btn-addAgenda">Adicionar agenda</button>
                    </form>
                </div>
            </div>
        )
    } else {
        return <></>;
    }
}


