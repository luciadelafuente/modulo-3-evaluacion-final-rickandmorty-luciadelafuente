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


  //UseEffect para coger los datos de la API y meterlos en la variable de estado que he creado
  useEffect(() => {
    getDataFromApi().then((newArray) => {
      // Ordenar el array obtenido de la API alfabéticamente
      const orderArray = newArray.sort((a, b) => a.name.localeCompare(b.name));
      setListCharacter(orderArray);
    });
  }, []);
  
  //Función que verifica si el planeta está macado o no
  const changeOriginFilter = (value) => {
    //Buscar si el planeta esta en el array
    if (originFilter.includes(value)) {
      //Hago un filter que nos devuelve un array de los planetas que sean diferentes del value marcado por el usuario
      const newPlanets = originFilter.filter(planet => planet !== value)
      //Aquí modifico mi variable de estado y la sustituyo por ese nuevo Array
      setOriginFilter(newPlanets)
    } else {
      //Si no está el planeta en el array de origin lo añado
      setOriginFilter([...originFilter, value])
    }
  }

  //Función para recoger los planetas en una nueva variable
  const getPlanets = () => {
    // Saco todas los planetas del array de personajes y los meto en una variable
    const planets = listCharacter.map((character) => character.origin)
    //Set: función para recoger los planetas pero sin que se repitan en otra variable
    const uniquePlanets = new Set(planets)
    //Array en el que recojo los planetas sin repetir de la variable anterior
    const uniqueArray = [...uniquePlanets]
    //Esta función me devuelve el array de planetas sin repetir
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
      return character; // Incluye todos los personajes si specieFilter está vacío
    }else{
      return character.species === specieFilter; // Filtra por especie cuando searchCharacter tiene un valor
    }
  }).filter((character) => {
    if (originFilter.length === 0) {
      return character // Incluye todos los personajes si originFilter está vacío
    } else {
      return originFilter.includes(character.origin) // Filtra por origen cuando searchCharacter tiene un valor
    }
  }).filter((character) => {
    if (statusFilter === "") {
      return character; // Incluye todos los personajes si statusFilter está vacío
    }else{
      return character.status === statusFilter; // Filtra por estado cuando searchCharacter tiene un valor
    }
  })



  //Variable que recoge el nombre de la ruta mediante destructuring y el hook useLocation
  const { pathname } = useLocation();
  //Variable que verifica si estoy en la ruta dinámica que yo le he dicho a través de mathPath, si no está devuelve null
  const characterRoute = matchPath("/detail/:id", pathname)
  //Variable que en caso de que coincida la ruta dinámica, recojo de esa ruta el id que he mandado por parámetro
  const characterIdUrl = characterRoute ? characterRoute.params.id : null;
   //Variable que encuentra y se queda con el personaje de mi array que coincide con el id que he recogido de la url en la variable characterIdUrl
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
          <div className="notfound">
              <h2 className="text__notfound" >No se ha encontrado ningún personaje</h2>
              <Link className="card__link" to="/"> Ir a home</Link>
          </div>
          
        </>
      } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

