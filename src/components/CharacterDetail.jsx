import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterDetail({characterDetail}) {
  return (characterDetail ?
    <div className="card">
      <article className="card__data">
        <img className="card__image" src={characterDetail.image} alt="" />
        <div className="card__texts">
          <p>Nombre: {characterDetail.name}</p>
          <p>Especie: {characterDetail.species}</p>
          <p>Planeta de origen: {characterDetail.origin}</p>
          <p>Número de episodios en los que aparece: {characterDetail.episodes}</p>
          <p>Estado: {characterDetail.status}</p> 
        </div>
       
      </article>
      
      <Link className="card__link" to="/"> Ir a home</Link>
    </div> 
    : <div className="notfound">
        <h2 className="text__notfound">No se ha encontrado ningún personaje</h2>
        <Link className="card__link" to="/"> Ir a home</Link>
    </div> 
  )
}

CharacterDetail.propTypes = {
  characterDetail: PropTypes.array,
};

export default CharacterDetail