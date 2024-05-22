import { Link, Navigate } from "react-router-dom";

function CharacterDetail({characterDetail}) {
  return (characterDetail ?
    <div>
      <img src={characterDetail.image} alt="" />
      <p>{characterDetail.name}</p>
      <p>{characterDetail.species}</p>
      <Link to="/"> Ir a home</Link>
    </div> 
    : <>
        <h2>No se ha encontrado ningún personaje</h2>
        <Link to="/"> Ir a home</Link>
    </> 
  )
}

export default CharacterDetail