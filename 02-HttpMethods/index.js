/*
POKEAPI: https://pokeapi.co/
ENDPOINT: https://pokeapi.co/api/v2/pokemon/
*/

//1. VAMOS A TRAER A REQUEST QUE ACABAMOS DE INSTALAR

const request = require('request')

//2. DECLARAR NUESTRA URI DE MI API
const URI = 'https://pokeapi.co/api/v2/pokemon/'

//3. DECLARAR UNA FUNCION QUE PIDA UN POKEMON Y ME DEVUELVA SUS TIPOS

function getPokemonByName(name){
  request.get(URI + name, function(error,response,body){
    //validar si mi peticion es exitosa
    if(response.statusCode === 200){
      //parse convierte un objeto json en un objeto js
      const jsonContent = JSON.parse(body)
      const pokemonType = jsonContent.types.map((object)=> object.type.name)
      // const pokemonType = jsonContent.types[1].name

      console.log(`${name} es de tipo ${pokemonType}`)
    }else{
      console.log(`Ocurrio un error ${response.statusCode} ${response.statusMessage}`)
    }
  })
}

getPokemonByName('pikachuu')