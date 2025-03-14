const texto_template_string = require("./fundamentos-javascript/01-template-string");
const {enemigo, nombre} = require("./fundamentos-javascript/02-desestructuracion");
const { encontrarSuperHeroe, manejarError } = require("./fundamentos-javascript/03-callbacks");
const registrarHeroe = require("./fundamentos-javascript/05-factory-functions");
const { obtenerPokemonsAleatorios } = require("./fundamentos-javascript/06-promises");
const { AsyncObtenerPokemonsAleatorios } = require("./fundamentos-javascript/07-async-await");
const { obtenerPokemonsAleatoriosConAxios } = require("./fundamentos-javascript/08.axios");
const { crearLogger } = require("./plugins/logger.plugin");
const logger = crearLogger('app.js')

console.info('01- Importamos un template string\n' + texto_template_string)
console.info('\n02- Importamos nombre de superheroe desestructurado y del enemigo\n' + nombre + ' pelea contra ' + enemigo)
console.info('\n03- Encontrar superHeroe\n ' + encontrarSuperHeroe('thor', manejarError))

console.info('\n05- Ejecutar Factory function:\n ' + JSON.stringify(registrarHeroe(),0,2))
console.info('\n06- Obtener pokemons aleatorios utilizando fetch:\n ' + obtenerPokemonsAleatorios())
console.info('\n07- Obtener pokemons aleatorios de forma async utilizando fetch:\n ' + AsyncObtenerPokemonsAleatorios())

obtenerPokemonsAleatoriosConAxios()
    .then(data => console.info('\n08- Obtener pokemons aleatorios con axios:\n ', data))

logger.log('hello world!')






