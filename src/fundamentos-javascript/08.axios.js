const { default: axios } = require("axios")

const obtenerPokemonsAleatoriosConAxios = async (cantidad = 10)=>{
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${cantidad}&offset=0`

    const {data} = await axios.get(url)
    
    const {results:pokemones} = data

    return pokemones.map(pokemon => pokemon.name)
}


module.exports = {
    obtenerPokemonsAleatoriosConAxios
}