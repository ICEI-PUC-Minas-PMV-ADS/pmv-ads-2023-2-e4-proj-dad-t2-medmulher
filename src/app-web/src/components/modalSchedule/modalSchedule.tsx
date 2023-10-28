import { useState } from "react";
import { useCallback } from 'react';
import React from "react";
import { isInputElement } from "react-router-dom/dist/dom";

interface IModal {
    isOpen: boolean;
    setOpenModal: (isOpen: boolean) => void
}

interface IFormState {
    selectmedicos: string;

    segunda: boolean;
    terça: boolean;
    quarta: boolean;
    quinta: boolean;
    sexta: boolean;

    oitoHoras: boolean;
    noveHoras: boolean;
    dezHoras: boolean;
    onzeHoras: boolean;
    dozeHoras: boolean;
    trezeHoras: boolean;
    quatorzeHoras: boolean;
    quinzeHoras: boolean;
    dezesseisHoras: boolean;
    dezesseteHoras: boolean;
    dezoitoHoras: boolean;

}


export function Modal({ isOpen, setOpenModal }: IModal) {

    //DADOS DO FORMULÁRIO
    const [formState, setFormState] = useState<IFormState>({
        selectmedicos: "",
        segunda: false,
        terça: false,
        quarta: false,
        quinta: false,
        sexta: false,
        oitoHoras: false,
        noveHoras: false,
        dezHoras: false,
        onzeHoras: false,
        dozeHoras: false,
        trezeHoras: false,
        quatorzeHoras: false,
        quinzeHoras: false,
        dezesseisHoras: false,
        dezesseteHoras: false,
        dezoitoHoras: false,
    });

    console.log({formState})

    
    //LISTA DE OPINIONS DO SELECT
    const selectNomeMedico = [
        { value: '', label: 'Selecione o médico' },
        //PUXAR NOME DOS MÉDICOS DO BANCO DE DADOS
        { value: 'Dra. Beatriz', label: 'Dra. Beatriz' },
        { value: 'Dra. Criatina', label: 'Dra. Criatina' }
    ];


    //MODAL DE SUCESSO/ERRO
    const [addSucesso, setAddSucesso] = useState(false);

    const handleSubmit = useCallback((event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const selectmedicos = formState;

        if (!selectmedicos) {
            window.alert("Preencha todos os campos!");

            setAddSucesso(false);

            return;
        }
        
        setAddSucesso(true);

    },[formState]);

    if(addSucesso){
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
                                value={formState.selectmedicos}
                                onChange={(event) => setFormState({
                                    ...formState,
                                    selectmedicos: event.currentTarget?.value || "",
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
                            <div className="select-dias">
                                <input
                                    type="checkbox"
                                    name="segunda"
                                    id="segunda"
                                    checked={formState.segunda}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        segunda: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="segunda">SEG</label>

                                <input
                                    type="checkbox"
                                    name="terça"
                                    id="terça"
                                    checked={formState.terça}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        terça: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="terça">TER</label>

                                <input
                                    type="checkbox"
                                    name="quarta"
                                    id="quarta"
                                    checked={formState.quarta}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        quarta: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="quarta">QUA</label>

                                <input
                                    type="checkbox"
                                    name="quinta"
                                    id="quinta"
                                    checked={formState.quinta}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        quinta: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="quinta">QUI</label>

                                <input
                                    type="checkbox"
                                    name="sexta"
                                    id="sexta"
                                    checked={formState.sexta}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        sexta: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="sexta">SEX</label>
                            </div>
                        </div>

                        <div className="selectHoras-container">
                            <label htmlFor="">Selecione os horários de atendimento</label>
                            <div className="select-horas">
                                {/*FAZER INTERAÇÃO DE BOTÕES MULTISELECIONAVEIS*/}
                                <input className="btn-h"
                                    type="checkbox"
                                    name="oitoHoras"
                                    id="oitoHoras"
                                    checked={formState.oitoHoras}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        oitoHoras: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="oitoHoras">8:00</label>

                                <input className="btn-h"
                                    type="checkbox"
                                    name="noveHoras"
                                    id="noveHoras"
                                    checked={formState.noveHoras}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        noveHoras: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="noveHoras">9:00</label>

                                <input type="checkbox"
                                    name="dezHoras"
                                    id="dezHoras"
                                    checked={formState.dezHoras}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        dezHoras: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="dezHoras">10:00</label>

                                <input type="checkbox"
                                    name="onzeHoras"
                                    id="onzeHoras"
                                    checked={formState.onzeHoras}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        onzeHoras: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="onzeHoras">11:00</label>

                                <input type="checkbox"
                                    name="dozeHoras"
                                    id="dozeHoras"
                                    checked={formState.dozeHoras}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        dozeHoras: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="dozeHoras">12:00</label>

                                <input type="checkbox"
                                    name="trezeHoras"
                                    id="trezeHoras"
                                    checked={formState.trezeHoras}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        trezeHoras: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="trezeHoras">13:00</label>

                                <input type="checkbox"
                                    name="quatorzeHoras"
                                    id="quatorzeHoras"
                                    checked={formState.quatorzeHoras}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        quatorzeHoras: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="quatorzeHoras">14:00</label>

                                <input type="checkbox"
                                    name="quinzeHoras"
                                    id="quinzeHoras"
                                    checked={formState.quinzeHoras}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        quinzeHoras: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="quinzeHoras">15:00</label>

                                <input type="checkbox"
                                    name="dezesseisHoras"
                                    id="dezesseisHoras"
                                    checked={formState.dezesseisHoras}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        dezesseisHoras: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="dezesseisHoras">16:00</label>

                                <input type="checkbox"
                                    name="dezesseteHoras"
                                    id="dezesseteHoras"
                                    checked={formState.dezesseteHoras}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        dezesseteHoras: !!event.currentTarget?.checked,
                                    })}
                                />
                                <label htmlFor="dezesseteHoras">17:00</label>

                                <input type="checkbox"
                                    name="dezoitoHoras"
                                    id="dezoitoHoras"
                                    checked={formState.dezoitoHoras}
                                    onChange={(event) => setFormState({
                                        ...formState,
                                        dezoitoHoras: !!event.currentTarget?.checked,
                                    })}
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


