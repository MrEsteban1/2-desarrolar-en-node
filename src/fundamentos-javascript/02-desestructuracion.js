const superHeroe = {
    nombre: 'Batman',
    poder: 'Millonario',
    ubicacion: 'Ciudad Gotica'
}

const enemigos = ['Guasón', 'Pinguino', 'Hera']

const [, , enemigo] = enemigos
const {nombre} = superHeroe

module.exports = {
    nombre:nombre,
    enemigo: enemigo,
    enemigos
}