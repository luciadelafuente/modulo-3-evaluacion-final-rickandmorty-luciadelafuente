import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

function CharacterList({listCharacter, searchCharacter}) {
 
  const listHtml = listCharacter.map((character)=> <CharacterCard key={character.id} infoCharacter={character} />)
  return (listCharacter.length !== 0 ?
    <div>
      {listHtml}
    </div>
    : <>
      <h2>No se ha encontrado ningún personaje que coincida con la palabra {searchCharacter}</h2>
      <Link to="/"> Ir a home</Link>
    </> 
  )
}

export default CharacterList