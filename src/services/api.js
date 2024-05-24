// Fichero src/services/api.js
const getDataFromApi = () => {
  // Llamamos a la API
  return fetch("https://rickandmortyapi.com/api/character") 
    .then((response) => response.json())
    .then((data) => {
      //hago map para del array que me da la API coger solo los datos que yo quiero
      const newArray = data.results.map((character)=>{
        return{
          name: character.name,
          id: character.id,
          status: character.status,
          species: character.species,
          gender: character.gender,
          image: character.image,
          origin: character.origin.name,
          episodes: character.episode.length,
        };
      });
      return newArray;
    });
};

export default getDataFromApi;