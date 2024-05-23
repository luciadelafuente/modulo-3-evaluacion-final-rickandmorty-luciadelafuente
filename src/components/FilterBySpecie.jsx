import PropTypes from "prop-types";

function FilterBySpecie({setSpecieFilter, specieFilter}) {

    const handleChange = (event) => {
        setSpecieFilter(event.target.value);
    }

  return (

    <div className="form__select">
        <label className="form__text" htmlFor="">Selecciona una especie:</label>
        <select className="form__input" name="" id="" onChange={handleChange} value={specieFilter} >
            <option value="">Todas</option>
            <option value="Human">Humano</option>
            <option value="Alien">Alien</option>
        </select>
    </div>
  )
}

FilterBySpecie.propTypes = {
  specieFilter: PropTypes.string,
  setSpecieFilter: PropTypes.func,
};

export default FilterBySpecie