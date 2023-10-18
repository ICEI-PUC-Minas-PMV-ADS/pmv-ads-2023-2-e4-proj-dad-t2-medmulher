import './CadastroMed.css';
import Logo from "./assets/Logo-rosa.svg"
import { useState } from 'react';
import { options } from 'yargs';

const CadastroMed = () => {

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

    const handleSubmit = () => {
        //falta adicionar fetch
        console.log(`${nameMedico}    ${selectedEspecialidade}      ${crm}  `);
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
  
            <div className="input-box">
              <label htmlFor="nomeMedico">Nome</label>
              <input type="text" placeholder="Digite seu nome" value={nameMedico} onChange={e => setNameMedico(e.target.value)}/>
            </div>
            <br></br>



            <div className="input-box">
            <label htmlFor="dropdownEspecialidades">Especialidade</label>
            <select id="dropdownEspecialidades" onChange={handleEspecialidadeChange}>
                
                {especialidadeOptions.map((option) => (
                    <option  value={option.value}>{option.label}</option>
                ))}
            </select>
            </div>
            <br></br>

            <div className="input-box">
              <label htmlFor="crm">CRM</label>
              <input type="text" placeholder="1234-00" value={crm} onChange={e => setCrm(e.target.value)}/>        
            </div>
            <br></br>
            
  
            <button type="submit" onClick={handleSubmit}>Finalizar Cadastro</button>
  
            </div>
          </div>
        </div>
    );
  };

export default CadastroMed;