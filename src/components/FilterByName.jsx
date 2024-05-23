function FilterByName({setSearchCharacter, searchCharacter}) {
    const handleInput = (event) => {
        event.preventDefault();
        setSearchCharacter(event.target.value);
    }
  return (
    <form>
        <label htmlFor="">Busca tu personaje favorito por su nombre:</label>
        <input onChange={handleInput} type="text" name="" id="" value={searchCharacter}/>
    </form>
  )
}

export default FilterByName