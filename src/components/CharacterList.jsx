import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterList({listCharacter, searchCharacter}) {
 
  const listHtml = listCharacter.map((character)=> <CharacterCard key={character.id} infoCharacter={character} />)
  return (listCharacter.length !== 0 ?
    <div className="list">
      {listHtml}
    </div>
    : <>
    <div  className="notfound">
        <h2 className="text__notfound" >No se ha encontrado ningún personaje que coincida con la palabra {searchCharacter} o con alguno de los criterios de búsqueda.</h2>
        <Link className="card__link" to="/"> Ir a home</Link>
    </div>
      
    </> 
  )
}

CharacterList.propTypes = {
  listCharacter: PropTypes.array,
  searchCharacter: PropTypes.string,
};

export default CharacterList