import { useState } from 'react'
import '../../styles/RegisterSchedule.css'
import '../../styles/components/ModalSchedule.css'
import { Modal } from '../../components/modalSchedule/modalSchedule'

interface IProps {
  open: boolean
}

function RegisterSchedule({open}:IProps) {
  const [openModal, setOpenModal] = useState<boolean>(open)

  return (
    <div className='ScheduleBody'>
      <Modal isOpen={openModal} setOpenModal={setOpenModal}/>
    </div>
  )
}

export default RegisterSchedule

