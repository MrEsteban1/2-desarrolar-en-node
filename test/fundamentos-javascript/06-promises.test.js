const { obtenerPokemonsAleatorios } = require("../../src/fundamentos-javascript/06-promises");

describe('fundamentos-javascript/promises: ',(done)=>{
    test('obtenerPokemonsAleatorios() debe devolver un pokemon: ', (done)=>{
        const cantidad = 1
        const pokemons = obtenerPokemonsAleatorios(2).then( response => console.log(response))
        done()
        // expect(registrarHeroe()).toHaveProperty('ubicacion')
    })
})