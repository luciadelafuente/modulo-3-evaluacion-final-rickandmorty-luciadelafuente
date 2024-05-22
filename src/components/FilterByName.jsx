function FilterByName({setSearchCharacter}) {
    const handleInput = (event) => {
        setSearchCharacter(event.target.value)
    }
  return (
    <div>
        <label htmlFor="">Busca tu personaje favorito por su nombre:</label>
        <input onChange={handleInput} type="text" name="" id="" />
    </div>
  )
}

export default FilterByName