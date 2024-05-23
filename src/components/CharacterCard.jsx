import { Link } from "react-router-dom";

function CharacterCard({infoCharacter}) {
  return (
    <article>
      <Link to={`/detail/${infoCharacter.id}`}>
        <img src={infoCharacter.image} alt="" />
        <p>Nombre: {infoCharacter.name}</p>
        <p>Especie: {infoCharacter.species}</p>        
      </Link>     
    </article>
  )
}

export default CharacterCard