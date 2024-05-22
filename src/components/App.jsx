import '../styles/App.css';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';

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
      return character.name.includes(searchCharacter); // Filtra por nombre cuando searchCharacter tiene un valor
    }
  });

  return (
    <>
      <Filters setSearchCharacter={setSearchCharacter} />
      <CharacterList listCharacter={filterData}/>
    </>
  );
}

export default App;

