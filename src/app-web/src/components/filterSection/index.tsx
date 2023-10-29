import { MdAdd } from "react-icons/md";
import "../../styles/components/FilterSection.css"

const FilterSection = () => {
  return (
    <section className="filter-schedulle">
      <button className="secundary">
        <MdAdd /> Adicionar agenda
      </button>
      <div className="filter">
        <span>Filtrar por data:</span>
        <input type="date" />
      </div>
    </section>
  );
};

export default FilterSection;
