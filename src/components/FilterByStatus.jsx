function FilterByStatus({statusFilter, setStatusFilter}) {

    const handleChange = (event) => {
        setStatusFilter(event.target.value);
    }

  return (
    <div>
        <label htmlFor="">Selecciona un estado:</label>
        <select name="" id="" onChange={handleChange} value={statusFilter} >
            <option value="">Todos</option>
            <option value="Dead">Muerto</option>
            <option value="Alive">Vivo</option>
            <option value="unknown">Desconocido</option>
        </select>
    </div>
  )
}

export default FilterByStatus