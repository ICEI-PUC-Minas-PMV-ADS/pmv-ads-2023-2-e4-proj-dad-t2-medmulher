import { useState } from 'react'
import React from "react";
import Header from "../../components/header"
import '../../styles/RegisterSchedule.css'
import '../../styles/components/ModalSchedule.css'
import { Modal } from '../../components/modalSchedule/modalSchedule'

function RegisterSchedule() {
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <div className='ScheduleBody'>
      <Header />

      {/*Adicionar Button e Modal à pagina onde será linkada*/}
      <button onClick={() => setOpenModal(!openModal)}>Adicionar Agenda</button>
      <Modal isOpen={openModal} setOpenModal={setOpenModal}/>
    </div>
  )
}

export default RegisterSchedule

