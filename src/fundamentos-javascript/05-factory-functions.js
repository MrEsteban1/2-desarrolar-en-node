const uuid = require('uuid')

const dato = {
    nombre: 'spiderman',
    ubicacion: 'NY',
    edad: 17
}

const getId = () => uuid.v4()

function registrarHeroe(heroe=dato){
 
    return {
        id: getId(),
        name: heroe.nombre,
        ubicacion: heroe.ubicacion,
        birthYear: new Date().getFullYear() - heroe.edad
    }
}


module.exports = registrarHeroe