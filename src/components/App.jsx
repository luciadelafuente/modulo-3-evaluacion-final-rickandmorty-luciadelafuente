import '../styles/App.css';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { Route, Routes, matchPath, useLocation, Link} from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

function App() {
    //Variable de estado que de valor inicial recibe un array vacío
    const [listCharacter, setListCharacter] = useState([]);

    //Variable que recoge los datos buscados en el input de búsqueda
    const [searchCharacter, setSearchCharacter] = useState([]);

     //UseEffect para coger los datos de la API y meterlos en la variable de estado que he creado (listUser)
    useEffect(()=>{
    getDataFromApi().then((newArray)=>{setListCharacter(newArray)});
  }, []);

   const filterData = listCharacter.filter((character) => {
    if (searchCharacter === "") {
      return true; // Incluye todos los personajes si searchCharacter está vacío
    }else{
      return character.name.toLowerCase().includes(searchCharacter.toString().toLowerCase()); // Filtra por nombre cuando searchCharacter tiene un valor
    }
  });

  const { pathname } = useLocation();
  console.log(pathname)
  //valida si estoy en la ruta dinamica /detail/:id, sino estas en la ruta /detail/:id devuelve null
  const characterRoute = matchPath("/detail/:id", pathname)
  //en caso que la ruta coincida, obtengo de esa ruta el id enviado por parametros
  const characterIdUrl = characterRoute ? characterRoute.params.id : null;
  //characterIdUrl contiene el id de la url

  //busco el usuario que tiene un id  =  al que se ha enviado por la url
  const characterDetail = listCharacter.find(character => character.id === parseInt(characterIdUrl));
   console.log(characterDetail);

  return (
    <>
      <Routes>
        <Route path="/" element= {
          <>
            <Filters setSearchCharacter={setSearchCharacter} />
            <CharacterList listCharacter={filterData}/>
          </>
        }/>
        <Route path="/detail/:id" element= {<CharacterDetail characterDetail={characterDetail} />} />
        <Route path="*" element={
        <>
          <h2>No se ha encontrado ningún personaje</h2>
          <Link to="/"> Ir a home</Link>
        </>
      } />
      </Routes>
    </>
  );
}

export default App;

