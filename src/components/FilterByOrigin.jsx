
function FilterByOrigin({planets, changeOriginFilter}) {
    const handleCheckbox = (event) => {
        changeOriginFilter(event.target.value)
    }

  return (
    <div>
        <label htmlFor="">Filtra los personajes seleccionando su planeta de origen:</label>
        {planets.map((planet) => {
        return <>
                <input type="checkbox" name="" id="" value={planet} onChange={handleCheckbox} />
                <label htmlFor="">{planet}</label>
            </>
        }

    )}

    </div>
  )
}

export default FilterByOrigin