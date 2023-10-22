import '../../styles/RegisterDoctor.css';
import Logo from "../../assets/Logo-rosa.svg"
import { useState } from 'react';
import { options } from 'yargs';
import axios from 'axios';

const CadastroMed = () => {

    var URL = "http://localhost:3000/doctors";
  
    const [selectedEspecialidade, setSelectedEspecialidade] = useState('');
    const [nameMedico, setNameMedico] = useState('');
    const [crm, setCrm] = useState('');

    const handleEspecialidadeChange = (event: any) =>{
        setSelectedEspecialidade(event.target.value);
    };

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

    console.log(JSON.stringify(doctor));

    
    const handleSubmit = () => {

      fetch(URL, {
        method: 'POST',
        body: JSON.stringify(doctor),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(res => res.json())
      .then((data) => {console.log(data)})
      .catch((error) => {console.log(error)})

        // axios.post(URL, doctor)
        //   .then((res : any)  => console.log(res.data))
        //   .catch((error: any) => {
        //     console.log(error)
        //   })
        // console.log(`${nameMedico}    ${selectedEspecialidade}      ${crm}  `);
    };

    return (
      <div className="Register">
        <div className="header">
          <img className="header-logo" src={Logo} alt="Logo do MedMulher" />
        </div>
  
        <div className="container">
          <div className="input-group">
            <div className="title">
              <h1>Cadastrar Médico</h1>
            </div>
            <br></br>

            <form onSubmit={handleSubmit}>

            <div className="input-box">
              <label htmlFor="nomeMedico">Nome</label>
              <input type="text" placeholder="Digite seu nome" value={nameMedico} onChange={e => setNameMedico(e.target.value)}/>
            </div>
            <br></br>



            <div className="input-box">
            <label htmlFor="dropdownEspecialidades">Especialidade</label>
            <select id="dropdownEspecialidades" onChange={handleEspecialidadeChange}>
                
                {especialidadeOptions.map((option) => (
                    <option key={option.value}  value={option.value}>{option.label}</option>
                ))}
            </select>
            </div>
            <br></br>

            <div className="input-box">
              <label htmlFor="crm">CRM</label>
              <input type="text" placeholder="1234-00" value={crm} onChange={e => setCrm(e.target.value)}/>        
            </div>
            <br></br>
            
  
            <button type="submit" >Finalizar Cadastro</button>
            
            </form>

            </div>
          </div>
        </div>
    );
  };

export default CadastroMed;