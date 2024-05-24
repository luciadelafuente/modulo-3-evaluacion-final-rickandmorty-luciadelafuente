import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterList({listCharacter, searchCharacter, setSearchCharacter}) {
 
  const listHtml = listCharacter.map((character)=> <CharacterCard key={character.id} infoCharacter={character} />)

  const handleClick = () =>{
    setSearchCharacter("");
  }
  return (listCharacter.length !== 0 ?
    <div className="list">
      {listHtml}
    </div>
    : <>
    <div  className="notfound">
        <h2 className="text__notfound" >No se ha encontrado ningún personaje que coincida con la palabra {searchCharacter} o con alguno de los criterios de búsqueda.</h2>
        <button className="button" onClick={handleClick}>Mostrar listado de personajes</button>
    </div>
      
    </> 
  )
}

CharacterList.propTypes = {
  listCharacter: PropTypes.array,
  searchCharacter: PropTypes.string,
  setSearchCharacter: PropTypes.func,
};

export default CharacterList