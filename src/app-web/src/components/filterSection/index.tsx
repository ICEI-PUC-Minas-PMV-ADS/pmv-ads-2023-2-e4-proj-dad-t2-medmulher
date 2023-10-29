import { MdAdd } from "react-icons/md";
import "../../styles/components/FilterSection.css";
import RegisterSchedule from "../../screens/registerSchedule";
import { useState } from "react";

const FilterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="filter-schedulle">
      <button
        className="secundary"
        onClick={() =>  setIsOpen(!isOpen)}
      >
        <MdAdd /> Adicionar agenda
      </button>
      <div className="filter">
        <span>Filtrar por data:</span>
        <input type="date" />
      </div>
      {isOpen && <RegisterSchedule open={true} />}
    </section>
    
  );
};

export default FilterSection;
