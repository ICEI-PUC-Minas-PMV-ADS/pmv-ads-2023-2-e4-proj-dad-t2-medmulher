import '../../styles/RegisterDoctor.css';
import { useState } from 'react';
import { apiBase } from '../../services/api';
import Header from '../../components/header/index';
import RegisterDoctorModalFailure from '../registerDoctorModalFailure/index';
import RegisterDoctorModalSuccess from '../registerDoctorModalSuccess/index';

const RegisterDoctor = () => {

     
    const [selectedEspecialidade, setSelectedEspecialidade] = useState('');
    const [nameMedico, setNameMedico] = useState('');
    const [crm, setCrm] = useState('');

    const [isOpenSuccess, setIsOpenSuccess] = useState(false);
    const [isOpenFailure, setIsOpenFailure] = useState(false);
    const [modalText, setModalText] = useState('');

    const especialidadeOptions = [
        {value: '', label: 'Selecione uma especialidade' },
        {value: 'endocrinologista', label: 'Endocrinologista' },
        {value: 'ginecologista', label: 'Ginecologista' },
        {value: 'mastologista', label: 'Mastologista' },
        {value: 'nutricionista', label: 'Nutricionista' },
        {value: 'obstetra', label: 'Obstetra' },
        {value: 'psicologa', label: 'Psicologa' }
    ];

    var doctor = {
      name: nameMedico,
      specialty: selectedEspecialidade,
      crm:crm
    };

    const handleSubmit = async (e: any) => {

      e.preventDefault();      
      try{
        
        const response = await apiBase.post("doctors", JSON.stringify(doctor))
        
        if(response.status === 201){
          
          console.log(response)
          console.log(response.data.message)
          
          setCrm("");
          setNameMedico("");
          setModalText(response.data.message)
          setIsOpenSuccess(true);
          
          return response;
        }       

      } catch(err: any){
        
        if (err.response.status === 400){
          console.log(err.response)
          setModalText(err.response.data.message)
          setIsOpenFailure(true);
        }
        if (err.response.status !==400){
          console.log(err.response.status);      
          setModalText("Ops! Ocorreu um erro ao processar sua requisição");
          setIsOpenFailure(true);
        }        
        return err      
      }      
    };

    return (

      <>
      <Header />

      <div className="Register">
        {/* <div className="header">
          <img className="header-logo" src={Logo} alt="Logo do MedMulher" />
        </div> */}

        <div className="container">
          <div className="input-group">
            <div className="title">
              <h1>Cadastrar Médico</h1>
            </div>
            <br></br>

            <form onSubmit={handleSubmit}>

              <div className="input-box">
                <label htmlFor="nomeMedico">Nome</label>
                <input type="text" placeholder="Digite seu nome" value={nameMedico} onChange={e => setNameMedico(e.target.value)} />
              </div>
              <br></br>



              <div className="input-box">
                <label htmlFor="dropdownEspecialidades">Especialidade</label>
                <select id="dropdownEspecialidades" onChange={e => setSelectedEspecialidade(e.target.value)}>

                  {especialidadeOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <br></br>

              <div className="input-box">
                <label htmlFor="crm">CRM</label>
                <input type="text" placeholder="1234-00" value={crm} onChange={e => setCrm(e.target.value)} />
              </div>
              <br></br>

              <button className="button-form" type="submit">Finalizar Cadastro</button>

            </form>
            {isOpenSuccess && <RegisterDoctorModalSuccess setIsOpenSuccess={setIsOpenSuccess} modalText={modalText} crm={crm}/>}
            {isOpenFailure && <RegisterDoctorModalFailure setIsOpenSuccess={setIsOpenFailure} modalText={modalText} />}
          </div>
        </div>
      </div>
      </>
    );
  };

export default RegisterDoctor;