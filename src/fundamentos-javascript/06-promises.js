const obtenerPokemonsAleatorios = (cantidad = 10)=>{
    const url = `ahttps://pokeapi.co/api/v2/pokemon?limit=${cantidad}&offset=0`

    fetch(url)
        .then(response => {

        console.log('Data de los pokemones:', url)
        response.json().then( data => console.info(data.results))
        })
        .catch(error => console.error('Falló la petición de Pokemons ' + error.message,500))
        .finally(_ => console.log('Se termino la promise.'))

}


module.exports = {
    obtenerPokemonsAleatorios
}