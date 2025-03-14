const AsyncObtenerPokemonsAleatorios = async (cantidad = 10)=>{
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${cantidad}&offset=0`

    const response = await fetch(url)
    
    const {results:pokemones} = await response.json()
    console.log('Data de los pokemones:', url, pokemones.map(pokemon => pokemon.name))

    return pokemones.map(pokemon => pokemon.name)
}


module.exports = {
    AsyncObtenerPokemonsAleatorios
}