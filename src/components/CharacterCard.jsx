import { Link } from "react-router-dom";

function CharacterCard({infoCharacter}) {
  return (
    <article>
      <Link to={`/detail/${infoCharacter.id}`}>
        <img src={infoCharacter.image} alt="" />
        <p>{infoCharacter.name}</p>
        <p>{infoCharacter.species}</p>        
      </Link>     
</article>
  )
}

export default CharacterCard