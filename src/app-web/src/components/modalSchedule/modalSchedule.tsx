interface IModal {
    isOpen: boolean;
    setOpenModal: (isOpen: boolean) => void
}

export function Modal({ isOpen, setOpenModal }: IModal) {
    if (isOpen) {
        return (
            <div className="modalBg">
                <div className="cadastroMed-container">
                    <button className="btn-fecharModal" onClick={() => setOpenModal(!isOpen)}>X</button>
                    <h1>Editar agenda</h1>
                    <form action="" method="post">

                        <div className="selectMed-container">
                            <label htmlFor="Selectmedicos">Médicos</label>
                            <select name="" id="Selectmedicos" className="select-medicos">
                                <option value="">Selecione o médico</option>
                                {/*PUXAR NOME DOS MÉDICOS DO BANCO DE DADOS*/}
                                <option value="">Dra. Beatriz</option>
                                <option value="">Dra. Criatina</option>
                                <option value="">Dr. Rafael</option>
                                <option value="">Dr. Gustavo</option>
                            </select>
                        </div>

                       <div className="selectDias-container">
                            <label htmlFor="">Selecione os dias da semana</label>
                            <div className="select-dias">
                                <input type="checkbox" name="SEG" id="segunda" />
                                <label htmlFor="segunda">SEG</label>

                                <input type="checkbox" name="TER" id="terça" />
                                <label htmlFor="terça">TER</label>

                                <input type="checkbox" name="QUA" id="quarta" />
                                <label htmlFor="quarta">QUA</label>

                                <input type="checkbox" name="QUI" id="quinta" />
                                <label htmlFor="quinta">QUI</label>

                                <input type="checkbox" name="SEX" id="sexta" />
                                <label htmlFor="sexta">SEX</label>
                            </div>
                        </div>

                        <div className="selectHoras-container">
                            <label htmlFor="">Selecione os horários de atendimento</label>
                            <div className="select-horas">
                                {/*FAZER INTERAÇÃO DE BOTÕES MULTISELECIONAVEIS*/}
                                <input className="btn-h" type="checkbox" name="8:00" id="8:00" />
                                <label htmlFor="8:00">8:00</label>

                                <input className="btn-h" type="checkbox" name="9:00" id="9:00" />
                                <label htmlFor="9:00">9:00</label>

                                <input type="checkbox" name="10:00" id="10:00" />
                                <label htmlFor="10:00">10:00</label>

                                <input type="checkbox" name="11:00" id="11:00" />
                                <label htmlFor="11:00">11:00</label>

                                <input type="checkbox" name="12:00" id="12:00" />
                                <label htmlFor="12:00">12:00</label>

                                <input type="checkbox" name="13:00" id="13:00" />
                                <label htmlFor="13:00">13:00</label>

                                <input type="checkbox" name="14:00" id="14:00" />
                                <label htmlFor="14:00">14:00</label>

                                <input type="checkbox" name="15:00" id="15:00" />
                                <label htmlFor="15:00">15:00</label>

                                <input type="checkbox" name="16:00" id="16:00" />
                                <label htmlFor="16:00">16:00</label>

                                <input type="checkbox" name="17:00" id="17:00" />
                                <label htmlFor="17:00">17:00</label>

                                <input type="checkbox" name="18:00" id="18:00" />
                                <label htmlFor="18:00">18:00</label>
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


