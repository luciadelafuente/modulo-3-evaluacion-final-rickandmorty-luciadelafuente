function FilterByName({setSearchCharacter}) {
    const handleInput = (event) => {
        event.preventDefault();
        setSearchCharacter(event.target.value);
    }
  return (
    <form>
        <label htmlFor="">Busca tu personaje favorito por su nombre:</label>
        <input onChange={handleInput} type="text" name="" id="" />
    </form>
  )
}

export default FilterByName