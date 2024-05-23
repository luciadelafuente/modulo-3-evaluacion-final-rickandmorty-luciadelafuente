import { Link } from "react-router-dom";

function CharacterDetail({characterDetail}) {
  return (characterDetail ?
    <div>
      <img src={characterDetail.image} alt="" />
      <p>Nombre: {characterDetail.name}</p>
      <p>Especie: {characterDetail.species}</p>
      <p>Planeta de origen: {characterDetail.origin}</p>
      <p>Número de episodios en los que aparece: {characterDetail.episodes}</p>
      <p>Estado: {characterDetail.status}</p>
      <Link to="/"> Ir a home</Link>
    </div> 
    : <>
        <h2>No se ha encontrado ningún personaje</h2>
        <Link to="/"> Ir a home</Link>
    </> 
  )
}

export default CharacterDetail