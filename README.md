![rick_and_morty_logo-t2](https://github.com/Adalab/modulo-3-evaluacion-final-luciadelafuente/assets/161826787/2352f1fb-5f42-45a9-88b7-4ee4b118f7fb)

## **RICK AND MORTY - EVALUACIÓN MÓDULO 3: REACT** 

¡Hola! esta aplicación web es el resultado del ejercicio de evaluación final del módulo tres del bootcamp de Programación Web de Adalab.

## 📝​ **Estructura de la aplicación**

Al entrar en la aplicación tenemos un header con el logo de la serie Rick and Morty.

Debajo de él hay un formulario para buscar a los personajes. Tiene cuatro componentes:

Un filtro para buscar a un personaje por su nombre.
Un filtro tipo select para buscar a los personajes según su especie.
Otro filtro de tipo select para buscar por su estado: vivo, muerto o desconocido.
Un último filtro de tipo checkbox que nos permite filtrar por su planeta de origen.
Situado bajo el formulario, está el listado de los personajes.

La estructura de la aplicación está dividida en diferentes componentes de React, siguiendo una jerarquía.

## 🔎​ **Búsqueda**
En la barra de búsqueda por personaje podemos escribir el nombre de un personaje o parte de él. La búsqueda es aútomática, se realiza el filtado según vamos escribiendo. De esta manera se muestra el listado de todos los personajes que cumplan los requisitos de la búsqueda. La información que se muestra de cada personaje es su foto, nombre y especie.

Podemos aplicar el filtro por nombre, especie, estado y origen, pudiento utilizar uno, dos, tres, o los cuatro criterios de búsqueda.

## ​🧟​​🙋​​**Ver detalles de cada personaje**

Cuando queramos conocer más detalles de algún personaje, clicaremos sobre la tarjeta del mismo. De esta manera navegaremos a una url diferente asignada a cada personaje, y en ella veremos su foto, especie, planeta de origen, número de episodios en los que aparece, y su estado.

Además, hay un botón de "Ir a home", y clicando sobre él volveremos a la url de la página principal. Los valores establecidos en los filtros de búsqueda seguirán siendo los mismos que había antes de clicar sobre la ficha de personaje.

## ✅**Tecnologías utilizadas**

HTML5
CSS3
React JS
React Router
Prop-types
npm
Git
API: https://rickandmortyapi.com/documentation/#get-all-characters

## 💻​**¿Cómo arrancar el proyecto?**

Instala las dependecias locales ejecutando en la terminal el comando: npm install
Instala el paquete del enrutador React Router DOM: npm install react-router-dom
Instala la librería para validar las props: npm install prop-types
Arranca el proyecto ejecutando a continuación en la terminal: npm run dev
