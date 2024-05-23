
function FilterBySpecie({setSpecieFilter, specieFilter}) {

    const handleChange = (event) => {
        setSpecieFilter(event.target.value);
    }

  return (

    <div>
        <label htmlFor="">Selecciona una especie:</label>
        <select name="" id="" onChange={handleChange} value={specieFilter} >
            <option value="">Todas</option>
            <option value="Human">Humano</option>
            <option value="Alien">Alien</option>
        </select>
    </div>
  )
}

export default FilterBySpecie