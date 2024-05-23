
function FilterByOrigin({planets, changeOriginFilter}) {
    const handleCheckbox = (event) => {
        changeOriginFilter(event.target.value)
    }

  return (
    <div className="form__checkbox">
        <label className="form__text" htmlFor="">Filtra los personajes seleccionando su planeta de origen:</label>
        {planets.map((planet) => {
        return <>
            <article className="checkbox__text">
                <input className="form__input" type="checkbox" name="" id="" value={planet} onChange={handleCheckbox} />
                <label htmlFor="">{planet}</label>
            </article>
                
            </>
        }

    )}

    </div>
  )
}

export default FilterByOrigin