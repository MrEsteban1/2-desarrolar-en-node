const {encontrarSuperHeroe} = require('../../src/fundamentos-javascript/03-callbacks')

describe('fundamentos-javascript/callbacks: ',()=>{

    test('Debe devolver error si no encuentra el Super Heroe', (done)=>{
        const nombre = 'Pildora'

        encontrarSuperHeroe(nombre, (err, nombre)=>{
            expect(err.message).toBe("No se encontró el superHeroes con nombre "+nombre)
        })

        done()
    })

    test('Debe devolver el nombre del heroe si lo encuentra',()=>{
        const nombre = 'batman'

        encontrarSuperHeroe(nombre, (err, nombre)=>{
            expect(err).toBe(undefined)
        })
    })
})