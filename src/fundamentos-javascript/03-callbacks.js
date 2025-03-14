const superHeroes = ['superman', 'batman', 'spiderman', 'thor']

function encontrarSuperHeroe(nombre,callback){
    const superHeroe = superHeroes.find(dato => dato === nombre)
    let error

    if(!superHeroe)
        error = new Error('No se encontró el superHeroes con nombre '+nombre)
    
    return callback(error, nombre)
}

function manejarError(error, nombre){

    if(error)
        return error.message

    return 'Se encontró el nombre entre los super heroes: '+nombre
}

module.exports = {superHeroes, encontrarSuperHeroe, manejarError}