function FilterByName({setSearchCharacter, searchCharacter}) {
    const handleInput = (event) => {
        event.preventDefault();
        setSearchCharacter(event.target.value);
    }
  return (
    <form className="form">
        <label className="form__text" htmlFor="">Busca tu personaje favorito por su nombre:</label>
        <input className="form__input" onChange={handleInput} type="text" name="" id="" value={searchCharacter}/>
    </form>
  )
}

export default FilterByName