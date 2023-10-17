import  { useState } from 'react';

function CadastroMedico() {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [crm, setCrm] = useState('');

    const handleSubmit = () => {
        
        
        console.log(`Name: ${name}, Especialidade: ${specialty}, CRM: ${crm}`);
      };

  return (
    <div>
        <h1>Cadastrar Médico</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </div>
            <div>
            
            <label htmlFor="especialidade">Especialidade:</label>
            <input
                type="text"
                id="specialty"
                value={especialidade}
                onChange={(e) => setSpecialty(e.target.value)}
                required
            />
            </div>
            <div>
            <label htmlFor="crm">CRM:</label>
            <input
                type="text"
                id="crm"
                value={crm}
                onChange={(e) => setCrm(e.target.value)}
                required
            />
            </div>
            <button class="nav-buttons" type="submit">Submit</button>
        </form>
    </div>
  );
}

export default CadastroMedico;