import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterCard({infoCharacter}) {
  return (
    <article>
      <Link className="card__data" to={`/detail/${infoCharacter.id}`}>
        <img className="card__image" src={infoCharacter.image} alt="" />
        <div className="card__texts">
          <p>Nombre: {infoCharacter.name}</p>
          <p>Especie: {infoCharacter.species}</p> 
        </div>       
      </Link>     
    </article>
  )
}

CharacterCard.propTypes = {
  infoCharacter: PropTypes.array,
};

export default CharacterCard