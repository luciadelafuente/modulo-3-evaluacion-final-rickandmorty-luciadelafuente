import '../styles/App.css';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { Route, Routes, matchPath, useLocation, Link} from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import Footer from './Footer';

function App() {
    //Variable de estado que de valor inicial recibe un array vacío
    const [listCharacter, setListCharacter] = useState([]);
    //Variable que recoge los datos buscados en el input de búsqueda
    const [searchCharacter, setSearchCharacter] = useState("");
    //Variable que recoge los datos filtrados por especie
    const [specieFilter, setSpecieFilter] = useState("");
    //Variable que recoge los datos filtrados por planeta
    const [originFilter, setOriginFilter] = useState([]);
    //Variable que recoge los datos filtrados por estado
    const [statusFilter, setStatusFilter] = useState("");


  //UseEffect para coger los datos de la API y meterlos en la variable de estado que he creado (listUser)
  useEffect(() => {
    getDataFromApi().then((newArray) => {
      // Ordenar el array obtenido de la API
      const orderArray = newArray.sort((a, b) => a.name.localeCompare(b.name));
      setListCharacter(orderArray);
    });
  }, []);
  
  //Función para recoger los planetas
  const changeOriginFilter = (value) => {
    //buscar si el planeta esta en el array
    if (originFilter.includes(value)) {
      // extraer el planeta del array
      const newPlanets = originFilter.filter(planet => planet !== value)
      setOriginFilter(newPlanets)
    } else {
      // si no está el planeta en el array de ciudades lo añado
      setOriginFilter([...originFilter, value])
    }
  }

  //Función para recoger los planetas
  const getPlanets = () => {
    // saco todas los planetas del array de personajes
    const planets = listCharacter.map((character) => character.origin)
    //Set me quedo con los valores unicos del array de planetas creado
    const uniquePlanets = new Set(planets)
    //convierto en un array el objeto devuelto por Set
    const uniqueArray = [...uniquePlanets]
    return uniqueArray
  }

  //Filtros
   const filterData = listCharacter.filter((character) => {
    if (searchCharacter === "") {
      return character; // Incluye todos los personajes si searchCharacter está vacío
    }else{
      return character.name.toLowerCase().includes(searchCharacter.toLowerCase()); // Filtra por nombre cuando searchCharacter tiene un valor
    }
  }).filter((character) => {
    if (specieFilter === "") {
      return character; // Incluye todos los personajes si searchCharacter está vacío
    }else{
      return character.species === specieFilter;
    }
  }).filter((character) => {
    if (originFilter.length === 0) {
      return character
    } else {
      return originFilter.includes(character.origin)
    }
  }).filter((character) => {
    if (statusFilter === "") {
      return character; 
    }else{
      return character.status === statusFilter;
    }
  })




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
      <Header/>
      <Routes>
        <Route path="/" element= {
          <>
            <Filters setSearchCharacter={setSearchCharacter} searchCharacter= {searchCharacter} setSpecieFilter={setSpecieFilter} specieFilter={specieFilter} planets={getPlanets()} changeOriginFilter={changeOriginFilter} statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
            <CharacterList listCharacter={filterData} searchCharacter= {searchCharacter}/>
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
      <Footer/>
    </>
  );
}

export default App;

