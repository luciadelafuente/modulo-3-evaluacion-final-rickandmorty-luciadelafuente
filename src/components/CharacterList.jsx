import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

function CharacterList({listCharacter, searchCharacter}) {
 
  const listHtml = listCharacter.map((character)=> <CharacterCard key={character.id} infoCharacter={character} />)
  return (listCharacter.length !== 0 ?
    <div className="list">
      {listHtml}
    </div>
    : <>
    <div  className="notfound">
        <h2 className="text__notfound" >No se ha encontrado ningún personaje que coincida con la palabra {searchCharacter}</h2>
        <Link className="card__link" to="/"> Ir a home</Link>
    </div>
      
    </> 
  )
}

export default CharacterList